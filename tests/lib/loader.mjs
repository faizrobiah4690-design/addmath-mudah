import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const REPO_ROOT = path.resolve(__dirname, '..', '..');

function parseTierArg(raw) {
  const tokens = String(raw || '').split(',').map((s) => s.trim());
  if (!String(raw || '').trim() || tokens.some((t) => !/^[1-5]$/.test(t))) {
    throw new Error(`Invalid --tier value "${raw}". Expected comma-separated integers in 1..5.`);
  }
  return [...new Set(tokens.map(Number))];
}

export function parseCliArgs(argv = process.argv.slice(2)) {
  let strict = false;
  let tiers = null;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--strict') {
      strict = true;
    } else if (arg.startsWith('--tier=')) {
      const parsed = parseTierArg(arg.slice('--tier='.length));
      if (tiers !== null) {
        throw new Error(`Duplicate --tier flag: --tier=${tiers.join(',')} and ${arg}`);
      }
      tiers = parsed;
    } else if (arg === '--tier') {
      if (i + 1 >= argv.length) throw new Error('Missing value for --tier');
      const val = argv[++i];
      const parsed = parseTierArg(val);
      if (tiers !== null) {
        throw new Error(`Duplicate --tier flag: --tier=${tiers.join(',')} and --tier ${val}`);
      }
      tiers = parsed;
    } else if (arg.startsWith('--')) {
      throw new Error(`Unknown CLI flag "${arg}". Supported flags: --strict, --tier=<1..5>`);
    }
  }
  return { strict, tiers };
}

export function parseIndexHtml(root = REPO_ROOT) {
  const indexPath = path.join(root, 'index.html');
  const html = fs.readFileSync(indexPath, 'utf8');

  const scripts = [];
  for (const m of html.matchAll(/<script[^>]+src="([^"]+)"/gi)) {
    const raw = m[1].trim();
    if (/^https?:\/\//i.test(raw)) continue;
    scripts.push(raw.split('?')[0]);
  }

  const links = [];
  for (const m of html.matchAll(/<link[^>]+href="([^"]+)"/gi)) {
    const raw = m[1].trim();
    if (/^https?:\/\//i.test(raw)) continue;
    links.push(raw.split('?')[0]);
  }

  return { html, scripts, links };
}

export function createSandbox(options = {}) {
  const noop = () => {};
  const makeEl = () => ({
    style: {},
    classList: { toggle: noop, add: noop, remove: noop, contains: () => false },
    addEventListener: noop,
    getAttribute: () => null,
    setAttribute: noop,
    dataset: {},
    value: '',
    innerHTML: '',
    textContent: '',
    offsetWidth: 0,
    scrollHeight: 0,
    scrollTop: 0,
    scrollIntoView: noop,
    focus: noop,
    click: noop
  });

  const store = new Map();
  const sb = {
    console,
    Math,
    Number,
    String,
    Array,
    Object,
    Boolean,
    JSON,
    Date,
    RegExp,
    Error,
    TypeError,
    RangeError,
    Map,
    Set,
    Promise,
    parseInt,
    parseFloat,
    isNaN,
    isFinite,
    encodeURIComponent,
    decodeURIComponent,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    navigator: { onLine: Boolean(options.onLine) },
    localStorage: {
      getItem(k) {
        return store.has(k) ? store.get(k) : null;
      },
      setItem(k, v) {
        store.set(k, String(v));
      },
      removeItem(k) {
        store.delete(k);
      },
      clear() {
        store.clear();
      }
    },
    document: {
      documentElement: { setAttribute: noop, getAttribute: () => null },
      body: { appendChild: noop },
      createElement: makeEl,
      getElementById: makeEl,
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener: noop
    },
    fetch: options.fetch || (() => Promise.reject(new Error('Network disabled in VM')))
  };

  if (options.katex !== undefined) {
    sb.katex = options.katex;
  }

  sb.window = sb;
  sb.window.addEventListener = noop;
  sb.window.scrollTo = noop;
  sb.window.prompt = options.prompt || (() => null);
  sb.window.confirm = options.confirm || (() => false);
  sb.globalThis = sb;
  return sb;
}

export function loadAppInVm(options = {}) {
  const root = options.root || REPO_ROOT;
  const { html, scripts, links } = parseIndexHtml(root);
  const sb = createSandbox(options);
  vm.createContext(sb);

  const loadErrors = [];
  for (const relPath of scripts) {
    const absPath = path.join(root, relPath);
    try {
      const code = fs.readFileSync(absPath, 'utf8');
      vm.runInContext(code, sb, { filename: relPath });
    } catch (err) {
      loadErrors.push({ script: relPath, error: err && err.stack ? err.stack : String(err) });
    }
  }

  return {
    root,
    html,
    scripts,
    links,
    sb,
    App: sb.window.AddMathApp,
    U: sb.window.AddMathApp && sb.window.AddMathApp.utils,
    loadErrors
  };
}

export function withSeed(seed, fn, sb = null) {
  let s = (Number(seed) >>> 0) || 1;
  const nextRand = () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 4294967296;
  };
  const origGlobal = Math.random;
  const origSb = sb && sb.Math ? sb.Math.random : null;
  Math.random = nextRand;
  if (sb && sb.Math && sb.Math !== Math) {
    sb.Math.random = nextRand;
  }
  try {
    return fn();
  } finally {
    Math.random = origGlobal;
    if (sb && sb.Math && sb.Math !== Math && origSb) {
      sb.Math.random = origSb;
    }
  }
}

export function createMockCanvas() {
  const noop = () => {};
  const ctx = {
    fillStyle: '#000',
    strokeStyle: '#000',
    lineWidth: 1,
    font: '12px sans-serif',
    textAlign: 'left',
    textBaseline: 'alphabetic',
    lineCap: 'butt',
    lineJoin: 'miter',
    globalAlpha: 1,
    setTransform: noop,
    resetTransform: noop,
    clearRect: noop,
    fillRect: noop,
    strokeRect: noop,
    beginPath: noop,
    closePath: noop,
    moveTo: noop,
    lineTo: noop,
    arc: noop,
    arcTo: noop,
    roundRect: noop,
    ellipse: noop,
    rect: noop,
    clip: noop,
    quadraticCurveTo: noop,
    bezierCurveTo: noop,
    fill: noop,
    stroke: noop,
    fillText: noop,
    strokeText: noop,
    measureText: (txt) => ({ width: String(txt || '').length * 7 }),
    setLineDash: noop,
    save: noop,
    restore: noop,
    translate: noop,
    rotate: noop,
    scale: noop,
    createLinearGradient: () => ({ addColorStop: noop })
  };
  return {
    width: 640,
    height: 360,
    clientWidth: 640,
    clientHeight: 360,
    getBoundingClientRect: () => ({ width: 640, height: 360, left: 0, top: 0 }),
    getContext: () => ctx
  };
}

export function createReporter(suiteName, { strict = false } = {}) {
  const entries = new Map();
  let totalPass = 0;
  let totalWarn = 0;
  let totalFail = 0;
  let strictPromoted = 0;

  function ensure(id, title = '') {
    if (!entries.has(id)) {
      entries.set(id, { id, title, passes: 0, warns: [], fails: [] });
    } else if (title && !entries.get(id).title) {
      entries.get(id).title = title;
    }
    return entries.get(id);
  }

  return {
    strict,
    suiteName,
    define(id, title) {
      ensure(id, title);
    },
    pass(id, _msg = '') {
      const e = ensure(id);
      e.passes++;
      totalPass++;
    },
    warn(id, msg, detail = null) {
      const e = ensure(id);
      const item = detail ? `${msg} (${detail})` : msg;
      if (strict) {
        e.fails.push(`[STRICT] ${item}`);
        totalFail++;
        strictPromoted++;
      } else {
        e.warns.push(item);
        totalWarn++;
      }
    },
    fail(id, msg, detail = null) {
      const e = ensure(id);
      const item = detail ? `${msg} (${detail})` : msg;
      e.fails.push(item);
      totalFail++;
    },
    assert(id, cond, failMsg, detail = null) {
      if (cond) {
        this.pass(id);
        return true;
      }
      this.fail(id, failMsg, detail);
      return false;
    },
    assertStrict(id, cond, msg, detail = null) {
      if (cond) {
        this.pass(id);
        return true;
      }
      this.warn(id, msg, detail);
      return false;
    },
    summarize(maxDetails = 8) {
      const modeTag = strict ? 'STRICT' : 'BASELINE';
      console.log(`\n=== ${suiteName} [${modeTag}] ===`);
      let testPass = 0;
      let testWarn = 0;
      let testFail = 0;

      for (const e of entries.values()) {
        let status = 'PASS';
        if (e.fails.length > 0) {
          status = 'FAIL';
          testFail++;
        } else if (e.warns.length > 0) {
          status = 'WARN';
          testWarn++;
        } else {
          testPass++;
        }
        const counts = `checks=${e.passes + e.warns.length + e.fails.length}, pass=${e.passes}, warn=${e.warns.length}, fail=${e.fails.length}`;
        console.log(`  [${status}] ${e.id}${e.title ? ` — ${e.title}` : ''} (${counts})`);
        for (const f of e.fails.slice(0, maxDetails)) {
          console.log(`      FAIL: ${f}`);
        }
        if (e.fails.length > maxDetails) {
          console.log(`      ... +${e.fails.length - maxDetails} more FAIL items`);
        }
        for (const w of e.warns.slice(0, maxDetails)) {
          console.log(`      WARN: ${w}`);
        }
        if (e.warns.length > maxDetails) {
          console.log(`      ... +${e.warns.length - maxDetails} more WARN items`);
        }
      }

      console.log(
        `Summary (${suiteName}): tests [PASS=${testPass}, WARN=${testWarn}, FAIL=${testFail}] | assertions [pass=${totalPass}, warn=${totalWarn}, fail=${totalFail}${strict ? `, promoted=${strictPromoted}` : ''}]`
      );
      return {
        suiteName,
        strict,
        testPass,
        testWarn,
        testFail,
        totalPass,
        totalWarn,
        totalFail,
        strictPromoted,
        ok: totalFail === 0
      };
    }
  };
}

// Shared math & delimiter inspection utilities
export function checkBalancedBraces(tex) {
  let depth = 0;
  const s = String(tex || '');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\' && (s[i + 1] === '{' || s[i + 1] === '}' || s[i + 1] === '\\')) {
      i++;
      continue;
    }
    if (s[i] === '{') depth++;
    else if (s[i] === '}') {
      depth--;
      if (depth < 0) return false;
    }
  }
  return depth === 0;
}

export const RAW_TEX_CMD_RE =
  /\\(frac|times|implies|sqrt|theta|int|sum|binom|vec|alpha|beta|pi|sigma|mu|Delta|delta|lambda|Phi|le|leq|ge|geq|ne|neq|pm|approx|iff|to|rightarrow|mapsto|circ|div|text|mathbf|hat|bar|sin|cos|tan|log|ln|lim|cdot|infty|therefore|because|quad|qquad|left|right|Big|Rightarrow|angle|begin|big|cap|cdots|checkmark|cong|cot|csc|cup|dots|end|in|leftrightarrow|mathbb|max|mid|min|mp|not|overrightarrow|overline|parallel|perp|phantom|searrow|sec|sim|subseteq|swarrow|triangle|underset|xrightarrow)(?![a-zA-Z])/;

export function checkMathStringIntegrity(str) {
  const issues = [];
  if (typeof str !== 'string') return issues;

  // Control character corruptions from unescaped single backslashes in JS string literals
  // (\b -> \x08, \v -> \x0b, \f -> \x0c, \r -> \x0d, \t -> \x09)
  if (/[\x08\x0b\x0c\x0d\t]/.test(str)) {
    issues.push('JS control char corruption (\\x08/\\x0b/\\x0c/\\r/\\t)');
  }
  // Check \n followed by TeX fragment like eq / e / ewline? Wait: '\neq' corrupted to '\n' + 'eq' -> newline followed by 'eq ' or 'eq$' is rare in prose, skip risky heuristic, check raw delimiters instead.

  if (/\\\(|\\\)|\\\[|\\\]/.test(str)) {
    issues.push('Unsupported \\(...\\) or \\[...\\] delimiter');
  }

  // Count $$ display blocks
  const ddMatches = str.match(/\$\$/g);
  if (ddMatches && ddMatches.length % 2 !== 0) {
    issues.push('Unbalanced $$ delimiter');
  }

  // Extract $$...$$ and check brace balance inside each display block
  let rest = str.replace(/\$\$([\s\S]*?)\$\$/g, (_, inner) => {
    if (!checkBalancedBraces(inner)) {
      issues.push(`Unbalanced {} inside $$...$$: ${inner.slice(0, 40)}`);
    }
    return ' ';
  });

  // Check inline $...$ per line (renderMixed inline regex /$([^$\n]+?)$/g forbids newlines inside $...$)
  const lines = rest.split('\n');
  for (let li = 0; li < lines.length; li++) {
    const line = lines[li];
    const singleDollars = line.match(/\$/g);
    if (singleDollars && singleDollars.length % 2 !== 0) {
      issues.push(`Unbalanced inline $ on line ${li + 1}: ${line.slice(0, 60)}`);
      continue;
    }
    let m;
    const inlineRe = /\$([^$\n]+?)\$/g;
    while ((m = inlineRe.exec(line)) !== null) {
      const inner = m[1];
      if (!checkBalancedBraces(inner)) {
        issues.push(`Unbalanced {} inside $...$: ${inner.slice(0, 40)}`);
      }
      // Flag suspicious currency $ pairing across prose: e.g., $50 ... and ... $100
      if (/^\d+(?:\.\d{2})?\s+[a-zA-Z]{3,}\s+/.test(inner)) {
        issues.push(`Suspected currency $ captured as math: $${inner.slice(0, 40)}$`);
      }
    }
  }

  // Check raw TeX commands leaked outside $...$ / $$...$$
  const outsideMath = rest.replace(/\$[^$\n]+?\$/g, ' ');
  if (RAW_TEX_CMD_RE.test(outsideMath)) {
    issues.push(`Raw TeX command outside $...$: ${outsideMath.slice(0, 60)}`);
  }

  return issues;
}

export function checkPlainTextBoundary(str) {
  const issues = [];
  if (typeof str !== 'string') return issues;
  if (str.includes('$')) issues.push('Contains $ delimiter in plain-text U.t() field');
  if (str.includes('**')) issues.push('Contains ** markdown in plain-text U.t() field');
  if (/<[a-zA-Z/][^>]*>/.test(str)) issues.push('Contains raw HTML tag in plain-text field');
  if (RAW_TEX_CMD_RE.test(str)) issues.push('Contains raw TeX command in plain-text field');
  return issues;
}

export function checkRawTexBoundary(str) {
  const issues = [];
  if (typeof str !== 'string') return issues;
  if (str.includes('$')) issues.push('Contains $ wrapper in raw-TeX U.renderTex() field');
  if (/\\\(|\\\)|\\\[|\\\]/.test(str)) issues.push('Contains \\(...\\)/\\[...\\] in raw-TeX field');
  if (/[\x08\x0b\x0c\x0d\t]/.test(str)) issues.push('JS control char corruption (\\x08/\\x0b/\\x0c/\\r/\\t) in raw-TeX field');
  if (!checkBalancedBraces(str)) issues.push('Unbalanced {} in raw-TeX field');
  return issues;
}

const BM_LEAK_RE = /\b(dan|atau|ialah|adalah|apabila|cari nilai|sebutan|janjang|kecerunan|persamaan|garis lurus|segi tiga|nombor indeks|sukatan membulat|pembezaan|pengamiran|pilih atur|taburan|kinematik|luas|jawapan|langkah|selesaikan|gantikan|masukkan|jadikan|titik|bersilang|tangen|sektor|perentas|temb|halaju|awal|semak|input tidak sah|garis mencancang|lawan|berbeza atau sama|tak bersilang|garis padu|hapuskan|daripada pasangan)\b/i;

export function detectBmLeakInEn(str) {
  if (typeof str !== 'string' || !str.trim()) return null;
  if (/\bPoligon\b/.test(str)) return 'Poligon (typo for Polygon)';
  const m = str.match(BM_LEAK_RE);
  if (m) return m[0];
  return null;
}

const VALID_NULL_FOLLOW_RE = /^(?:vector|vectors|set|sets|matrix|matrices|space|spaces|hypothesis|hypotheses)\b/i;

const PRENOMINAL_UNDEF_NOUN_RE = /^\s+(?:gradient|gradients|slope|slopes|value|values|expression|expressions|function|functions|fraction|fractions|quotient|quotients|ratio|ratios|logarithm|logarithms|log|logs|denominator|denominators|limit|limits|inverse|inverses|derivative|derivatives|integral|integrals|angle|angles|case|cases|point|points|line|lines|term|terms|region|regions|solution|solutions)\b/i;

const PRENOMINAL_UNDEF_PREFIX_RE = /(?:^|[\(\{.,;!?]\s*|\b(?:an?|the|this|that|these|those|its|their|any|such|no|for|of|with|without|as|into|to|from|by|has|have|had|gives?|yields?|produces?|means?|implies|shows?|indicates?|avoids?)\s+)$/i;

const VALID_UNDEF_SUBJECT_HEAD_RE = /^(?:(?:so|thus|hence|therefore|because|since|where|when|if|as|and|or|but|then|for which|at which|in which|whereby|here|now|also|while)\s+)*(?:(?:the|a|an|this|that|its|their|such|any|every|each)\s+)*(?:(?:vertical|horizontal|rational|linear|quadratic|cubic|trigonometric|trig|logarithmic|exponential|composite|inverse|given|resulting|corresponding|first|second)\s+)*(gradient|slope|tangent|secant|cosecant|cotangent|function|expression|fraction|quotient|ratio|logarithm|log|denominator|limit|inverse|derivative|integral|value|it)\b([\s\S]*)$/i;

const VALID_UNDEF_SUBJECT_TAIL_RE = /^(?:\s+(?:of\s+(?:(?:a|an|the|this|that|its)\s+)?(?:(?:vertical|horizontal|straight|given|rational|linear|quadratic|cubic|trigonometric|trig|logarithmic|exponential|composite|inverse|negative|zero|positive|resulting)\s+)?(?:line(?:\s+(?:segment\s+)?(?:__MATH__|[A-Z]{1,3}|through\s+(?:__PAREN__|__MATH__|[A-Z]{1,3})\s+and\s+(?:__PAREN__|__MATH__|[A-Z]{1,3})))?|curve(?:\s+(?:__MATH__|[A-Z]{1,3}))?|tangent(?:\s+line)?(?:\s+to\s+(?:the\s+)?(?:curve|circle)(?:\s+__MATH__)?)?(?:\s+__MATH__)?|normal(?:\s+__MATH__)?|function(?:\s+__MATH__)?|expression(?:\s+__MATH__)?|fraction(?:\s+__MATH__)?|quotient(?:\s+__MATH__)?|ratio(?:\s+__MATH__)?|denominator(?:\s+__MATH__)?|logarithm(?:\s+__MATH__)?|log(?:\s+__MATH__)?|limit(?:\s+__MATH__)?|angle(?:\s+__MATH__)?|number(?:\s+__MATH__)?|matrix(?:\s+__MATH__)?|__MATH__|__PAREN__|[A-Z]{1,3})|at\s+(?:__MATH__|__PAREN__|(?:the\s+)?(?:point|cusp|origin|asymptote|vertex|boundary)(?:\s+(?:__MATH__|__PAREN__|[A-Z]{1,3}))?)|for\s+(?:__MATH__|__PAREN__|(?:this|that|the)\s+(?:point|value|case|angle))|on\s+(?:__MATH__|__PAREN__|(?:the\s+)?(?:curve|line|graph)(?:\s+__MATH__)?)|(?:when|where)\s+__MATH__))*\s*$/;

const CONDITIONAL_AFTER_UNDEF_RE = /^\s*(?:when|if|at|for|where|whenever|because|since|as|unless|in\b)/i;

const TEX_EXPR_SIGNAL_RE = /(?:[a-zA-Z](?:'+|\^\{[^}]+\}|\^{-1})?\s*\([^)\n]+\)|[a-zA-Z]'+|0\^\{?(?:0|-(?:[0-9]+|[a-zA-Z]))\}?|(?:[a-zA-Z]|\))\^\{?-(?:[0-9]+|[a-zA-Z])\}?|\/|\\frac\b|\\div\b|\\sqrt\b|\\(?:tan|sec|csc|cot|sin|cos|arcsin|arccos|log|ln|lg|lim|int)\b|[a-zA-Z]_\{?[a-zA-Z0-9]+\}?)/;

function isValidMathExprToken(expr) {
  const trimmed = String(expr || '').trim();
  if (!trimmed) return false;
  return TEX_EXPR_SIGNAL_RE.test(trimmed);
}

function extractClauseBefore(text) {
  let masked = text.replace(/\$\$[\s\S]*?\$\$/g, ' __MATH__ ').replace(/\$[^$\n]+\$/g, ' __MATH__ ');
  let prev;
  do {
    prev = masked;
    masked = masked.replace(/\([^()]*\)|\[[^\[\]]*\]/g, ' __PAREN__ ');
  } while (masked !== prev);
  const punctParts = masked.split(/(?:\.(?!\d)|[;:!?,\(\[\{])/);
  const clause = (punctParts[punctParts.length - 1] || '').trim();
  const conjRe = /\b(?:and|but|so|or|because|since|when|while|where|if|unless|although)\b/gi;
  let cm;
  let lastSplit = 0;
  while ((cm = conjRe.exec(clause)) !== null) {
    const pre = clause.slice(lastSplit, cm.index);
    if (/\b(?:is|are|was|were|equals|becomes|remains)\b|=/.test(pre)) {
      lastSplit = cm.index + cm[0].length;
    }
  }
  return clause.slice(lastSplit).trim();
}

function extractTrailingMathToken(text) {
  const mDoubleDollar = text.match(/\$\$((?:[^$]|\$(?!\$))+)\$\$\s*$/);
  if (mDoubleDollar) return mDoubleDollar[1].trim();
  const mDollar = text.match(/\$([^$\n]+)\$\s*$/);
  if (mDollar) return mDollar[1];
  const lastDollar = text.lastIndexOf('$');
  if (lastDollar !== -1) {
    const dollarsCount = (text.match(/\$/g) || []).length;
    if (dollarsCount % 2 === 1) {
      return text.slice(lastDollar + 1).trim();
    }
  }
  const mRaw = text.match(/([a-zA-Z\\][a-zA-Z0-9_^{}()\\/-]*)\s*$/);
  return mRaw ? mRaw[1] : '';
}

function isValidUndefinedOccurrence(str, idx) {
  const before = str.slice(0, idx);
  const after = str.slice(idx + 9);

  if (/[a-zA-Z0-9_]$/.test(before) || /^[a-zA-Z0-9_^]/.test(after)) {
    return false;
  }
  if (/(?:[=:\[+\-*/])\s*$/.test(before) || /^\s*(?:[+\-*/=\]])/.test(after)) {
    return false;
  }

  const qMatch = before.match(/(['"])$/);
  if (qMatch && after.startsWith(qMatch[1]) && !/[=:\[,{]\s*['"]$/.test(before)) {
    if (/\b(?:the|an?|called|for)\s+['"]$/i.test(before) || /^['"]\s+(?:\$[a-zA-Z]\$|[a-zA-Z]+\b)/.test(after)) {
      return true;
    }
  }

  if (PRENOMINAL_UNDEF_NOUN_RE.test(after) && PRENOMINAL_UNDEF_PREFIX_RE.test(before) && !/\b(?:is|are|be|becomes|remains)\s*$/i.test(before)) {
    return true;
  }

  let subjectText = before;
  const textOpenMatch = before.match(/\\text\{([^}]*)$/);
  if (textOpenMatch) {
    const innerBefore = textOpenMatch[1];
    if (/^\s*(?:(?:is|are|be|becomes|remains)\s*)?$/i.test(innerBefore)) {
      subjectText = before.slice(0, before.length - textOpenMatch[0].length) + innerBefore;
    } else {
      subjectText = innerBefore;
    }
  }

  if (/^\s*\([^)\n]+\)/.test(after) && !/\b(?:is|are|be|becomes|remains)\s*$/i.test(subjectText)) {
    const tok = extractTrailingMathToken(subjectText);
    if (isValidMathExprToken(tok)) {
      return true;
    }
  }

  const copulaMatch = subjectText.match(/([\s\S]*?)\b(is|are|be|becomes|remains)\s+$/i);
  if (copulaMatch) {
    const beforeCopula = copulaMatch[1];
    const tok = extractTrailingMathToken(beforeCopula);
    if (isValidMathExprToken(tok)) {
      return true;
    }

    const clause = extractClauseBefore(beforeCopula);
    if (/\b(?:division|dividing)\s+by\s+(?:0|zero)(?:\s+__PAREN__)?\s*$/i.test(clause)) {
      return true;
    }

    const headMatch = clause.match(VALID_UNDEF_SUBJECT_HEAD_RE);
    if (headMatch) {
      const head = headMatch[1].toLowerCase();
      const tail = headMatch[2] || '';
      if (head === 'it') {
        return !tail.trim() && CONDITIONAL_AFTER_UNDEF_RE.test(after);
      }
      const effectiveTail =
        head === 'tangent'
          ? tail.replace(/^\s+line(?:\s+to\s+(?:the\s+)?(?:curve|circle)(?:\s+__MATH__)?)?(?:\s+__MATH__)?/i, '')
          : tail;
      if (!VALID_UNDEF_SUBJECT_TAIL_RE.test(effectiveTail)) {
        return false;
      }
      if (head === 'value') {
        return CONDITIONAL_AFTER_UNDEF_RE.test(after);
      }
      return true;
    }
  }

  return false;
}

export function hasJsLeak(str, checkNull = false) {
  if (typeof str !== 'string') return false;
  if (/NaN/.test(str)) return true;

  if (checkNull) {
    if (/(?:[0-9_]|\\)null\b|\bnull[0-9_^]/i.test(str)) return true;
    const nullRe = /\bnull\b/g;
    let nm;
    while ((nm = nullRe.exec(str)) !== null) {
      const before = str.slice(0, nm.index);
      const after = str.slice(nm.index + 4).trimStart();
      if (/[=:\[+\-*/]\s*$/.test(before) || !VALID_NULL_FOLLOW_RE.test(after)) {
        return true;
      }
    }
  }

  if (!str.includes('undefined')) return false;

  const undefRe = /undefined/g;
  let m;
  while ((m = undefRe.exec(str)) !== null) {
    if (!isValidUndefinedOccurrence(str, m.index)) {
      return true;
    }
  }
  return false;
}

export function hasUndefinedOverflow(str) {
  return typeof str === 'string' && /\bUndefined\b/.test(str);
}
