import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import net from 'node:net';
import os from 'node:os';
import { spawn, spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { REPO_ROOT, RAW_TEX_CMD_RE } from './loader.mjs';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const CACHED_PLAYWRIGHT_PATH =
  'C:\\Users\\sklei\\AppData\\Local\\npm-cache\\_npx\\e41f203b7505f1fb\\node_modules\\playwright';

const BROWSER_EXECUTABLES = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

export function startStaticServer(root = REPO_ROOT) {
  const absRoot = path.resolve(root);
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        const reqUrl = new URL(req.url || '/', 'http://127.0.0.1');
        let rel = decodeURIComponent(reqUrl.pathname);
        if (rel === '/' || rel === '') rel = '/index.html';
        const filePath = path.resolve(absRoot, '.' + rel);
        if (!filePath.startsWith(absRoot)) {
          res.writeHead(403, { 'Content-Type': 'text/plain' });
          res.end('Forbidden');
          return;
        }
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const mime = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': mime });
        fs.createReadStream(filePath).pipe(res);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(String(err));
      }
    });
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      resolve({
        server,
        port: addr.port,
        baseUrl: `http://127.0.0.1:${addr.port}`,
        close: () =>
          new Promise((resClose) => {
            server.close(() => resClose());
          })
      });
    });
  });
}

function findPlaywright() {
  const req = createRequire(import.meta.url);
  for (const candidate of ['playwright', CACHED_PLAYWRIGHT_PATH]) {
    try {
      return req(candidate);
    } catch {
      // try next
    }
  }
  return null;
}

function findBrowserExecutable() {
  for (const exe of BROWSER_EXECUTABLES) {
    if (fs.existsSync(exe)) return exe;
  }
  return null;
}

function isBlockedExternalCdn(urlStr) {
  return /cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com/i.test(String(urlStr || ''));
}

function isLocalHostUrl(urlStr) {
  return /^http:\/\/127\.0\.0\.1|^http:\/\/localhost|^file:\/\//i.test(String(urlStr || ''));
}

function wrapPlaywrightPage(pwPage, { offline = false } = {}) {
  const pageErrors = [];
  const consoleErrors = [];
  const localFailedRequests = [];
  let dialogHandler = (d) => (d.type === 'confirm' ? false : null);

  pwPage.on('pageerror', (err) => {
    pageErrors.push(err && err.stack ? err.stack : String(err));
  });

  pwPage.on('console', (msg) => {
    if (msg.type() === 'error') {
      const txt = msg.text();
      const loc = msg.location()?.url || '';
      if (offline && (isBlockedExternalCdn(loc) || /ERR_FAILED|Failed to load resource/i.test(txt))) {
        if (!isLocalHostUrl(loc) && (!loc || isBlockedExternalCdn(loc))) return;
      }
      consoleErrors.push(`${txt}${loc ? ` [${loc}]` : ''}`);
    }
  });

  pwPage.on('response', (res) => {
    const url = res.url();
    if (isLocalHostUrl(url) && res.status() >= 400) {
      localFailedRequests.push(`${res.status()} ${url}`);
    }
  });

  pwPage.on('dialog', async (dialog) => {
    const info = {
      type: dialog.type(),
      message: dialog.message(),
      defaultValue: dialog.defaultValue()
    };
    const res = await dialogHandler(info);
    if (res === true) await dialog.accept();
    else if (typeof res === 'string') await dialog.accept(res);
    else await dialog.dismiss();
  });

  return {
    driver: 'playwright',
    raw: pwPage,
    setViewportSize: (vp) => pwPage.setViewportSize(vp),
    async goto(url) {
      await pwPage.goto(url, { waitUntil: offline ? 'domcontentloaded' : 'load', timeout: 20000 });
      await pwPage.waitForSelector('#main-view .card', { state: 'attached', timeout: 10000 });
      if (!offline) {
        await pwPage.waitForTimeout(150);
      }
    },
    async reload() {
      await pwPage.reload({ waitUntil: offline ? 'domcontentloaded' : 'load', timeout: 20000 });
      await pwPage.waitForSelector('#main-view .card', { state: 'attached', timeout: 10000 });
    },
    evaluate(fn, ...args) {
      return pwPage.evaluate(({ fnSrc, args }) => {
        // eslint-disable-next-line no-new-func
        const compiled = new Function(`return (${fnSrc})`)();
        return compiled(...args);
      }, { fnSrc: fn.toString(), args });
    },
    async click(selector) {
      const loc = pwPage.locator(selector).first();
      await loc.waitFor({ state: 'visible', timeout: 6000 });
      await loc.click();
    },
    async fill(selector, value) {
      const loc = pwPage.locator(selector).first();
      await loc.waitFor({ state: 'visible', timeout: 6000 });
      await loc.fill(String(value));
    },
    async selectOption(selector, value) {
      const loc = pwPage.locator(selector).first();
      await loc.waitFor({ state: 'visible', timeout: 6000 });
      await loc.selectOption(String(value));
    },
    async setRangeValue(selector, value) {
      await pwPage.evaluate(
        ({ selector, value }) => {
          const el = document.querySelector(selector);
          if (!el) throw new Error(`Range slider not found: ${selector}`);
          el.value = String(value);
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        },
        { selector, value }
      );
    },
    async press(selector, key) {
      const loc = pwPage.locator(selector).first();
      await loc.waitFor({ state: 'visible', timeout: 6000 });
      await loc.press(key);
    },
    async keyboardPress(key) {
      await pwPage.keyboard.press(key);
    },
    async waitForSelector(selector, { timeout = 6000 } = {}) {
      await pwPage.waitForSelector(selector, { state: 'attached', timeout });
    },
    async waitForFunction(fn, arg, { timeout = 6000 } = {}) {
      await pwPage.waitForFunction(
        ({ fnSrc, arg }) => {
          // eslint-disable-next-line no-new-func
          const compiled = new Function(`return (${fnSrc})`)();
          return compiled(arg);
        },
        { fnSrc: fn.toString(), arg },
        { timeout }
      );
    },
    waitForTimeout(ms) {
      return pwPage.waitForTimeout(ms);
    },
    setDialogHandler(fn) {
      dialogHandler = fn;
    },
    getErrors() {
      return {
        pageErrors: [...pageErrors],
        consoleErrors: [...consoleErrors],
        localFailedRequests: [...localFailedRequests]
      };
    },
    clearErrors() {
      pageErrors.length = 0;
      consoleErrors.length = 0;
      localFailedRequests.length = 0;
    },
    async close() {
      await pwPage.close();
    }
  };
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = net.createServer();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

async function launchEdgeCdp() {
  const exe = findBrowserExecutable();
  if (!exe) {
    throw new Error('No Edge or Chrome executable found for CDP fallback');
  }
  const port = await getFreePort();
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'addmath-cdp-'));
  const args = [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tmpDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--disable-extensions',
    'about:blank'
  ];
  const proc = spawn(exe, args, { stdio: 'ignore', windowsHide: true });

  async function cleanupEdgeProc() {
    const exitPromise =
      proc.exitCode !== null
        ? Promise.resolve()
        : new Promise((resolve) => {
            proc.once('exit', resolve);
            proc.once('close', resolve);
            setTimeout(resolve, 2000);
          });
    if (process.platform === 'win32' && proc.pid) {
      try {
        spawnSync('taskkill', ['/PID', String(proc.pid), '/T', '/F'], {
          stdio: 'ignore',
          windowsHide: true
        });
      } catch {}
    }
    try {
      proc.kill('SIGKILL');
    } catch {
      try {
        proc.kill();
      } catch {}
    }
    await exitPromise;
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true, maxRetries: 6, retryDelay: 250 });
    } catch {}
  }

  let targets = [];
  const deadline = Date.now() + 12000;
  while (Date.now() < deadline) {
    try {
      const resp = await fetch(`http://127.0.0.1:${port}/json/list`);
      if (resp.ok) {
        targets = await resp.json();
        if (Array.isArray(targets) && targets.some((t) => t.type === 'page' && t.webSocketDebuggerUrl)) {
          break;
        }
      }
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 150));
  }

  const pageTarget = targets.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
  if (!pageTarget) {
    await cleanupEdgeProc();
    throw new Error('Timed out waiting for Edge CDP page target');
  }

  async function createCdpSession(wsUrl) {
    const ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      ws.addEventListener('open', resolve, { once: true });
      ws.addEventListener('error', reject, { once: true });
    });
    let nextId = 1;
    const pending = new Map();
    const listeners = new Map();

    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(String(ev.data));
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message || JSON.stringify(msg.error)));
        else resolve(msg.result);
      } else if (msg.method && listeners.has(msg.method)) {
        for (const cb of [...listeners.get(msg.method)]) cb(msg.params);
      }
    });

    function send(method, params = {}) {
      const id = nextId++;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    function on(method, cb) {
      if (!listeners.has(method)) listeners.set(method, []);
      listeners.get(method).push(cb);
    }

    function off(method, cb) {
      const arr = listeners.get(method);
      if (!arr) return;
      const idx = arr.indexOf(cb);
      if (idx !== -1) arr.splice(idx, 1);
    }

    function once(method, cb) {
      const wrapper = (params) => {
        off(method, wrapper);
        cb(params);
      };
      on(method, wrapper);
      return wrapper;
    }

    return { ws, send, on, off, once };
  }

  async function createCdpContext({ offline = false, viewport = { width: 1280, height: 800 } } = {}) {
    const browserTargetResp = await fetch(`http://127.0.0.1:${port}/json/version`);
    const browserInfo = await browserTargetResp.json();
    const bSess = await createCdpSession(browserInfo.webSocketDebuggerUrl);
    const { browserContextId } = await bSess.send('Target.createBrowserContext', {});
    const { targetId } = await bSess.send('Target.createTarget', {
      url: 'about:blank',
      browserContextId
    });
    const listResp = await fetch(`http://127.0.0.1:${port}/json/list`);
    const allTargets = await listResp.json();
    const t = allTargets.find((x) => x.id === targetId);
    const sess = await createCdpSession(t.webSocketDebuggerUrl);

    await sess.send('Page.enable');
    await sess.send('Runtime.enable');
    await sess.send('Network.enable');
    await sess.send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.width < 600
    });
    if (offline) {
      await sess.send('Network.setBlockedURLs', {
        urls: ['*cdn.jsdelivr.net*', '*fonts.googleapis.com*', '*fonts.gstatic.com*']
      });
    }

    const pageErrors = [];
    const consoleErrors = [];
    const localFailedRequests = [];
    let dialogHandler = (d) => (d.type === 'confirm' ? false : null);

    sess.on('Runtime.exceptionThrown', (params) => {
      const ex = params.exceptionDetails;
      pageErrors.push(ex?.exception?.description || ex?.text || 'Uncaught exception');
    });

    sess.on('Runtime.consoleAPICalled', (params) => {
      if (params.type === 'error') {
        const text = (params.args || []).map((a) => a.value ?? a.description ?? '').join(' ');
        if (offline && /ERR_FAILED|Failed to load resource/i.test(text)) return;
        consoleErrors.push(text);
      }
    });

    sess.on('Network.responseReceived', (params) => {
      const url = params.response?.url || '';
      const status = params.response?.status || 0;
      if (isLocalHostUrl(url) && status >= 400) {
        localFailedRequests.push(`${status} ${url}`);
      }
    });

    sess.on('Page.javascriptDialogOpening', async (params) => {
      const info = {
        type: params.type,
        message: params.message,
        defaultValue: params.defaultPrompt || ''
      };
      const res = await dialogHandler(info);
      await sess.send('Page.handleJavaScriptDialog', {
        accept: res === true || typeof res === 'string',
        promptText: typeof res === 'string' ? res : undefined
      });
    });

    async function evalExpr(fn, ...args) {
      const expr = `(${fn.toString()})(...${JSON.stringify(args)})`;
      const res = await sess.send('Runtime.evaluate', {
        expression: expr,
        awaitPromise: true,
        returnByValue: true
      });
      if (res.exceptionDetails) {
        throw new Error(res.exceptionDetails.exception?.description || res.exceptionDetails.text || 'CDP evaluate error');
      }
      return res.result ? res.result.value : undefined;
    }

    const pageAdapter = {
      driver: 'edge-cdp',
      async setViewportSize(vp) {
        await sess.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: vp.width < 600
        });
      },
      async goto(url) {
        let timer;
        const loadDone = new Promise((resolve) => {
          const cb = sess.once('Page.loadEventFired', () => {
            clearTimeout(timer);
            resolve();
          });
          timer = setTimeout(() => {
            sess.off('Page.loadEventFired', cb);
            resolve();
          }, 6000);
        });
        await sess.send('Page.navigate', { url });
        await loadDone;
        await pageAdapter.waitForSelector('#main-view .card', { timeout: 10000 });
        await new Promise((r) => setTimeout(r, 150));
      },
      async reload() {
        let timer;
        const loadDone = new Promise((resolve) => {
          const cb = sess.once('Page.loadEventFired', () => {
            clearTimeout(timer);
            resolve();
          });
          timer = setTimeout(() => {
            sess.off('Page.loadEventFired', cb);
            resolve();
          }, 6000);
        });
        await sess.send('Page.reload', {});
        await loadDone;
        await pageAdapter.waitForSelector('#main-view .card', { timeout: 10000 });
      },
      evaluate(fn, ...args) {
        return evalExpr(fn, ...args);
      },
      async waitForVisible(selector, { timeout = 6000 } = {}) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
          const vis = await evalExpr((sel) => {
            const el = document.querySelector(sel);
            if (!el) return false;
            const st = window.getComputedStyle(el);
            if (st.display === 'none' || st.visibility === 'hidden') return false;
            const r = el.getBoundingClientRect();
            return el.offsetParent !== null || Boolean(el.closest('#poster-lightbox-root')) || (r.width > 0 && r.height > 0);
          }, selector);
          if (vis) return;
          await new Promise((r) => setTimeout(r, 60));
        }
        throw new Error(`Timeout waiting for visible selector: ${selector}`);
      },
      async click(selector) {
        await pageAdapter.waitForVisible(selector, { timeout: 6000 });
        await evalExpr((sel) => {
          const el = document.querySelector(sel);
          if (!el) throw new Error(`Element not found: ${sel}`);
          el.scrollIntoView({ block: 'center', inline: 'nearest' });
          el.click();
        }, selector);
      },
      async fill(selector, value) {
        await pageAdapter.waitForVisible(selector, { timeout: 6000 });
        await evalExpr((sel, val) => {
          const el = document.querySelector(sel);
          if (!el) throw new Error(`Input not found: ${sel}`);
          el.focus();
          el.value = String(val);
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }, selector, String(value));
      },
      async selectOption(selector, value) {
        await pageAdapter.waitForVisible(selector, { timeout: 6000 });
        await evalExpr((sel, val) => {
          const el = document.querySelector(sel);
          if (!el) throw new Error(`Select not found: ${sel}`);
          el.value = String(val);
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }, selector, String(value));
      },
      async setRangeValue(selector, value) {
        await pageAdapter.waitForSelector(selector, { timeout: 6000 });
        await evalExpr((sel, val) => {
          const el = document.querySelector(sel);
          if (!el) throw new Error(`Range slider not found: ${sel}`);
          el.value = String(val);
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }, selector, String(value));
      },
      async press(selector, key) {
        await pageAdapter.waitForSelector(selector, { timeout: 6000 });
        await evalExpr((sel, k) => {
          const el = document.querySelector(sel);
          if (!el) throw new Error(`Element not found: ${sel}`);
          el.focus();
          el.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true }));
          el.dispatchEvent(new KeyboardEvent('keyup', { key: k, bubbles: true }));
        }, selector, key);
      },
      async keyboardPress(key) {
        await evalExpr((k) => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true }));
        }, key);
      },
      async waitForSelector(selector, { timeout = 6000 } = {}) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
          const found = await evalExpr((sel) => Boolean(document.querySelector(sel)), selector);
          if (found) return;
          await new Promise((r) => setTimeout(r, 60));
        }
        throw new Error(`Timeout waiting for selector: ${selector}`);
      },
      async waitForFunction(fn, arg, { timeout = 6000 } = {}) {
        const start = Date.now();
        while (Date.now() - start < timeout) {
          const ok = await evalExpr(fn, arg);
          if (ok) return;
          await new Promise((r) => setTimeout(r, 60));
        }
        throw new Error('Timeout waiting for function condition');
      },
      waitForTimeout(ms) {
        return new Promise((r) => setTimeout(r, ms));
      },
      setDialogHandler(fn) {
        dialogHandler = fn;
      },
      getErrors() {
        return {
          pageErrors: [...pageErrors],
          consoleErrors: [...consoleErrors],
          localFailedRequests: [...localFailedRequests]
        };
      },
      clearErrors() {
        pageErrors.length = 0;
        consoleErrors.length = 0;
        localFailedRequests.length = 0;
      },
      async close() {
        try { sess.ws.close(); } catch {}
        try {
          await bSess.send('Target.disposeBrowserContext', { browserContextId });
        } catch {}
        try { bSess.ws.close(); } catch {}
      }
    };

    return {
      newPage: async () => pageAdapter,
      close: async () => {
        await pageAdapter.close();
      }
    };
  }

  return {
    driver: 'edge-cdp',
    newContext: createCdpContext,
    async close() {
      await cleanupEdgeProc();
    }
  };
}

export async function launchHeadlessBrowser() {
  const pw = findPlaywright();
  if (pw) {
    const launchPlans = [
      { headless: true, channel: 'msedge' },
      { headless: true, channel: 'chrome' }
    ];
    for (const exe of BROWSER_EXECUTABLES) {
      if (fs.existsSync(exe)) launchPlans.push({ headless: true, executablePath: exe });
    }
    for (const plan of launchPlans) {
      try {
        const browser = await pw.chromium.launch(plan);
        return {
          driver: `playwright(${plan.channel || path.basename(plan.executablePath)})`,
          async newContext({ offline = false, viewport = { width: 1280, height: 800 } } = {}) {
            const ctx = await browser.newContext({ viewport });
            if (offline) {
              await ctx.route(/cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com/i, (route) =>
                route.abort()
              );
            }
            return {
              async newPage() {
                const p = await ctx.newPage();
                return wrapPlaywrightPage(p, { offline });
              },
              close: () => ctx.close()
            };
          },
          close: () => browser.close()
        };
      } catch {
        // try next plan
      }
    }
  }
  return launchEdgeCdp();
}

export async function assertDomMathAndMediaClean(page, label, options = {}) {
  const { expectMath = false, expectFallbackOnly = false, skipImgCheck = false, onFallbackTeXLeak = null } = options;

  // Trigger lazy-loaded visible images (e.g. .poster-thumb-img loading="lazy") and wait briefly
  if (!skipImgCheck) {
    await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      for (const img of imgs) {
        const st = window.getComputedStyle(img);
        let ancestorHidden = false;
        for (let cur = img.parentElement; cur && cur !== document.documentElement; cur = cur.parentElement) {
          if (window.getComputedStyle(cur).display === 'none') {
            ancestorHidden = true;
            break;
          }
        }
        const rect = img.getBoundingClientRect();
        const lb = img.closest('#poster-lightbox-root');
        const lbVisible = Boolean(
          lb &&
            window.getComputedStyle(lb).display !== 'none' &&
            window.getComputedStyle(lb).visibility !== 'hidden'
        );
        const visible =
          !ancestorHidden &&
          st.display !== 'none' &&
          st.visibility !== 'hidden' &&
          (img.offsetParent !== null || lbVisible || (rect.width > 0 && rect.height > 0));
        if (visible && !img.complete) {
          img.scrollIntoView({ block: 'center' });
          await new Promise((res) => {
            const t = setTimeout(res, 2000);
            img.addEventListener('load', () => { clearTimeout(t); res(); }, { once: true });
            img.addEventListener('error', () => { clearTimeout(t); res(); }, { once: true });
          });
        }
      }
    });
  }

  const domReport = await page.evaluate(
    ({ expectMath, expectFallbackOnly, skipImgCheck, hasFallbackLeakHandler, rawTexPattern }) => {
      const issues = [];
      const warnings = [];
      const bodyHtml = document.body ? document.body.innerHTML : '';
      const bodyText = document.body ? document.body.innerText : '';
      if (bodyHtml.includes('@@MATHBLOCK') || bodyText.includes('@@MATHBLOCK')) {
        issues.push('Found unreplaced @@MATHBLOCK token in DOM');
      }

      const katexErrors = document.querySelectorAll('.katex-error');
      if (katexErrors.length > 0) {
        issues.push(`Found ${katexErrors.length} .katex-error nodes`);
      }

      const isElVisible = (el) => {
        if (!el) return false;
        const st = window.getComputedStyle(el);
        if (st.display === 'none' || st.visibility === 'hidden') return false;
        for (let cur = el.parentElement; cur && cur !== document.documentElement; cur = cur.parentElement) {
          if (window.getComputedStyle(cur).display === 'none') return false;
        }
        const r = el.getBoundingClientRect();
        return r.width > 0 || r.height > 0;
      };

      const katexCount = Array.from(document.querySelectorAll('.katex')).filter(isElVisible).length;
      const fallbackCount = Array.from(document.querySelectorAll('.math-fallback')).filter(isElVisible).length;
      const isFileUrl = window.location.protocol === 'file:';
      if (expectFallbackOnly) {
        if (fallbackCount === 0) issues.push('Expected .math-fallback nodes in offline mode, got 0');
        if (katexCount > 0) issues.push(`Expected 0 .katex nodes in offline mode, got ${katexCount}`);
      } else if (expectMath) {
        if (!isFileUrl && katexCount === 0) {
          issues.push(`Expected .katex nodes > 0 on http:// (got katex=0, fallback=${fallbackCount})`);
        } else if (katexCount + fallbackCount === 0) {
          issues.push('Expected rendered math (.katex or .math-fallback), got 0');
        }
      }

      // Scan visible text nodes for leaked $...$, $$...$$, unbalanced $, or raw TeX commands
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const rawTexRe = new RegExp(rawTexPattern);
      let node;
      while ((node = walker.nextNode())) {
        const txt = node.nodeValue || '';
        if (!txt.trim()) continue;
        const parent = node.parentElement;
        if (!parent) continue;
        if (
          parent.closest(
            'INPUT, TEXTAREA, CODE, SCRIPT, STYLE, NOSCRIPT, .katex-mathml, .katex-html, annotation'
          )
        ) {
          continue;
        }
        // CSS visibility is inherited (child visibility:visible overrides ancestor hidden); display:none is not inherited
        let isHidden = window.getComputedStyle(parent).visibility === 'hidden';
        if (!isHidden) {
          for (let cur = parent; cur && cur !== document.documentElement; cur = cur.parentElement) {
            if (window.getComputedStyle(cur).display === 'none') {
              isHidden = true;
              break;
            }
          }
        }
        if (isHidden) continue;

        if (/\$\$[\s\S]+?\$\$/.test(txt) || /\$[^$\n]+?\$/.test(txt) || txt.includes('$')) {
          issues.push(`Leaked $ math delimiter in visible text: "${txt.trim().slice(0, 80)}"`);
          break;
        }
        if (rawTexRe.test(txt)) {
          const msg = `Leaked literal TeX command in visible text: "${txt.trim().slice(0, 80)}"`;
          if (expectFallbackOnly && hasFallbackLeakHandler) {
            warnings.push(msg);
          } else {
            issues.push(msg);
            break;
          }
        }
      }

      if (!skipImgCheck) {
        const imgs = Array.from(document.querySelectorAll('img'));
        for (const img of imgs) {
          const st = window.getComputedStyle(img);
          let ancestorHidden = false;
          for (let cur = img.parentElement; cur && cur !== document.documentElement; cur = cur.parentElement) {
            if (window.getComputedStyle(cur).display === 'none') {
              ancestorHidden = true;
              break;
            }
          }
          const rect = img.getBoundingClientRect();
          const lb = img.closest('#poster-lightbox-root');
          const lbVisible = Boolean(
            lb &&
              window.getComputedStyle(lb).display !== 'none' &&
              window.getComputedStyle(lb).visibility !== 'hidden'
          );
          const visible =
            !ancestorHidden &&
            st.display !== 'none' &&
            st.visibility !== 'hidden' &&
            (img.offsetParent !== null || lbVisible || (rect.width > 0 && rect.height > 0));
          if (visible) {
            if (!img.complete || img.naturalWidth <= 0) {
              issues.push(`Broken visible <img>: ${img.getAttribute('src')}`);
            }
          }
        }
      }

      return { issues, warnings, katexCount, fallbackCount };
    },
    { expectMath, expectFallbackOnly, skipImgCheck, hasFallbackLeakHandler: Boolean(onFallbackTeXLeak), rawTexPattern: RAW_TEX_CMD_RE.source }
  );

  if (onFallbackTeXLeak && domReport.warnings?.length) {
    for (const w of domReport.warnings) onFallbackTeXLeak(w);
  }

  const errs = page.getErrors();
  if (errs.pageErrors.length > 0) {
    domReport.issues.push(`pageerror: ${errs.pageErrors[0]}`);
  }
  if (errs.consoleErrors.length > 0) {
    domReport.issues.push(`console.error: ${errs.consoleErrors[0]}`);
  }
  if (errs.localFailedRequests.length > 0) {
    domReport.issues.push(`local HTTP >=400: ${errs.localFailedRequests[0]}`);
  }

  if (domReport.issues.length > 0) {
    throw new Error(`[${label}] DOM/Media/Runtime check failed: ${domReport.issues.join(' | ')}`);
  }
  return domReport;
}
