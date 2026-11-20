/**
 * AddMath Mudah — Bank Soalan Master SPM (Fasa 3: Tingkatan 5 Bab 1–4 • 40 Soalan Penuh)
 * Setiap soalan lengkap dengan: Pernyataan Format SPM, Kesilapan Lazim Murid (2–3 amaran),
 * Skim Pemarkahan Tanpa Lompatan (P1 / K1 / N1 / J1) dan Penaakulan 'Kenapa?' (BM & EN).
 */
window.AddMathApp = window.AddMathApp || {};
window.AddMathApp.masterBank = window.AddMathApp.masterBank || {};

(function (App) {
  'use strict';

  Object.assign(App.masterBank, {
    // =========================================================================
    // TINGKATAN 5 BAB 1: SUKATAN MEMBULAT (10 SOALAN)
    // =========================================================================
    'f5-c1': [
      {
        code: '1.1', marks: 3,
        topic: { bm: 'Penukaran Darjah ke Radian & Panjang Lengkok Minor', en: 'Degrees to Radians & Minor Arc Length' },
        q: {
          bm: 'Sebuah bulatan berjejari $6\\text{ cm}$ mempunyai sudut refleks (major) pada pusat bernilai $240^\\circ$. Cari sudut sektor minor dalam radian (sebutan $\\pi$) dan panjang lengkok minor. [3m]',
          en: 'A circle of radius $6\\text{ cm}$ has a reflex (major) central angle of $240^\\circ$. Find the minor sector angle in radians (in terms of $\\pi$) and the minor arc length. [3m]'
        },
        mistakes: {
          bm: [
            'Menggunakan sudut refleks $240^\\circ$ terus bukannya mencari sudut minor $360^\\circ - 240^\\circ = 120^\\circ$ dahulu.',
            'Memasukkan nilai darjah ($120^\\circ$) terus ke dalam $s = r\\theta$ tanpa menukarnya kepada radian.',
            'Membundarkan $\\pi$ terlalu awal apabila soalan meminta sudut minor dalam sebutan $\\pi$.'
          ],
          en: [
            'Using the reflex angle $240^\\circ$ directly instead of finding the minor angle $360^\\circ - 240^\\circ = 120^\\circ$ first.',
            'Substituting degrees ($120^\\circ$) straight into $s = r\\theta$ without converting to radians.',
            'Rounding $\\pi$ prematurely when the question asks for the angle in terms of $\\pi$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Cari sudut sektor minor dalam darjah: $360^\\circ - 240^\\circ = 120^\\circ$.',
            en: 'Find the minor sector angle in degrees: $360^\\circ - 240^\\circ = 120^\\circ$.',
            why: { bm: 'Satu bulatan penuh ialah $360^\\circ$, dan sektor minor menggunakan sudut $< 180^\\circ$.', en: 'A full turn is $360^\\circ$, and the minor sector uses the angle $< 180^\\circ$.' }
          },
          {
            badge: 'K1',
            bm: 'Tukar kepada radian: $\\theta = 120^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{2}{3}\\pi\\text{ rad}$.',
            en: 'Convert to radians: $\\theta = 120^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{2}{3}\\pi\\text{ rad}$.',
            why: { bm: 'Oleh sebab $\\pi\\text{ rad} = 180^\\circ$, darab dengan $\\frac{\\pi}{180^\\circ}$ dan permudahkan pecahan $\\frac{120}{180} = \\frac{2}{3}$.', en: 'Since $\\pi\\text{ rad} = 180^\\circ$, multiply by $\\frac{\\pi}{180^\\circ}$ and simplify $\\frac{120}{180} = \\frac{2}{3}$.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan $r = 6$ dan $\\theta = \\frac{2}{3}\\pi$ ke dalam $s = r\\theta$: $s = 6\\left(\\frac{2}{3}\\pi\\right)$.',
            en: 'Substitute $r = 6$ and $\\theta = \\frac{2}{3}\\pi$ into $s = r\\theta$: $s = 6\\left(\\frac{2}{3}\\pi\\right)$.',
            why: { bm: 'Rumus panjang lengkok $s = r\\theta$ hanya sah apabila $\\theta$ berada dalam radian.', en: 'The arc length formula $s = r\\theta$ is only valid when $\\theta$ is in radians.' }
          },
          {
            badge: 'N1',
            bm: 'Permudahkan: $s = 4\\pi \\approx 12.57\\text{ cm}$.',
            en: 'Simplify: $s = 4\\pi \\approx 12.57\\text{ cm}$.',
            why: { bm: '$6 \\div 3 = 2$, kemudian $2 \\times 2\\pi = 4\\pi \\approx 12.57\\text{ cm}$.', en: '$6 \\div 3 = 2$, then $2 \\times 2\\pi = 4\\pi \\approx 12.57\\text{ cm}$.' }
          }
        ]
      },
      {
        code: '1.2', marks: 4,
        topic: { bm: 'Perimeter Tembereng Bulatan', en: 'Perimeter of a Circular Segment' },
        q: {
          bm: 'Sebuah sektor $OAB$ berjejari $10\\text{ cm}$ mencangkum sudut $1.2\\text{ rad}$ di pusat $O$. Hitung perimeter bagi tembereng minor yang dibatasi oleh perentas $AB$ dan lengkok $AB$. [4m]',
          en: 'Sector $OAB$ of radius $10\\text{ cm}$ subtends an angle of $1.2\\text{ rad}$ at centre $O$. Calculate the perimeter of the minor segment bounded by chord $AB$ and arc $AB$. [4m]'
        },
        mistakes: {
          bm: [
            'Membiarkan kalkulator dalam mod **DEG** semasa mengira $\\sin(0.6\\text{ rad})$ atau $\\cos(1.2\\text{ rad})$.',
            'Menambah dua jejari ($2r = 20$) seolah-olah mencari perimeter sektor, bukannya panjang perentas $AB$.',
            'Terlupa mendarab dengan $2$ selepas mengira separuh perentas $10\\sin(0.6)$.'
          ],
          en: [
            'Leaving the calculator in **DEG** mode when evaluating $\\sin(0.6\\text{ rad})$ or $\\cos(1.2\\text{ rad})$.',
            'Adding two radii ($2r = 20$) as if finding a sector perimeter instead of chord $AB$.',
            'Forgetting to multiply by $2$ after computing half of the chord $10\\sin(0.6)$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Panjang lengkok $AB = r\\theta = 10(1.2) = 12\\text{ cm}$.',
            en: 'Arc length $AB = r\\theta = 10(1.2) = 12\\text{ cm}$.',
            why: { bm: 'Tembereng dibatasi oleh satu sempadan melengkung (lengkok $AB$) dan satu garis lurus (perentas $AB$).', en: 'A segment is bounded by one curved edge (arc $AB$) and one straight edge (chord $AB$).' }
          },
          {
            badge: 'P1',
            bm: 'Bahagi dua sama segi tiga sama kaki $\\triangle OAB$: separuh sudut $= \\frac{1.2}{2} = 0.6\\text{ rad}$.',
            en: 'Bisect isosceles $\\triangle OAB$: half the central angle $= \\frac{1.2}{2} = 0.6\\text{ rad}$.',
            why: { bm: 'Garis serenjang dari pusat $O$ ke perentas $AB$ membahagi dua sama sudut pusat dan perentas menjadi dua segi tiga bersudut tegak.', en: 'The perpendicular from $O$ to chord $AB$ bisects both the central angle and the chord into two right triangles.' }
          },
          {
            badge: 'K1',
            bm: 'Perentas $AB = 2(10\\sin 0.6) = 20(0.56464) = 11.29\\text{ cm}$ (atau $\\sqrt{10^2 + 10^2 - 2(10)(10)\\cos 1.2} = 11.29\\text{ cm}$).',
            en: 'Chord $AB = 2(10\\sin 0.6) = 20(0.56464) = 11.29\\text{ cm}$ (or $\\sqrt{10^2 + 10^2 - 2(10)(10)\\cos 1.2} = 11.29\\text{ cm}$).',
            why: { bm: 'Pastikan kalkulator dalam mod **[R]** kerana sudut $0.6$ dan $1.2$ ialah dalam radian.', en: 'Ensure the calculator is in **[R]** mode because $0.6$ and $1.2$ are in radians.' }
          },
          {
            badge: 'N1',
            bm: 'Perimeter tembereng $= 12 + 11.29 = 23.29\\text{ cm}$.',
            en: 'Perimeter of segment $= 12 + 11.29 = 23.29\\text{ cm}$.',
            why: { bm: 'Jumlahkan panjang lengkok $AB$ dengan perentas $AB$ untuk menutup seluruh sempadan tembereng.', en: 'Add arc $AB$ and chord $AB$ to trace the complete boundary of the segment.' }
          }
        ]
      },
      {
        code: '1.3', marks: 4,
        topic: { bm: 'Luas Tembereng Bulatan', en: 'Area of a Circular Segment' },
        q: {
          bm: 'Diberi sektor bulatan berjejari $8\\text{ cm}$ dengan sudut pusat $\\frac{\\pi}{3}\\text{ rad}$. Hitung luas tembereng minornya. [4m]',
          en: 'A circular sector has radius $8\\text{ cm}$ and central angle $\\frac{\\pi}{3}\\text{ rad}$. Calculate the area of its minor segment. [4m]'
        },
        mistakes: {
          bm: [
            'Berhenti selepas mengira luas sektor $\\frac{1}{2}r^2\\theta$ tanpa menolak luas segi tiga $\\frac{1}{2}r^2\\sin\\theta$.',
            'Menekan $\\sin\\left(\\frac{\\pi}{3}\\right)$ semasa kalkulator berada dalam mod Darjah [D].',
            'Terlupa faktor $\\frac{1}{2}$ atau lupa mengkuasaduakan jejari ($8^2 = 64$, bukan $8$).'
          ],
          en: [
            'Stopping at sector area $\\frac{1}{2}r^2\\theta$ without subtracting triangle area $\\frac{1}{2}r^2\\sin\\theta$.',
            'Evaluating $\\sin\\left(\\frac{\\pi}{3}\\right)$ while the calculator is left in Degree [D] mode.',
            'Forgetting the $\\frac{1}{2}$ factor or failing to square the radius ($8^2 = 64$, not $8$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Luas sektor $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(8)^2\\left(\\frac{\\pi}{3}\\right) = 32(1.0472) = 33.510\\text{ cm}^2$.',
            en: 'Sector area $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(8)^2\\left(\\frac{\\pi}{3}\\right) = 32(1.0472) = 33.510\\text{ cm}^2$.',
            why: { bm: 'Kira keluasan keseluruhan potongan sektor terlebih dahulu.', en: 'Compute the area of the entire pizza-wedge sector first.' }
          },
          {
            badge: 'K1',
            bm: 'Luas segi tiga $= \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}(8)^2\\sin\\left(\\frac{\\pi}{3}\\right) = 32(0.86603) = 27.713\\text{ cm}^2$.',
            en: 'Triangle area $= \\frac{1}{2}r^2\\sin\\theta = \\frac{1}{2}(8)^2\\sin\\left(\\frac{\\pi}{3}\\right) = 32(0.86603) = 27.713\\text{ cm}^2$.',
            why: { bm: 'Gunakan mod **[R]** untuk mengira $\\sin(\\pi/3) = \\frac{\\sqrt{3}}{2} \\approx 0.86603$.', en: 'Use **[R]** mode to evaluate $\\sin(\\pi/3) = \\frac{\\sqrt{3}}{2} \\approx 0.86603$.' }
          },
          {
            badge: 'K1',
            bm: 'Luas tembereng $= 33.510 - 27.713$ (atau $32(1.0472 - 0.86603) = 32(0.18117)$).',
            en: 'Segment area $= 33.510 - 27.713$ (or $32(1.0472 - 0.86603) = 32(0.18117)$).',
            why: { bm: 'Tembereng ialah bahagian yang tinggal selepas membuang segi tiga daripada sektor.', en: 'The segment is what remains after removing the triangle from the sector.' }
          },
          {
            badge: 'N1',
            bm: '$5.80\\text{ cm}^2$.',
            en: '$5.80\\text{ cm}^2$.',
            why: { bm: 'Kedua-dua $\\pi$ dan $\\pi = 3.142$ memberi $5.80\\text{ cm}^2$ apabila dibundarkan ke 2 tempat perpuluhan.', en: 'Both exact $\\pi$ and $\\pi = 3.142$ round to $5.80\\text{ cm}^2$ to 2 decimal places.' }
          }
        ]
      },
      {
        code: '1.4', marks: 4,
        topic: { bm: 'Luas Rantau Antara Dua Sektor Sepusat', en: 'Area Between Two Concentric Sectors' },
        q: {
          bm: 'Dua sektor bulatan sepusat mempunyai jejari $r = 5\\text{ cm}$ dan $R = 9\\text{ cm}$ serta berkongsi sudut pusat $0.8\\text{ rad}$. Hitung luas rantau di antara kedua-dua lengkok itu. [4m]',
          en: 'Two concentric sectors have radii $r = 5\\text{ cm}$ and $R = 9\\text{ cm}$ with central angle $0.8\\text{ rad}$. Find the area between the two arcs. [4m]'
        },
        mistakes: {
          bm: [
            'Menolak jejari dahulu sebelum mengkuasadua: menulis $\\frac{1}{2}(9 - 5)^2(0.8) = 6.4$ bukannya $\\frac{1}{2}(9^2 - 5^2)(0.8)$!',
            'Menggunakan rumus panjang lengkok $r\\theta$ bukannya rumus luas $\\frac{1}{2}r^2\\theta$.',
            'Terlupa mendarab dengan faktor $\\frac{1}{2}$ lalu mendapat $44.8\\text{ cm}^2$.'
          ],
          en: [
            'Subtracting radii before squaring: writing $\\frac{1}{2}(9 - 5)^2(0.8) = 6.4$ instead of $\\frac{1}{2}(9^2 - 5^2)(0.8)$!',
            'Using the arc length formula $r\\theta$ instead of the sector area formula $\\frac{1}{2}r^2\\theta$.',
            'Forgetting the $\\frac{1}{2}$ factor and getting $44.8\\text{ cm}^2$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Luas sektor luar ($R = 9$): $\\frac{1}{2}(9)^2(0.8) = \\frac{1}{2}(81)(0.8) = 32.4\\text{ cm}^2$.',
            en: 'Outer sector area ($R = 9$): $\\frac{1}{2}(9)^2(0.8) = \\frac{1}{2}(81)(0.8) = 32.4\\text{ cm}^2$.',
            why: { bm: 'Kira luas sektor besar yang merangkumi keseluruhan kipas secara berasingan dahulu.', en: 'Compute the larger outer sector area separately first.' }
          },
          {
            badge: 'K1',
            bm: 'Luas sektor dalam ($r = 5$): $\\frac{1}{2}(5)^2(0.8) = \\frac{1}{2}(25)(0.8) = 10.0\\text{ cm}^2$.',
            en: 'Inner sector area ($r = 5$): $\\frac{1}{2}(5)^2(0.8) = \\frac{1}{2}(25)(0.8) = 10.0\\text{ cm}^2$.',
            why: { bm: 'Kira luas sektor kecil yang kosong di bahagian dalam.', en: 'Compute the smaller unshaded inner sector area.' }
          },
          {
            badge: 'K1',
            bm: 'Tolak kedua-dua luas: $32.4 - 10.0$ (atau $\\frac{1}{2}(0.8)(81 - 25) = 0.4 \\times 56$).',
            en: 'Subtract both areas: $32.4 - 10.0$ (or $\\frac{1}{2}(0.8)(81 - 25) = 0.4 \\times 56$).',
            why: { bm: 'Rantau di antara dua lengkok ialah sektor luar ditolak sektor dalam.', en: 'The region between the arcs is outer sector minus inner sector.' }
          },
          {
            badge: 'N1',
            bm: '$22.4\\text{ cm}^2$.',
            en: '$22.4\\text{ cm}^2$.',
            why: { bm: 'Nilai tepat dalam $\\text{cm}^2$.', en: 'Exact area in $\\text{cm}^2$.' }
          }
        ]
      },
      {
        code: '1.5', marks: 5,
        topic: { bm: 'Panjang Tali (*Belt*) Mengelilingi Dua Roda Takal (*Pulley*)', en: 'Belt Length Around Two Pulleys' },
        q: {
          bm: 'Dua roda takal (*pulley*) berjejari $R = 12\\text{ cm}$ dan $r = 4\\text{ cm}$ mempunyai jarak antara pusat $16\\text{ cm}$. Sudut sentuhan tali (*belt*) pada takal besar ialah $4.189\\text{ rad}$ dan pada takal kecil ialah $2.094\\text{ rad}$. Hitung jumlah panjang tali yang tegang mengelilingi kedua-dua takal itu. [5m]',
          en: 'Two pulleys of radii $R = 12\\text{ cm}$ and $r = 4\\text{ cm}$ have centres $16\\text{ cm}$ apart. Belt contact angles are $4.189\\text{ rad}$ and $2.094\\text{ rad}$. Find the total length of the belt taut around both pulleys. [5m]'
        },
        mistakes: {
          bm: [
            'Hanya menjumlahkan dua lengkok bulatan dan terlupa menambah **dua bahagian tangen lurus** di antara takal.',
            'Menambah hanya satu tangen lurus ($+13.856$) sedangkan tali ada di bahagian atas dan bawah.',
            'Mengambil jarak antara pusat $16\\text{ cm}$ terus sebagai panjang tangen tanpa melukis segi tiga bersudut tegak ($R - r = 8\\text{ cm}$).'
          ],
          en: [
            'Summing only the two circular arcs and forgetting to add the **two straight tangent segments**.',
            'Adding only one straight tangent ($+13.856$) when the belt has both a top and bottom tangent.',
            'Using the centre distance $16\\text{ cm}$ directly as tangent length instead of Pythagoras with $R - r = 8\\text{ cm}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Lengkok takal besar $= 12(4.189) = 50.268\\text{ cm}$; lengkok takal kecil $= 4(2.094) = 8.376\\text{ cm}$.',
            en: 'Large pulley arc $= 12(4.189) = 50.268\\text{ cm}$; small pulley arc $= 4(2.094) = 8.376\\text{ cm}$.',
            why: { bm: 'Gunakan $s = r\\theta$ secara berasingan bagi setiap takal dengan jejari masing-masing.', en: 'Apply $s = r\\theta$ separately to each pulley using its own radius and contact angle.' }
          },
          {
            badge: 'K1',
            bm: 'Jumlah bahagian lengkok $= 50.268 + 8.376 = 58.644\\text{ cm}$.',
            en: 'Sum of circular arcs $= 50.268 + 8.376 = 58.644\\text{ cm}$.',
            why: { bm: 'Ini ialah jumlah panjang tali yang membalut kedua-dua roda melengkung.', en: 'This gives the total length of belt wrapping around both curved wheels.' }
          },
          {
            badge: 'K1',
            bm: 'Satu tangen lurus $= \\sqrt{16^2 - (12 - 4)^2} = \\sqrt{256 - 64} = \\sqrt{192} = 13.856\\text{ cm}$.',
            en: 'One straight tangent $= \\sqrt{16^2 - (12 - 4)^2} = \\sqrt{256 - 64} = \\sqrt{192} = 13.856\\text{ cm}$.',
            why: { bm: 'Jejari berserenjang dengan tangen membentuk trapezium bersudut tegak; anjak jejari kecil menghasilkan segi tiga bersudut tegak dengan sisi $R - r = 8\\text{ cm}$ dan hipotenus $16\\text{ cm}$.', en: 'Radii meet tangents at $90^\\circ$ forming a right trapezium; shifting the small radius gives a right triangle with leg $R - r = 8\\text{ cm}$ and hypotenuse $16\\text{ cm}$.' }
          },
          {
            badge: 'N1',
            bm: 'Jumlah panjang tali $= 58.644 + 2(13.856) = 58.644 + 27.712 = 86.36\\text{ cm}$.',
            en: 'Total belt length $= 58.644 + 2(13.856) = 58.644 + 27.712 = 86.36\\text{ cm}$.',
            why: { bm: 'Terdapat dua segmen tangen lurus yang sama panjang (atas dan bawah) untuk melengkapkan gelung tali.', en: 'There are two equal straight tangent segments (top and bottom) completing the closed belt loop.' }
          }
        ]
      },
      {
        code: '1.6', marks: 4,
        topic: { bm: 'Mencari Sudut & Perimeter daripada Luas Sektor', en: 'Finding Angle & Perimeter from Sector Area' },
        q: {
          bm: 'Sebuah sektor bulatan berjejari $4\\text{ cm}$ mempunyai luas $24\\text{ cm}^2$. Cari nilai sudut pusat $\\theta$ dalam radian dan perimeter sektor tersebut. [4m]',
          en: 'A circular sector of radius $4\\text{ cm}$ has area $24\\text{ cm}^2$. Find central angle $\\theta$ in radians and the perimeter of the sector. [4m]'
        },
        mistakes: {
          bm: [
            'Menyatakan perimeter sektor sebagai panjang lengkok $s = 12\\text{ cm}$ sahaja tanpa menambah dua jejari $2r = 8\\text{ cm}$.',
            'Terlupa faktor $\\frac{1}{2}$ dalam $\\frac{1}{2}r^2\\theta = 24$ lalu mendapat $\\theta = 1.5\\text{ rad}$.',
            'Menulis $\\theta = 3^\\circ$ sedangkan rumus $\\frac{1}{2}r^2\\theta$ terus menghasilkan $\\theta$ dalam radian.'
          ],
          en: [
            'Giving arc length $s = 12\\text{ cm}$ as the sector perimeter without adding both straight radii $2r = 8\\text{ cm}$.',
            'Forgetting the $\\frac{1}{2}$ factor in $\\frac{1}{2}r^2\\theta = 24$, which wrongly yields $\\theta = 1.5\\text{ rad}$.',
            'Writing $\\theta = 3^\\circ$ when $\\frac{1}{2}r^2\\theta$ directly outputs $\\theta$ in radians.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Gantikan $r = 4$ dan $A = 24$ ke dalam rumus luas sektor: $\\frac{1}{2}(4)^2\\theta = 24 \\implies \\frac{1}{2}(16)\\theta = 24 \\implies 8\\theta = 24$.',
            en: 'Substitute $r = 4$ and $A = 24$ into sector area: $\\frac{1}{2}(4)^2\\theta = 24 \\implies \\frac{1}{2}(16)\\theta = 24 \\implies 8\\theta = 24$.',
            why: { bm: 'Rumus luas sektor $\\frac{1}{2}r^2\\theta$ hanya mempunyai satu pemboleh ubah $\\theta$ yang tidak diketahui.', en: 'The sector area formula $\\frac{1}{2}r^2\\theta$ leaves $\\theta$ as the only unknown.' }
          },
          {
            badge: 'N1',
            bm: 'Selesaikan untuk $\\theta$: $\\theta = \\frac{24}{8} = 3\\text{ rad}$.',
            en: 'Solve for $\\theta$: $\\theta = \\frac{24}{8} = 3\\text{ rad}$.',
            why: { bm: 'Nilai $\\theta$ yang diperoleh terus berada dalam unit radian.', en: 'The solved value of $\\theta$ is automatically in radians.' }
          },
          {
            badge: 'K1',
            bm: 'Cari panjang lengkok $s = r\\theta = 4(3) = 12\\text{ cm}$, kemudian tambah $2r$: $\\text{Perimeter} = 12 + 2(4) = 12 + 8$.',
            en: 'Find arc length $s = r\\theta = 4(3) = 12\\text{ cm}$, then add $2r$: $\\text{Perimeter} = 12 + 2(4) = 12 + 8$.',
            why: { bm: 'Perimeter sektor terdiri daripada lengkok melengkung ditambah dua jejari lurus.', en: 'Sector perimeter combines the curved arc plus both straight radii.' }
          },
          {
            badge: 'N1',
            bm: '$\\text{Perimeter} = 20\\text{ cm}$.',
            en: '$\\text{Perimeter} = 20\\text{ cm}$.',
            why: { bm: 'Pastikan kedua-dua jawapan ($\\theta = 3\\text{ rad}$ dan $P = 20\\text{ cm}$) dinyatakan jelas.', en: 'Ensure both requested values ($\\theta = 3\\text{ rad}$ and $P = 20\\text{ cm}$) are clearly stated.' }
          }
        ]
      },
      {
        code: '1.7', marks: 4,
        topic: { bm: 'Keratan Rentas Air di Dalam Paip Silinder', en: 'Water Cross-Sectional Area Inside a Pipe' },
        q: {
          bm: 'Keratan rentas sebatang paip berbentuk bulatan berjejari $10\\text{ cm}$. Kedalaman maksimum air di dasar paip ialah $5\\text{ cm}$. Hitung luas keratan rentas air tersebut. [4m]',
          en: 'A circular pipe has radius $10\\text{ cm}$. Water at the bottom has maximum depth $5\\text{ cm}$. Find the cross-sectional area of the water. [4m]'
        },
        mistakes: {
          bm: [
            'Mengambil jarak dari pusat $O$ ke permukaan air sebagai $5\\text{ cm}$ secara membuta tanpa menyemak $10 - 5 = 5\\text{ cm}$ (gagal untuk kedalaman lain seperti $3\\text{ cm}$).',
            'Terlupa mendarab $\\frac{\\theta}{2} = \\frac{\\pi}{3}$ dengan $2$ untuk memperoleh sudut penuh $\\theta$.',
            'Menekan $\\sin\\left(\\frac{2\\pi}{3}\\right)$ dalam mod Darjah [D].'
          ],
          en: [
            'Failing to find the vertical distance from centre $O$ to the water surface as $r - \\text{depth} = 10 - 5 = 5\\text{ cm}$.',
            'Forgetting to multiply $\\frac{\\theta}{2} = \\frac{\\pi}{3}$ by $2$ to get the full central angle $\\theta$.',
            'Evaluating $\\sin\\left(\\frac{2\\pi}{3}\\right)$ in Degree [D] mode.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Jarak menegak dari pusat $O$ ke permukaan air $= r - \\text{kedalaman} = 10 - 5 = 5\\text{ cm}$.',
            en: 'Vertical distance from centre $O$ to water surface $= r - \\text{depth} = 10 - 5 = 5\\text{ cm}$.',
            why: { bm: 'Jejari penuh dari pusat $O$ ke dasar paip ialah $10\\text{ cm}$, dan air mengisi $5\\text{ cm}$ terbawah.', en: 'The full radius from $O$ to the bottom is $10\\text{ cm}$, and water fills the lowest $5\\text{ cm}$.' }
          },
          {
            badge: 'K1',
            bm: '$\\cos\\left(\\frac{\\theta}{2}\\right) = \\frac{5}{10} = 0.5 \\implies \\frac{\\theta}{2} = \\frac{\\pi}{3}\\text{ rad} \\implies \\theta = \\frac{2\\pi}{3}\\text{ rad}$.',
            en: '$\\cos\\left(\\frac{\\theta}{2}\\right) = \\frac{5}{10} = 0.5 \\implies \\frac{\\theta}{2} = \\frac{\\pi}{3}\\text{ rad} \\implies \\theta = \\frac{2\\pi}{3}\\text{ rad}$.',
            why: { bm: 'Segi tiga bersudut tegak mempunyai sisi bersebelahan $5\\text{ cm}$ dan hipotenus (jejari) $10\\text{ cm}$; darab $2$ untuk sudut penuh tembereng.', en: 'The right triangle has adjacent leg $5\\text{ cm}$ and hypotenuse (radius) $10\\text{ cm}$; double it for the full central angle.' }
          },
          {
            badge: 'K1',
            bm: 'Luas tembereng air $= \\frac{1}{2}(10)^2\\left(\\frac{2\\pi}{3} - \\sin\\frac{2\\pi}{3}\\right) = 50(2.0944 - 0.8660) = 50(1.2284)$.',
            en: 'Water segment area $= \\frac{1}{2}(10)^2\\left(\\frac{2\\pi}{3} - \\sin\\frac{2\\pi}{3}\\right) = 50(2.0944 - 0.8660) = 50(1.2284)$.',
            why: { bm: 'Air di dasar paip berbentuk tembereng bulatan: sektor ditolak segi tiga dalam mod **[R]**.', en: 'Water at the pipe bottom forms a circular segment: sector minus triangle in **[R]** mode.' }
          },
          {
            badge: 'N1',
            bm: '$61.42\\text{ cm}^2$ (atau $61.43\\text{ cm}^2$ jika menggunakan $\\pi = 3.142$).',
            en: '$61.42\\text{ cm}^2$ (or $61.43\\text{ cm}^2$ using $\\pi = 3.142$).',
            why: { bm: 'Bundarkan jawapan akhir kepada 2 tempat perpuluhan.', en: 'Round the final cross-sectional area to 2 decimal places.' }
          }
        ]
      },
      {
        code: '1.8', marks: 3,
        topic: { bm: 'Kenapa Hanya Diameter Membahagi Dua Sama Luas Bulatan?', en: 'Chord Bisecting Circle Area Reasoning' },
        q: {
          bm: 'Terangkan secara matematik mengapa hanya perentas yang merupakan diameter boleh membahagi dua sama luas sebuah bulatan, dan nyatakan sudut pusat semibulatan itu dalam radian. [3m]',
          en: 'Explain mathematically why only a diameter chord bisects the area of a circle, and state the semicircle central angle in radians. [3m]'
        },
        mistakes: {
          bm: [
            'Memberi jawapan sudut dalam darjah ($180^\\circ$) sedangkan soalan meminta sebutan radian ($\\pi\\text{ rad}$).',
            'Mengandaikan $\\sin\\theta = 0$ secara tiba-tiba tanpa menyamakan luas tembereng dengan separuh luas bulatan terlebih dahulu.'
          ],
          en: [
            'Answering in degrees ($180^\\circ$) instead of radians ($\\pi\\text{ rad}$).',
            'Assuming $\\sin\\theta = 0$ out of nowhere without equating segment area to half the circle first.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Samakan luas tembereng dengan separuh luas bulatan: $\\frac{1}{2}r^2(\\theta - \\sin\\theta) = \\frac{1}{2}\\pi r^2$.',
            en: 'Equate segment area to half the circle area: $\\frac{1}{2}r^2(\\theta - \\sin\\theta) = \\frac{1}{2}\\pi r^2$.',
            why: { bm: 'Sebarang perentas memotong bulatan menjadi tembereng; untuk membahagi dua sama luas, luas tembereng mestilah $\\frac{1}{2}\\pi r^2$.', en: 'Any chord cuts off a circular segment; bisecting the circle means that segment has area $\\frac{1}{2}\\pi r^2$.' }
          },
          {
            badge: 'K1',
            bm: 'Bahagikan kedua-dua belah dengan $\\frac{1}{2}r^2$: $\\theta - \\sin\\theta = \\pi$.',
            en: 'Divide both sides by $\\frac{1}{2}r^2$: $\\theta - \\sin\\theta = \\pi$.',
            why: { bm: 'Faktor $\\frac{1}{2}r^2$ saling mansuh, membuktikan syarat sudut $\\theta$ adalah sama bagi semua jejari $r > 0$.', en: 'The $\\frac{1}{2}r^2$ factor cancels, proving the angle condition holds regardless of radius $r > 0$.' }
          },
          {
            badge: 'J1',
            bm: 'Bagi $0 < \\theta < \\pi$, $\\sin\\theta > 0$ maka $\\theta - \\sin\\theta < \\theta < \\pi$. Hanya pada $\\theta = \\pi\\text{ rad}$ ($\\sin\\pi = 0$) persamaan dipenuhi, iaitu perentas melalui pusat (diameter).',
            en: 'For $0 < \\theta < \\pi$, $\\sin\\theta > 0$ so $\\theta - \\sin\\theta < \\theta < \\pi$. Only at $\\theta = \\pi\\text{ rad}$ ($\\sin\\pi = 0$) does $\\theta - \\sin\\theta = \\pi$ hold, meaning the chord passes through the centre (a diameter).',
            why: { bm: 'Sudut pusat $\\pi\\text{ rad}$ bermaksud perentas ialah garis lurus melalui pusat bulatan, iaitu diameter.', en: 'A central angle of $\\pi\\text{ rad}$ ($180^\\circ$) means the chord is a straight line through the centre, i.e. a diameter.' }
          }
        ]
      },
      {
        code: '1.9', marks: 4,
        topic: { bm: 'Rantau Berlorek Sektor di Dalam Segi Tiga Sama Sisi', en: 'Sector Inside an Equilateral Triangle' },
        q: {
          bm: 'Segi tiga sama sisi $ABC$ mempunyai sisi $12\\text{ cm}$. Sebuah sektor berpusat di $A$ berjejari $6\\text{ cm}$ dilukis di dalam segi tiga itu. Hitung perimeter rantau di dalam $\\triangle ABC$ tetapi di luar sektor tersebut. [4m]',
          en: 'Equilateral triangle $ABC$ has side $12\\text{ cm}$. A sector centred at $A$ with radius $6\\text{ cm}$ is drawn inside it. Find the perimeter of the region inside $\\triangle ABC$ outside the sector. [4m]'
        },
        mistakes: {
          bm: [
            'Menjumlahkan sisi penuh $AB = 12$ dan $AC = 12$ tanpa menolak bahagian jejari sektor $6\\text{ cm}$ pada kedua-dua sisi itu.',
            'Menambah jejari dalaman $6 + 6$ ke dalam perimeter sedangkan bahagian sektor di $AB$ dan $AC$ telah dipotong keluar.',
            'Menggunakan sudut $\\theta = 60$ dalam darjah terus ke dalam $s = r\\theta$.'
          ],
          en: [
            'Adding full sides $AB = 12$ and $AC = 12$ instead of subtracting the $6\\text{ cm}$ sector radii to get $6 + 6$.',
            'Including the removed inner radii inside the sector rather than tracing only the remaining outer boundary.',
            'Plugging $\\theta = 60$ in degrees directly into $s = r\\theta$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Bagi segi tiga sama sisi $\\triangle ABC$, $\\angle BAC = 60^\\circ = 60^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{\\pi}{3}\\text{ rad}$.',
            en: 'For equilateral $\\triangle ABC$, $\\angle BAC = 60^\\circ = 60^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{\\pi}{3}\\text{ rad}$.',
            why: { bm: 'Ketiga-tiga sudut dalaman segi tiga sama sisi ialah $60^\\circ$, dan wajib ditukar ke radian.', en: 'Every interior angle of an equilateral triangle is $60^\\circ$, which must be converted to radians.' }
          },
          {
            badge: 'K1',
            bm: 'Panjang lengkok sektor $= r\\theta = 6\\left(\\frac{\\pi}{3}\\right) = 2\\pi \\approx 6.283\\text{ cm}$.',
            en: 'Sector arc length $= r\\theta = 6\\left(\\frac{\\pi}{3}\\right) = 2\\pi \\approx 6.283\\text{ cm}$.',
            why: { bm: 'Lengkok melengkung ini menjadi sempadan dalam bagi rantau di luar sektor.', en: 'This curved arc forms the inner boundary of the region outside the sector.' }
          },
          {
            badge: 'K1',
            bm: 'Baki sisi lurus pada $AB$ dan $AC$: $(12 - 6) + (12 - 6) = 6 + 6 = 12\\text{ cm}$, ditambah tapak penuh $BC = 12\\text{ cm}$.',
            en: 'Remaining straight edges on $AB$ and $AC$: $(12 - 6) + (12 - 6) = 6 + 6 = 12\\text{ cm}$, plus full base $BC = 12\\text{ cm}$.',
            why: { bm: 'Sektor berjejari $6\\text{ cm}$ memotong separuh daripada sisi $AB$ dan $AC$, meninggalkan $6\\text{ cm}$ pada setiap sisi.', en: 'The $6\\text{ cm}$ sector cuts off the top $6\\text{ cm}$ of $AB$ and $AC$, leaving $6\\text{ cm}$ on each side.' }
          },
          {
            badge: 'N1',
            bm: 'Perimeter $= 6.283 + 6 + 6 + 12 = 30.28\\text{ cm}$.',
            en: 'Perimeter $= 6.283 + 6 + 6 + 12 = 30.28\\text{ cm}$.',
            why: { bm: 'Jumlahkan keempat-empat sempadan (lengkok $+$ baki $AB$ $+$ baki $AC$ $+$ $BC$).', en: 'Sum all four boundary edges (arc $+$ remaining $AB$ $+$ remaining $AC$ $+$ $BC$).' }
          }
        ]
      },
      {
        code: '1.10', marks: 4,
        topic: { bm: 'Seni Bina Kubah Dua Lengkok Simetri', en: 'Symmetric Twin-Arc Dome Design' },
        q: {
          bm: 'Kerangka sebuah pintu gerbang terdiri daripada dua lengkok sektor yang kongruen dan simetri, masing-masing berjejari $8\\text{ m}$ dan sudut pusat $0.75\\text{ rad}$. Hitung jumlah panjang lengkok gerbang dan jumlah luas kedua-dua sektor. [4m]',
          en: 'An arch consists of two congruent symmetric sector arcs, each of radius $8\\text{ m}$ and central angle $0.75\\text{ rad}$. Find the total arc length and combined sector area. [4m]'
        },
        mistakes: {
          bm: [
            'Mengira bagi satu lengkok/sektor sahaja dan terlupa mendarab dengan $2$ untuk kedua-dua belah gerbang simetri.',
            'Terlupa faktor $\\frac{1}{2}$ dalam rumus luas sektor $\\frac{1}{2}r^2\\theta$.',
            'Tertukar unit panjang ($\\text{m}$) dengan unit luas ($\\text{m}^2$).'
          ],
          en: [
            'Computing for only one side and forgetting to multiply by $2$ for both symmetric sectors.',
            'Forgetting the $\\frac{1}{2}$ factor in sector area $\\frac{1}{2}r^2\\theta$.',
            'Mixing up length units ($\\text{m}$) and area units ($\\text{m}^2$).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Panjang satu lengkok $= r\\theta = 8(0.75) = 6\\text{ m}$.',
            en: 'One arc length $= r\\theta = 8(0.75) = 6\\text{ m}$.',
            why: { bm: 'Sudut sudah diberi dalam radian, jadi terus darab $r \\times \\theta$.', en: 'The angle is already in radians, so multiply $r \\times \\theta$ directly.' }
          },
          {
            badge: 'N1',
            bm: 'Jumlah panjang lengkok (2 lengkok kongruen) $= 2 \\times 6 = 12\\text{ m}$.',
            en: 'Total arc length (2 congruent arcs) $= 2 \\times 6 = 12\\text{ m}$.',
            why: { bm: 'Gerbang simetri mempunyai dua lengkok yang sama panjang di kiri dan kanan.', en: 'The symmetric arch has two identical arcs on the left and right.' }
          },
          {
            badge: 'K1',
            bm: 'Luas satu sektor $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(8)^2(0.75) = \\frac{1}{2}(64)(0.75) = 24\\text{ m}^2$.',
            en: 'One sector area $= \\frac{1}{2}r^2\\theta = \\frac{1}{2}(8)^2(0.75) = \\frac{1}{2}(64)(0.75) = 24\\text{ m}^2$.',
            why: { bm: 'Gunakan rumus luas sektor $\\frac{1}{2}r^2\\theta$ dengan $8^2 = 64$.', en: 'Apply sector area $\\frac{1}{2}r^2\\theta$ with $8^2 = 64$.' }
          },
          {
            badge: 'N1',
            bm: 'Jumlah luas kedua-dua sektor $= 2 \\times 24 = 48\\text{ m}^2$.',
            en: 'Combined sector area $= 2 \\times 24 = 48\\text{ m}^2$.',
            why: { bm: 'Darab $2$ untuk menggabungkan kedua-dua sektor kongruen.', en: 'Multiply by $2$ to combine both congruent sectors.' }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 2: PEMBEZAAN (10 SOALAN)
    // =========================================================================
    'f5-c2': [
      {
        code: '2.1', marks: 4,
        topic: { bm: 'Pembezaan daripada Prinsip Pertama', en: 'Differentiation from First Principles' },
        q: {
          bm: 'Cari $\\frac{dy}{dx}$ bagi $y = 3x^2 - 5x$ dengan menggunakan prinsip pertama. [4m]',
          en: 'Find $\\frac{dy}{dx}$ for $y = 3x^2 - 5x$ from first principles. [4m]'
        },
        mistakes: {
          bm: [
            'Terus menggunakan petua kuasa tanpa menunjukkan perubahan kecil $\\delta y$ dan langkah had $\\lim_{\\delta x \\to 0}$ (markah sifar untuk prinsip pertama!).',
            'Salah mengembangkan $(x + \\delta x)^2$ sebagai $x^2 + (\\delta x)^2$ tanpa sebutan tengah $2x\\delta x$.',
            'Membuang simbol $\\lim_{\\delta x \\to 0}$ terlalu awal sebelum menggantikan $\\delta x = 0$.'
          ],
          en: [
            'Using power rule directly without $\\delta y / \\delta x$ and $\\lim_{\\delta x \\to 0}$ (earns zero marks for first principles!).',
            'Expanding $(x + \\delta x)^2$ wrongly as $x^2 + (\\delta x)^2$ without the middle term $2x\\delta x$.',
            'Dropping the $\\lim_{\\delta x \\to 0}$ notation too early before setting $\\delta x = 0$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Gantikan $x \\to x + \\delta x$ dan $y \\to y + \\delta y$: $y + \\delta y = 3(x + \\delta x)^2 - 5(x + \\delta x) = 3[x^2 + 2x\\delta x + (\\delta x)^2] - 5x - 5\\delta x$.',
            en: 'Replace $x \\to x + \\delta x$ and $y \\to y + \\delta y$: $y + \\delta y = 3(x + \\delta x)^2 - 5(x + \\delta x) = 3[x^2 + 2x\\delta x + (\\delta x)^2] - 5x - 5\\delta x$.',
            why: { bm: 'Prinsip pertama mengukur perubahan kecil $\\delta y$ apabila $x$ bertambah sedikit sebanyak $\\delta x$.', en: 'First principles measures the tiny change $\\delta y$ produced when $x$ increases by $\\delta x$.' }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan dan tolak $y = 3x^2 - 5x$: $\\delta y = [3x^2 + 6x\\delta x + 3(\\delta x)^2 - 5x - 5\\delta x] - (3x^2 - 5x) = 6x\\delta x + 3(\\delta x)^2 - 5\\delta x$.',
            en: 'Expand and subtract $y = 3x^2 - 5x$: $\\delta y = [3x^2 + 6x\\delta x + 3(\\delta x)^2 - 5x - 5\\delta x] - (3x^2 - 5x) = 6x\\delta x + 3(\\delta x)^2 - 5\\delta x$.',
            why: { bm: 'Semua sebutan asal ($3x^2$ dan $-5x$) mesti saling hapus supaya setiap baki sebutan mengandungi $\\delta x$.', en: 'All original terms ($3x^2$ and $-5x$) cancel out so every remaining term has a factor of $\\delta x$.' }
          },
          {
            badge: 'K1',
            bm: 'Bahagi dengan $\\delta x$: $\\frac{\\delta y}{\\delta x} = \\frac{\\delta x(6x + 3\\delta x - 5)}{\\delta x} = 6x + 3\\delta x - 5$.',
            en: 'Divide by $\\delta x$: $\\frac{\\delta y}{\\delta x} = \\frac{\\delta x(6x + 3\\delta x - 5)}{\\delta x} = 6x + 3\\delta x - 5$.',
            why: { bm: 'Faktorkan dan potong $\\delta x$ di atas dan bawah sebelum mengambil had $\\delta x \\to 0$ (mengelak bahagi sifar).', en: 'Factor and cancel $\\delta x$ before taking $\\delta x \\to 0$ to avoid dividing by zero.' }
          },
          {
            badge: 'N1',
            bm: 'Ambil had: $\\frac{dy}{dx} = \\lim_{\\delta x \\to 0} (6x + 3\\delta x - 5) = 6x - 5$.',
            en: 'Take the limit: $\\frac{dy}{dx} = \\lim_{\\delta x \\to 0} (6x + 3\\delta x - 5) = 6x - 5$.',
            why: { bm: 'Apabila $\\delta x \\to 0$, sebutan $3\\delta x \\to 0$ dan meninggalkan kecerunan tepat $6x - 5$.', en: 'As $\\delta x \\to 0$, the $3\\delta x$ term vanishes, leaving the exact derivative $6x - 5$.' }
          }
        ]
      },
      {
        code: '2.2', marks: 3,
        topic: { bm: 'Gabungan Petua Hasil Darab & Petua Rantai', en: 'Combined Product Rule & Chain Rule' },
        q: {
          bm: 'Bezakan $y = (2x - 3)(x^2 + 4)^3$ terhadap $x$ dan permudahkan jawapan dalam bentuk faktor termudah. [3m]',
          en: 'Differentiate $y = (2x - 3)(x^2 + 4)^3$ with respect to $x$ in factored form. [3m]'
        },
        mistakes: {
          bm: [
            'Lupa mendarab hasil beza isi dalam ($2x$) semasa membezakan $(x^2 + 4)^3$.',
            'Cuba mengembangkan $(x^2 + 4)^3$ secara manual lalu melakukan kesilapan algebra panjang.',
            'Tertinggal faktor $2$ apabila memfaktorkan $2(x^2 + 4)^2$ daripada kedua-dua sebutan.'
          ],
          en: [
            'Forgetting the inner derivative ($2x$) when differentiating $(x^2 + 4)^3$.',
            'Expanding $(x^2 + 4)^3$ manually and making tedious algebra mistakes.',
            'Dropping a factor of $2$ when pulling out $2(x^2 + 4)^2$ from both terms.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Tetapkan $u = 2x - 3 \\implies \\frac{du}{dx} = 2$; dan $v = (x^2 + 4)^3 \\implies \\frac{dv}{dx} = 3(x^2 + 4)^2(2x) = 6x(x^2 + 4)^2$.',
            en: 'Let $u = 2x - 3 \\implies \\frac{du}{dx} = 2$; and $v = (x^2 + 4)^3 \\implies \\frac{dv}{dx} = 3(x^2 + 4)^2(2x) = 6x(x^2 + 4)^2$.',
            why: { bm: 'Gunakan Petua Rantai untuk mencari $\\frac{dv}{dx}$ (kuasa $3$ turun, kemudian darab beza isi dalam $2x$).', en: 'Use Chain Rule for $\\frac{dv}{dx}$ (bring down power $3$, then multiply by inner derivative $2x$).' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam Petua Hasil Darab $\\frac{dy}{dx} = u\\frac{dv}{dx} + v\\frac{du}{dx} = (2x - 3)[6x(x^2 + 4)^2] + (x^2 + 4)^3(2)$.',
            en: 'Substitute into Product Rule $\\frac{dy}{dx} = u\\frac{dv}{dx} + v\\frac{du}{dx} = (2x - 3)[6x(x^2 + 4)^2] + (x^2 + 4)^3(2)$.',
            why: { bm: 'Dua ungkapan $x$ didarab bersama memerlukan Petua Hasil Darab ($uv\' + vu\'$).', en: 'Multiplying two $x$-expressions requires the Product Rule ($uv\' + vu\'$).' }
          },
          {
            badge: 'K1',
            bm: 'Faktorkan sepunya $2(x^2 + 4)^2$: $= 2(x^2 + 4)^2[3x(2x - 3) + (x^2 + 4)] = 2(x^2 + 4)^2[6x^2 - 9x + x^2 + 4]$.',
            en: 'Factor out common $2(x^2 + 4)^2$: $= 2(x^2 + 4)^2[3x(2x - 3) + (x^2 + 4)] = 2(x^2 + 4)^2[6x^2 - 9x + x^2 + 4]$.',
            why: { bm: 'Tarik keluar kuasa terendah $(x^2 + 4)^2$ dan faktor nombor $2$ supaya baki di dalam kurungan mudah dikumpulkan.', en: 'Factor out the lowest common power $(x^2 + 4)^2$ and constant $2$ so the remaining bracket simplifies cleanly.' }
          },
          {
            badge: 'N1',
            bm: '$\\frac{dy}{dx} = 2(x^2 + 4)^2(7x^2 - 9x + 4)$.',
            en: '$\\frac{dy}{dx} = 2(x^2 + 4)^2(7x^2 - 9x + 4)$.',
            why: { bm: 'Gabungkan sebutan serupa $6x^2 + x^2 = 7x^2$ dalam bentuk faktor termudah.', en: 'Combine like terms $6x^2 + x^2 = 7x^2$ in fully factored form.' }
          }
        ]
      },
      {
        code: '2.3', marks: 3,
        topic: { bm: 'Petua Hasil Bahagi pada Nilai Tertentu', en: 'Quotient Rule Evaluated at a Point' },
        q: {
          bm: 'Diberi $y = \\frac{3x + 1}{2x - 5}$, cari nilai $\\frac{dy}{dx}$ apabila $x = 2$. [3m]',
          en: 'Given $y = \\frac{3x + 1}{2x - 5}$, find the value of $\\frac{dy}{dx}$ when $x = 2$. [3m]'
        },
        mistakes: {
          bm: [
            'Terbalik urutan pengangka Petua Hasil Bahagi: menulis $uv\' - vu\'$ bukannya $vu\' - uv\'$ lalu mendapat $+17$.',
            'Tersilap tanda apabila membuka kurungan tolak: menulis $-(6x + 2) = -6x + 2$ lalu mendapat $-13$.',
            'Terlupa mengkuasaduakan penyebut $(2x - 5)^2$.'
          ],
          en: [
            'Reversing the Quotient Rule numerator into $uv\' - vu\'$ instead of $vu\' - uv\'$, giving $+17$.',
            'Sign error expanding the negative bracket: writing $-(6x + 2) = -6x + 2$, giving $-13$.',
            'Forgetting to square the denominator $(2x - 5)^2$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Tetapkan $u = 3x + 1 \\implies u\' = 3$ dan $v = 2x - 5 \\implies v\' = 2$.',
            en: 'Let $u = 3x + 1 \\implies u\' = 3$ and $v = 2x - 5 \\implies v\' = 2$.',
            why: { bm: 'Kenal pasti pengangka ($u$) dan penyebut ($v$) secara teratur sebelum masuk ke rumus.', en: 'Identify numerator ($u$) and denominator ($v$) cleanly before applying the rule.' }
          },
          {
            badge: 'K1',
            bm: 'Petua Hasil Bahagi: $\\frac{dy}{dx} = \\frac{vu\' - uv\'}{v^2} = \\frac{(2x - 5)(3) - (3x + 1)(2)}{(2x - 5)^2}$.',
            en: 'Quotient Rule: $\\frac{dy}{dx} = \\frac{vu\' - uv\'}{v^2} = \\frac{(2x - 5)(3) - (3x + 1)(2)}{(2x - 5)^2}$.',
            why: { bm: 'Ingat peraturan **"Bawah ($v$) Mula Dahulu!"** supaya tanda tolak tidak terbalik.', en: 'Remember **"Bottom ($v$) Starts First!"** so the subtraction order is right.' }
          },
          {
            badge: 'K1',
            bm: 'Kembangkan pengangka dengan cermat: $\\frac{(6x - 15) - (6x + 2)}{(2x - 5)^2} = \\frac{6x - 15 - 6x - 2}{(2x - 5)^2} = \\frac{-17}{(2x - 5)^2}$.',
            en: 'Expand the numerator carefully: $\\frac{(6x - 15) - (6x + 2)}{(2x - 5)^2} = \\frac{6x - 15 - 6x - 2}{(2x - 5)^2} = \\frac{-17}{(2x - 5)^2}$.',
            why: { bm: 'Tanda negatif di depan $(6x + 2)$ menukar kedua-dua sebutan kepada $-6x - 2$.', en: 'The minus sign in front of $(6x + 2)$ distributes to both terms giving $-6x - 2$.' }
          },
          {
            badge: 'N1',
            bm: 'Pada $x = 2$: $\\frac{dy}{dx} = \\frac{-17}{(2(2) - 5)^2} = \\frac{-17}{(-1)^2} = \\frac{-17}{1} = -17$.',
            en: 'At $x = 2$: $\\frac{dy}{dx} = \\frac{-17}{(2(2) - 5)^2} = \\frac{-17}{(-1)^2} = \\frac{-17}{1} = -17$.',
            why: { bm: '$(-1)^2 = +1$, jadi jawapan kekal $-17$.', en: '$(-1)^2 = +1$, so the final value remains $-17$.' }
          }
        ]
      },
      {
        code: '2.4', marks: 4,
        topic: { bm: 'Persamaan Garis Normal kepada Lengkung', en: 'Equation of Normal to a Curve' },
        q: {
          bm: 'Cari persamaan garis normal kepada lengkung $y = x^3 - 4x + 2$ pada titik di mana $x = 2$. [4m]',
          en: 'Find the equation of the normal to the curve $y = x^3 - 4x + 2$ at the point where $x = 2$. [4m]'
        },
        mistakes: {
          bm: [
            'Menggunakan kecerunan tangen $m_T = 8$ secara terus tanpa menukarnya kepada kecerunan normal $m_N = -\\frac{1}{8}$.',
            'Menyongsangkan $8$ menjadi $+\\frac{1}{8}$ tanpa menukar tanda kepada negatif.',
            'Tersilap tanda apabila mengembangkan $-(x - 2) = -x - 2$ bukannya $-x + 2$.'
          ],
          en: [
            'Using tangent gradient $m_T = 8$ directly instead of normal gradient $m_N = -\\frac{1}{8}$.',
            'Flipping $8$ to $+\\frac{1}{8}$ without negating the sign.',
            'Sign error expanding $-(x - 2)$ as $-x - 2$ instead of $-x + 2$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari koordinat-$y$ pada $x = 2$: $y = (2)^3 - 4(2) + 2 = 8 - 8 + 2 = 2 \\implies P(2, 2)$.',
            en: 'Find the $y$-coordinate at $x = 2$: $y = (2)^3 - 4(2) + 2 = 8 - 8 + 2 = 2 \\implies P(2, 2)$.',
            why: { bm: 'Kita perlukan kedua-dua koordinat $(x_1, y_1)$ pada lengkung asal sebelum membina persamaan garis lurus.', en: 'We need both coordinates $(x_1, y_1)$ on the original curve before writing a line equation.' }
          },
          {
            badge: 'K1',
            bm: 'Bezakan: $\\frac{dy}{dx} = 3x^2 - 4$; pada $x = 2$, $m_T = 3(2)^2 - 4 = 12 - 4 = 8$.',
            en: 'Differentiate: $\\frac{dy}{dx} = 3x^2 - 4$; at $x = 2$, $m_T = 3(2)^2 - 4 = 12 - 4 = 8$.',
            why: { bm: 'Nilai $\\frac{dy}{dx}$ pada $x = 2$ memberi kecerunan tangen $m_T$.', en: 'Evaluating $\\frac{dy}{dx}$ at $x = 2$ gives the tangent gradient $m_T$.' }
          },
          {
            badge: 'K1',
            bm: 'Kecerunan normal berserenjang: $m_T \\cdot m_N = -1 \\implies m_N = -\\frac{1}{8}$.',
            en: 'Perpendicular normal gradient: $m_T \\cdot m_N = -1 \\implies m_N = -\\frac{1}{8}$.',
            why: { bm: 'Normal sentiasa berserenjang ($90^\\circ$) dengan tangen, maka songsangkan dan tukar tanda.', en: 'The normal is perpendicular ($90^\\circ$) to the tangent, so flip and negate $m_T$.' }
          },
          {
            badge: 'K1',
            bm: 'Bentuk titik-kecerunan: $y - 2 = -\\frac{1}{8}(x - 2) \\implies 8(y - 2) = -(x - 2) \\implies 8y - 16 = -x + 2$.',
            en: 'Point-gradient form: $y - 2 = -\\frac{1}{8}(x - 2) \\implies 8(y - 2) = -(x - 2) \\implies 8y - 16 = -x + 2$.',
            why: { bm: 'Darab kedua-dua belah dengan $8$ untuk menghapuskan pecahan dan berhati-hati dengan $-(-2) = +2$.', en: 'Multiply both sides by $8$ to clear the fraction and watch $-(-2) = +2$.' }
          },
          {
            badge: 'N1',
            bm: '$x + 8y - 18 = 0$ (atau $y = -\\frac{1}{8}x + \\frac{9}{4}$).',
            en: '$x + 8y - 18 = 0$ (or $y = -\\frac{1}{8}x + \\frac{9}{4}$).',
            why: { bm: 'Kumpulkan semua sebutan ke satu sisi dalam bentuk am persamaan garis lurus.', en: 'Gather all terms to one side in clean standard linear form.' }
          }
        ]
      },
      {
        code: '2.5', marks: 5,
        topic: { bm: 'Titik Pegun & Sifat Titik Pusingan ($\\frac{d^2y}{dx^2}$)', en: 'Stationary Points & Second-Derivative Nature Test' },
        q: {
          bm: 'Cari koordinat titik-titik pegun bagi lengkung $y = 2x^3 - 9x^2 + 12x + 1$ dan tentukan sifat setiap titik pegun tersebut. [5m]',
          en: 'Find the coordinates of the stationary points of $y = 2x^3 - 9x^2 + 12x + 1$ and determine their nature. [5m]'
        },
        mistakes: {
          bm: [
            'Terbalik tafsiran terbitan kedua: menyangka $\\frac{d^2y}{dx^2} > 0$ ialah maksimum sedangkan $> 0$ bermaksud lengkung senyum $\\cup$ (**titik minimum**)!',
            'Menggantikan $x = 1, 2$ ke dalam $\\frac{dy}{dx}$ (mendapat $0$) bukannya ke dalam persamaan asal $y$ untuk mencari koordinat-$y$.',
            'Terlupa menyelesaikan $\\frac{dy}{dx} = 0$ sebelum mengira $\\frac{d^2y}{dx^2}$.'
          ],
          en: [
            'Reversing the second-derivative test: thinking $\\frac{d^2y}{dx^2} > 0$ is maximum when it means concave up $\\cup$ (**minimum point**)!',
            'Substituting $x = 1, 2$ into $\\frac{dy}{dx}$ (giving $0$) instead of the original $y$ equation for $y$-coordinates.',
            'Forgetting to solve $\\frac{dy}{dx} = 0$ first before taking $\\frac{d^2y}{dx^2}$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Tetapkan $\\frac{dy}{dx} = 6x^2 - 18x + 12 = 0$; bahagi dengan $6$: $x^2 - 3x + 2 = 0 \\implies (x - 1)(x - 2) = 0 \\implies x = 1, 2$.',
            en: 'Set $\\frac{dy}{dx} = 6x^2 - 18x + 12 = 0$; divide by $6$: $x^2 - 3x + 2 = 0 \\implies (x - 1)(x - 2) = 0 \\implies x = 1, 2$.',
            why: { bm: 'Pada titik pegun, kecerunan mendatar $\\frac{dy}{dx} = 0$; bahagi $6$ memudahkan pemfaktoran kuadratik.', en: 'At stationary points, $\\frac{dy}{dx} = 0$; dividing by $6$ simplifies factoring.' }
          },
          {
            badge: 'N1',
            bm: 'Cari koordinat-$y$: $y(1) = 2(1)^3 - 9(1)^2 + 12(1) + 1 = 6$; $y(2) = 2(8) - 9(4) + 12(2) + 1 = 5 \\implies (1, 6)$ dan $(2, 5)$.',
            en: 'Find $y$-coordinates: $y(1) = 2(1)^3 - 9(1)^2 + 12(1) + 1 = 6$; $y(2) = 2(8) - 9(4) + 12(2) + 1 = 5 \\implies (1, 6)$ and $(2, 5)$.',
            why: { bm: 'Gantikan kedua-dua nilai $x$ ke dalam persamaan lengkung asal $y$.', en: 'Substitute both $x$-values back into the original curve equation $y$.' }
          },
          {
            badge: 'K1',
            bm: 'Cari terbitan kedua: $\\frac{d^2y}{dx^2} = 12x - 18$.',
            en: 'Find the second derivative: $\\frac{d^2y}{dx^2} = 12x - 18$.',
            why: { bm: 'Bezakan $\\frac{dy}{dx}$ sekali lagi untuk menguji kelengkungan graf di setiap titik pegun.', en: 'Differentiate $\\frac{dy}{dx}$ once more to test concavity at each stationary point.' }
          },
          {
            badge: 'K1',
            bm: 'Pada $x = 1$: $\\frac{d^2y}{dx^2} = 12(1) - 18 = -6 < 0$; pada $x = 2$: $\\frac{d^2y}{dx^2} = 12(2) - 18 = +6 > 0$.',
            en: 'At $x = 1$: $\\frac{d^2y}{dx^2} = 12(1) - 18 = -6 < 0$; at $x = 2$: $\\frac{d^2y}{dx^2} = 12(2) - 18 = +6 > 0$.',
            why: { bm: 'Periksa tanda negatif ($< 0$) vs positif ($> 0$) pada setiap nilai $x$.', en: 'Check the sign (negative $< 0$ vs positive $> 0$) at each stationary $x$-value.' }
          },
          {
            badge: 'J1',
            bm: '$(1, 6)$ ialah titik maksimum ($\\cap$); $(2, 5)$ ialah titik minimum ($\\cup$).',
            en: '$(1, 6)$ is a maximum point ($\\cap$); $(2, 5)$ is a minimum point ($\\cup$).',
            why: { bm: '$y\'\' < 0$ ialah lengkung masam $\\cap$ (maksimum); $y\'\' > 0$ ialah lengkung senyum $\\cup$ (minimum).', en: '$y\'\' < 0$ is concave down $\\cap$ (maximum); $y\'\' > 0$ is concave up $\\cup$ (minimum).' }
          }
        ]
      },
      {
        code: '2.6', marks: 4,
        topic: { bm: 'Kadar Perubahan Berkaitan Belon Sfera', en: 'Related Rates of Change for a Spherical Balloon' },
        q: {
          bm: 'Sebiji belon sfera diisi udara pada kadar malar $20\\pi\\text{ cm}^3\\text{ s}^{-1}$. Cari kadar perubahan jejari belon pada ketika jejarinya ialah $5\\text{ cm}$. (Isi padu sfera $V = \\frac{4}{3}\\pi r^3$). [4m]',
          en: 'A spherical balloon is inflated at $20\\pi\\text{ cm}^3\\text{ s}^{-1}$. Find the rate of change of its radius when $r = 5\\text{ cm}$ ($V = \\frac{4}{3}\\pi r^3$). [4m]'
        },
        mistakes: {
          bm: [
            'Mendarab $\\frac{dV}{dt} \\times \\frac{dV}{dr}$ bukannya membahagi $\\frac{dr}{dt} = \\frac{dr}{dV} \\times \\frac{dV}{dt}$.',
            'Menggantikan $r = 5$ sebelum membezakan $V$ (menjadikan $V$ pemalar lalu $\\frac{dV}{dr} = 0$!).',
            'Terlupa angka $3$ pada $\\frac{4}{3}\\pi(3r^2)$ saling mansuh supaya menjadi $4\\pi r^2$.'
          ],
          en: [
            'Multiplying $\\frac{dV}{dt} \\times \\frac{dV}{dr}$ instead of using $\\frac{dr}{dt} = \\frac{dr}{dV} \\times \\frac{dV}{dt}$.',
            'Substituting $r = 5$ before differentiating $V$ (making $V$ constant so derivative is $0$!).',
            'Forgetting that the $3$ from differentiating $r^3$ cancels the $\\frac{1}{3}$ in $\\frac{4}{3}\\pi r^3$ to leave $4\\pi r^2$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bezakan $V = \\frac{4}{3}\\pi r^3$ terhadap $r$: $\\frac{dV}{dr} = \\frac{4}{3}\\pi(3r^2) = 4\\pi r^2$.',
            en: 'Differentiate $V = \\frac{4}{3}\\pi r^3$ w.r.t. $r$: $\\frac{dV}{dr} = \\frac{4}{3}\\pi(3r^2) = 4\\pi r^2$.',
            why: { bm: 'Bezakan rumus isi padu terhadap $r$ terlebih dahulu sebelum menggantikan sebarang nombor.', en: 'Differentiate the volume formula w.r.t. $r$ first before plugging in any number.' }
          },
          {
            badge: 'K1',
            bm: 'Pada ketika $r = 5$: $\\frac{dV}{dr} = 4\\pi(5)^2 = 4\\pi(25) = 100\\pi$.',
            en: 'At the instant $r = 5$: $\\frac{dV}{dr} = 4\\pi(5)^2 = 4\\pi(25) = 100\\pi$.',
            why: { bm: 'Barulah gantikan $r = 5\\text{ cm}$ untuk memperoleh nilai $\\frac{dV}{dr}$ pada ketika itu.', en: 'Now substitute $r = 5\\text{ cm}$ to get $\\frac{dV}{dr}$ at that exact instant.' }
          },
          {
            badge: 'K1',
            bm: 'Guna Petua Rantai: $\\frac{dr}{dt} = \\frac{dr}{dV} \\times \\frac{dV}{dt} = \\frac{1}{100\\pi} \\times 20\\pi = \\frac{20}{100}$.',
            en: 'Apply Chain Rule: $\\frac{dr}{dt} = \\frac{dr}{dV} \\times \\frac{dV}{dt} = \\frac{1}{100\\pi} \\times 20\\pi = \\frac{20}{100}$.',
            why: { bm: 'Songsangkan $\\frac{dV}{dr}$ kepada $\\frac{dr}{dV} = \\frac{1}{100\\pi}$ supaya $dV$ saling mansuh dengan $\\frac{dV}{dt}$, dan $\\pi$ turut mansuh.', en: 'Invert $\\frac{dV}{dr}$ to $\\frac{dr}{dV} = \\frac{1}{100\\pi}$ so $dV$ cancels diagonally with $\\frac{dV}{dt}$, and $\\pi$ cancels out.' }
          },
          {
            badge: 'N1',
            bm: '$\\frac{dr}{dt} = \\frac{1}{5} = 0.2\\text{ cm s}^{-1}$.',
            en: '$\\frac{dr}{dt} = \\frac{1}{5} = 0.2\\text{ cm s}^{-1}$.',
            why: { bm: 'Permudahkan pecahan $\\frac{20}{100} = \\frac{1}{5} = 0.2$ dengan unit kadar $\\text{cm s}^{-1}$.', en: 'Simplify $\\frac{20}{100} = \\frac{1}{5} = 0.2$ with rate unit $\\text{cm s}^{-1}$.' }
          }
        ]
      },
      {
        code: '2.7', marks: 4,
        topic: { bm: 'Perubahan Kecil dan Penghampiran ($\\delta y \\approx \\frac{dy}{dx}\\delta x$)', en: 'Small Changes & Approximation' },
        q: {
          bm: 'Diberi $y = 3x^2 - 4x$, cari perubahan hampir bagi $y$ apabila $x$ menyusut daripada $5$ kepada $4.98$. [4m]',
          en: 'Given $y = 3x^2 - 4x$, find the approximate change in $y$ when $x$ decreases from $5$ to $4.98$. [4m]'
        },
        mistakes: {
          bm: [
            'Menggunakan $\\delta x = +0.02$ sedangkan $x$ menyusut ($4.98 - 5 = -0.02$).',
            'Mengira nilai tepat $y_{\\text{baru}} - y_{\\text{asal}} = -0.5188$ menggunakan kalkulator bukannya penghampiran kalkulus $\\delta y \\approx \\frac{dy}{dx}\\delta x$.',
            'Mengira nilai $y(5)$ bukannya nilai terbitan $\\frac{dy}{dx}$ pada $x = 5$.'
          ],
          en: [
            'Using $\\delta x = +0.02$ instead of $-0.02$ when $x$ decreases ($4.98 - 5 = -0.02$).',
            'Computing exact $y_{\\text{new}} - y_{\\text{old}} = -0.5188$ directly instead of the calculus approximation $\\delta y \\approx \\frac{dy}{dx}\\delta x$.',
            'Evaluating $y(5)$ instead of the derivative $\\frac{dy}{dx}$ at $x = 5$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Bezakan: $\\frac{dy}{dx} = 6x - 4$; pada nilai asal $x = 5$, $\\frac{dy}{dx} = 6(5) - 4 = 30 - 4 = 26$.',
            en: 'Differentiate: $\\frac{dy}{dx} = 6x - 4$; at base $x = 5$, $\\frac{dy}{dx} = 6(5) - 4 = 30 - 4 = 26$.',
            why: { bm: 'Kira kadar kecerunan lengkung pada titik permulaan cantik $x = 5$.', en: 'Evaluate the slope of the curve at the clean starting point $x = 5$.' }
          },
          {
            badge: 'P1',
            bm: 'Tentukan perubahan kecil $\\delta x = x_{\\text{baru}} - x_{\\text{asal}} = 4.98 - 5 = -0.02$.',
            en: 'Find the small change $\\delta x = x_{\\text{new}} - x_{\\text{old}} = 4.98 - 5 = -0.02$.',
            why: { bm: 'Oleh sebab $x$ menyusut daripada $5$ ke $4.98$, $\\delta x$ mestilah bertanda negatif.', en: 'Because $x$ decreases from $5$ to $4.98$, $\\delta x$ must be negative.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam rumus penghampiran: $\\delta y \\approx \\frac{dy}{dx}\\delta x = 26(-0.02)$.',
            en: 'Substitute into the approximation formula: $\\delta y \\approx \\frac{dy}{dx}\\delta x = 26(-0.02)$.',
            why: { bm: 'Perubahan hampir bagi $y$ ialah kecerunan didarabkan perubahan kecil $x$.', en: 'The approximate change in $y$ is the gradient times the small change in $x$.' }
          },
          {
            badge: 'N1',
            bm: '$\\delta y \\approx -0.52$ (iaitu $y$ menyusut sebanyak kira-kira $0.52$).',
            en: '$\\delta y \\approx -0.52$ (meaning $y$ decreases by approximately $0.52$).',
            why: { bm: 'Kekalkan tanda negatif untuk menunjukkan $y$ turut menyusut.', en: 'Keep the negative sign to show that $y$ decreases as well.' }
          }
        ]
      },
      {
        code: '2.8', marks: 5,
        topic: { bm: 'Pengoptimuman Isi Padu Maksimum Kotak Terbuka', en: 'Optimization: Maximum Volume of an Open Box' },
        q: {
          bm: 'Sekeping kadbod segi empat sama bersisi $24\\text{ cm}$ dipotong empat bucu segi empat sama bersisi $x\\text{ cm}$ lalu dilipat membentuk kotak terbuka. Cari nilai $x$ supaya isi padu kotak adalah maksimum. [5m]',
          en: 'Squares of side $x\\text{ cm}$ are cut from the four corners of a $24\\text{ cm} \\times 24\\text{ cm}$ sheet and folded into an open box. Find $x$ that maximizes volume. [5m]'
        },
        mistakes: {
          bm: [
            'Menulis panjang tapak kotak sebagai $24 - x$ bukannya $24 - 2x$ (kedua-dua hujung kiri dan kanan dipotong $x$).',
            'Menerima $x = 12$ tanpa menyemak syarat fizikal $24 - 2x > 0 \\implies x < 12$.',
            'Tidak menunjukkan ujian terbitan kedua $\\frac{d^2V}{dx^2} < 0$ untuk membuktikan maksimum.'
          ],
          en: [
            'Writing the base side as $24 - x$ instead of $24 - 2x$ (both left and right corners are cut by $x$).',
            'Accepting $x = 12$ without checking the physical domain $24 - 2x > 0 \\implies x < 12$.',
            'Omitting the second-derivative check $\\frac{d^2V}{dx^2} < 0$ to prove a maximum.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Dimensi kotak terbuka: tinggi $= x$, panjang tapak $=$ lebar tapak $= 24 - 2x$.',
            en: 'Open box dimensions: height $= x$, base length $=$ base width $= 24 - 2x$.',
            why: { bm: 'Setiap tepi kadbod dipotong $x\\text{ cm}$ di kiri dan $x\\text{ cm}$ di kanan, maka baki tapak ialah $24 - 2x$.', en: 'Each edge has $x\\text{ cm}$ cut from both ends, leaving $24 - 2x$ for the base.' }
          },
          {
            badge: 'K1',
            bm: 'Isi padu $V = x(24 - 2x)^2 = x(576 - 96x + 4x^2) = 4x^3 - 96x^2 + 576x$.',
            en: 'Volume $V = x(24 - 2x)^2 = x(576 - 96x + 4x^2) = 4x^3 - 96x^2 + 576x$.',
            why: { bm: 'Kembangkan $(24 - 2x)^2$ penuh dan darabkan dengan $x$ sebelum membezakan.', en: 'Expand $(24 - 2x)^2$ completely and multiply by $x$ before differentiating.' }
          },
          {
            badge: 'K1',
            bm: '$\\frac{dV}{dx} = 12x^2 - 192x + 576 = 0 \\implies x^2 - 16x + 48 = 0 \\implies (x - 4)(x - 12) = 0 \\implies x = 4, 12$.',
            en: '$\\frac{dV}{dx} = 12x^2 - 192x + 576 = 0 \\implies x^2 - 16x + 48 = 0 \\implies (x - 4)(x - 12) = 0 \\implies x = 4, 12$.',
            why: { bm: 'Bahagi dengan $12$ untuk memudahkan pemfaktoran bagi mencari titik pegun.', en: 'Divide by $12$ to simplify factoring for stationary points.' }
          },
          {
            badge: 'K1',
            bm: 'Tolak $x = 12$ kerana $24 - 2(12) = 0$ (tiada kotak!). Uji $x = 4$: $\\frac{d^2V}{dx^2} = 24x - 192 \\implies 24(4) - 192 = -96 < 0$ (maksimum).',
            en: 'Reject $x = 12$ since $24 - 2(12) = 0$ (no box!). Test $x = 4$: $\\frac{d^2V}{dx^2} = 24x - 192 \\implies 24(4) - 192 = -96 < 0$ (maximum).',
            why: { bm: 'Pastikan sisi tapak positif ($x < 12$) dan $\\frac{d^2V}{dx^2} < 0$ mengesahkan isi padu maksimum.', en: 'Enforce positive base width ($x < 12$) and $\\frac{d^2V}{dx^2} < 0$ to confirm maximum volume.' }
          },
          {
            badge: 'N1',
            bm: '$x = 4\\text{ cm}$.',
            en: '$x = 4\\text{ cm}$.',
            why: { bm: 'Nilai $x$ yang memaksimumkan isi padu kotak terbuka.', en: 'The cut size $x$ that maximizes the open box volume.' }
          }
        ]
      },
      {
        code: '2.9', marks: 4,
        topic: { bm: 'Kadar Perubahan Aras Air dalam Bekas Kon', en: 'Rate of Change of Water Depth in a Cone' },
        q: {
          bm: 'Sebuah bekas kon terbalik mempunyai jejari atas $6\\text{ cm}$ dan tinggi $18\\text{ cm}$. Air dituang masuk pada kadar $12\\pi\\text{ cm}^3\\text{ s}^{-1}$. Cari kadar kenaikan aras air $\\frac{dh}{dt}$ apabila kedalaman air $h = 9\\text{ cm}$. ($V = \\frac{1}{3}\\pi r^2 h$). [4m]',
          en: 'An inverted cone of top radius $6\\text{ cm}$ and height $18\\text{ cm}$ is filled at $12\\pi\\text{ cm}^3\\text{ s}^{-1}$. Find $\\frac{dh}{dt}$ when depth $h = 9\\text{ cm}$ ($V = \\frac{1}{3}\\pi r^2 h$). [4m]'
        },
        mistakes: {
          bm: [
            'Membezakan $V = \\frac{1}{3}\\pi r^2 h$ dengan menganggap $r = 6$ malar tanpa menggunakan nisbah segi tiga serupa $\\frac{r}{h} = \\frac{6}{18}$ dahulu!',
            'Terbalik nisbah segi tiga serupa menjadi $r = 3h$ bukannya $r = \\frac{h}{3}$.',
            'Menggantikan $h = 9$ sebelum membezakan $V$ terhadap $h$.'
          ],
          en: [
            'Differentiating $V = \\frac{1}{3}\\pi r^2 h$ treating $r = 6$ as constant instead of using similar triangles $\\frac{r}{h} = \\frac{6}{18}$ first!',
            'Inverting the similar-triangles ratio as $r = 3h$ instead of $r = \\frac{h}{3}$.',
            'Substituting $h = 9$ before differentiating $V$ with respect to $h$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Guna segi tiga serupa: $\\frac{r}{h} = \\frac{6}{18} = \\frac{1}{3} \\implies r = \\frac{h}{3}$.',
            en: 'By similar triangles: $\\frac{r}{h} = \\frac{6}{18} = \\frac{1}{3} \\implies r = \\frac{h}{3}$.',
            why: { bm: 'Jejari permukaan air $r$ berubah mengikut ketinggian $h$, jadi kita wajib nyatakan $r$ dalam sebutan $h$ untuk tinggalkan satu pemboleh ubah.', en: 'Water surface radius $r$ grows with depth $h$, so express $r$ in terms of $h$ to leave one variable.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan $r = \\frac{h}{3}$ ke dalam $V$: $V = \\frac{1}{3}\\pi\\left(\\frac{h}{3}\\right)^2 h = \\frac{1}{3}\\pi\\left(\\frac{h^2}{9}\\right)h = \\frac{\\pi}{27}h^3$.',
            en: 'Substitute $r = \\frac{h}{3}$ into $V$: $V = \\frac{1}{3}\\pi\\left(\\frac{h}{3}\\right)^2 h = \\frac{1}{3}\\pi\\left(\\frac{h^2}{9}\\right)h = \\frac{\\pi}{27}h^3$.',
            why: { bm: 'Sekarang isi padu $V$ bergantung sepenuhnya pada $h$ sahaja ($3 \\times 9 = 27$).', en: 'Now volume $V$ depends solely on $h$ ($3 \\times 9 = 27$).' }
          },
          {
            badge: 'K1',
            bm: 'Bezakan: $\\frac{dV}{dh} = \\frac{3\\pi h^2}{27} = \\frac{\\pi}{9}h^2$; pada $h = 9$, $\\frac{dV}{dh} = \\frac{\\pi(9)^2}{9} = 9\\pi$.',
            en: 'Differentiate: $\\frac{dV}{dh} = \\frac{3\\pi h^2}{27} = \\frac{\\pi}{9}h^2$; at $h = 9$, $\\frac{dV}{dh} = \\frac{\\pi(9)^2}{9} = 9\\pi$.',
            why: { bm: 'Bezakan terhadap $h$ dahulu, barulah gantikan $h = 9\\text{ cm}$.', en: 'Differentiate w.r.t. $h$ first, then substitute $h = 9\\text{ cm}$.' }
          },
          {
            badge: 'K1',
            bm: 'Petua Rantai: $\\frac{dh}{dt} = \\frac{dh}{dV} \\times \\frac{dV}{dt} = \\frac{1}{9\\pi} \\times 12\\pi = \\frac{12}{9}$.',
            en: 'Chain Rule: $\\frac{dh}{dt} = \\frac{dh}{dV} \\times \\frac{dV}{dt} = \\frac{1}{9\\pi} \\times 12\\pi = \\frac{12}{9}$.',
            why: { bm: '$dV$ dan $\\pi$ saling mansuh dalam pendaraban rantai.', en: 'Both $dV$ and $\\pi$ cancel out cleanly in the chain product.' }
          },
          {
            badge: 'N1',
            bm: '$\\frac{dh}{dt} = \\frac{4}{3}\\text{ cm s}^{-1}$ (atau $1.333\\text{ cm s}^{-1}$).',
            en: '$\\frac{dh}{dt} = \\frac{4}{3}\\text{ cm s}^{-1}$ (or $1.333\\text{ cm s}^{-1}$).',
            why: { bm: 'Permudahkan $\\frac{12}{9}$ dengan membahagi pengangka dan penyebut dengan $3$.', en: 'Simplify $\\frac{12}{9}$ by dividing numerator and denominator by $3$.' }
          }
        ]
      },
      {
        code: '2.10', marks: 3,
        topic: { bm: 'Pengayaan Petua Rantai Fungsi Gubahan', en: 'Chain Rule Composite Function Enrichment' },
        q: {
          bm: 'Menggunakan petua rantai $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$ (diberi $\\frac{d}{du}(\\sin u) = \\cos u$), cari $\\frac{dy}{dx}$ bagi $y = 3\\sin(2x^2 + 1)$. [3m]',
          en: 'Using the chain rule $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}$ (given $\\frac{d}{du}(\\sin u) = \\cos u$), find $\\frac{dy}{dx}$ for $y = 3\\sin(2x^2 + 1)$. [3m]'
        },
        mistakes: {
          bm: [
            'Menulis $3\\cos(2x^2 + 1)$ sahaja dan terlupa mendarab terbitan ungkapan dalaman $\\frac{du}{dx} = 4x$.',
            'Membezakan bahagian dalam fungsi $\\cos$ juga menjadi $3\\cos(4x)$ bukannya mengekalkan sudut asal $(2x^2 + 1)$.',
            'Menganggap pekali malar $3$ di hadapan menjadi $0$ semasa membezakan $3\\sin u$.'
          ],
          en: [
            'Writing $3\\cos(2x^2 + 1)$ and forgetting to multiply by the inner derivative $\\frac{du}{dx} = 4x$.',
            'Differentiating inside the trig argument too as $3\\cos(4x)$ instead of keeping $(2x^2 + 1)$.',
            'Treating the leading multiplier $3$ as an additive constant that differentiates to $0$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Kenal pasti ungkapan dalaman $u = 2x^2 + 1$, supaya $y = 3\\sin u$.',
            en: 'Identify the inner function $u = 2x^2 + 1$, so $y = 3\\sin u$.',
            why: { bm: 'Memecahkan fungsi gubahan kepada lapisan luar ($3\\sin u$) dan dalam ($2x^2 + 1$) mengelakkan kesilapan.', en: 'Splitting the composite function into outer ($3\\sin u$) and inner ($2x^2 + 1$) layers prevents errors.' }
          },
          {
            badge: 'K1',
            bm: 'Bezakan secara berasingan: $\\frac{du}{dx} = 4x$ dan $\\frac{dy}{du} = 3\\cos u$.',
            en: 'Differentiate separately: $\\frac{du}{dx} = 4x$ and $\\frac{dy}{du} = 3\\cos u$.',
            why: { bm: 'Pemalar pendarab $3$ kekal di depan semasa membezakan $\\sin u$.', en: 'Constant multiplier $3$ stays in front when differentiating $\\sin u$.' }
          },
          {
            badge: 'N1',
            bm: 'Petua Rantai: $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = (3\\cos u)(4x) = 12x\\cos(2x^2 + 1)$.',
            en: 'Chain Rule: $\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx} = (3\\cos u)(4x) = 12x\\cos(2x^2 + 1)$.',
            why: { bm: 'Darab $3 \\times 4x = 12x$ dan gantikan balik $u = 2x^2 + 1$ ke dalam sudut $\\cos$.', en: 'Multiply $3 \\times 4x = 12x$ and substitute $u = 2x^2 + 1$ back inside $\\cos$.' }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 3: PENGAMIRAN (10 SOALAN)
    // =========================================================================
    'f5-c3': [
      {
        code: '3.1', marks: 3,
        topic: { bm: 'Kamiran Tak Tentu Ungkapan Linear Berkuasa', en: 'Indefinite Integral of Linear Power $(ax+b)^n$' },
        q: {
          bm: 'Cari kamiran tak tentu $\\int (3x - 2)^4\\,dx$. [3m]',
          en: 'Find the indefinite integral $\\int (3x - 2)^4\\,dx$. [3m]'
        },
        mistakes: {
          bm: [
            'Lupa membahagikan dengan pekali dalaman $a = 3$ lalu menulis $\\frac{(3x - 2)^5}{5} + c$.',
            'Mendarab dengan $3$ seperti pembezaan bukannya membahagi dengan $3$.',
            'Tertinggal pemalar pengamiran $+ c$ bagi kamiran tak tentu!'
          ],
          en: [
            'Forgetting to divide by the inner coefficient $a = 3$, leaving $\\frac{(3x - 2)^5}{5} + c$.',
            'Multiplying by $3$ (like differentiation) instead of dividing by $3$.',
            'Omitting the constant of integration $+ c$ on an indefinite integral!'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Kenal pasti $a = 3, b = -2, n = 4$ untuk rumus $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{a(n + 1)} + c$.',
            en: 'Identify $a = 3, b = -2, n = 4$ in $\\int (ax + b)^n\\,dx = \\frac{(ax + b)^{n+1}}{a(n + 1)} + c$.',
            why: { bm: 'Rumus ini hanya sah apabila ungkapan di dalam kurungan ialah linear ($ax + b$).', en: 'This shortcut formula works specifically when the bracket inside is linear ($ax + b$).' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan ke dalam rumus: $\\frac{(3x - 2)^{4+1}}{3(4 + 1)} + c = \\frac{(3x - 2)^5}{3 \\times 5} + c$.',
            en: 'Substitute into formula: $\\frac{(3x - 2)^{4+1}}{3(4 + 1)} + c = \\frac{(3x - 2)^5}{3 \\times 5} + c$.',
            why: { bm: 'Tambah kuasa $+1$ menjadi $5$, dan wajib bahagi dengan kedua-dua kuasa baru $5$ dan pekali $x$ ($a = 3$).', en: 'Increase power by $1$ to $5$, and divide by both the new power $5$ and coefficient of $x$ ($a = 3$).' }
          },
          {
            badge: 'N1',
            bm: '$\\frac{(3x - 2)^5}{15} + c$.',
            en: '$\\frac{(3x - 2)^5}{15} + c$.',
            why: { bm: 'Permudahkan $3 \\times 5 = 15$ dan pastikan $+ c$ kekal ditulis.', en: 'Simplify $3 \\times 5 = 15$ and ensure $+ c$ is included.' }
          }
        ]
      },
      {
        code: '3.2', marks: 4,
        topic: { bm: 'Mencari Persamaan Lengkung daripada Fungsi Kecerunan', en: 'Finding Curve Equation from Gradient Function' },
        q: {
          bm: 'Fungsi kecerunan suatu lengkung diberi oleh $\\frac{dy}{dx} = 4x - 3$. Jika lengkung itu melalui titik $P(2, 5)$, cari persamaan lengkung tersebut. [4m]',
          en: 'A curve has gradient function $\\frac{dy}{dx} = 4x - 3$ and passes through $P(2, 5)$. Find the equation of the curve. [4m]'
        },
        mistakes: {
          bm: [
            'Tidak meletakkan $+ c$ selepas mengamirkan $\\frac{dy}{dx}$, lalu menulis $y = 2x^2 - 3x$.',
            'Tertukar nilai $x$ dan $y$ semasa menggantikan $P(2, 5)$ (masukkan $x = 5, y = 2$).',
            'Mengamirkan pemalar $-3$ menjadi $0$ bukannya $-3x$.'
          ],
          en: [
            'Omitting $+ c$ after integrating $\\frac{dy}{dx}$, leaving $y = 2x^2 - 3x$.',
            'Swapping $x$ and $y$ when substituting $P(2, 5)$ (plugging in $x = 5, y = 2$).',
            'Integrating constant $-3$ to $0$ instead of $-3x$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Kamirkan fungsi kecerunan: $y = \\int (4x - 3)\\,dx = \\frac{4x^2}{2} - 3x + c = 2x^2 - 3x + c$.',
            en: 'Integrate gradient function: $y = \\int (4x - 3)\\,dx = \\frac{4x^2}{2} - 3x + c = 2x^2 - 3x + c$.',
            why: { bm: 'Pengamiran mengundurkan $\\frac{dy}{dx}$ kembali kepada $y$, dan $+ c$ mewakili pemalar yang hilang semasa pembezaan.', en: 'Integration rewinds $\\frac{dy}{dx}$ back to $y$, with $+ c$ restoring any lost constant.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan titik $P(2, 5)$ ($x = 2, y = 5$): $5 = 2(2)^2 - 3(2) + c$.',
            en: 'Substitute $P(2, 5)$ ($x = 2, y = 5$): $5 = 2(2)^2 - 3(2) + c$.',
            why: { bm: 'Oleh sebab lengkung melalui $P(2, 5)$, pasangan $(2, 5)$ mesti memenuhi persamaan lengkung.', en: 'Since the curve passes through $P(2, 5)$, $(2, 5)$ must satisfy the curve equation.' }
          },
          {
            badge: 'K1',
            bm: 'Permudahkan untuk mencari $c$: $5 = 8 - 6 + c \\implies 5 = 2 + c \\implies c = 5 - 2 = 3$.',
            en: 'Simplify to solve for $c$: $5 = 8 - 6 + c \\implies 5 = 2 + c \\implies c = 5 - 2 = 3$.',
            why: { bm: 'Kira $2(4) = 8$ dan $3(2) = 6$, kemudian tolak $2$ daripada kedua-dua belah.', en: 'Compute $2(4) = 8$ and $3(2) = 6$, then subtract $2$ from both sides.' }
          },
          {
            badge: 'N1',
            bm: '$y = 2x^2 - 3x + 3$.',
            en: '$y = 2x^2 - 3x + 3$.',
            why: { bm: 'Tulis semula persamaan lengkung penuh dengan nilai $c = 3$ yang telah ditemui.', en: 'Write the complete curve equation with $c = 3$ substituted back.' }
          }
        ]
      },
      {
        code: '3.3', marks: 4,
        topic: { bm: 'Luas Rantau di Bawah Lengkung dengan Paksi-$x$', en: 'Area Bounded by a Curve and the $x$-Axis' },
        q: {
          bm: 'Hitung luas rantau yang dibatasi oleh lengkung $y = 6x - x^2$ dan paksi-$x$. [4m]',
          en: 'Calculate the area of the region bounded by the curve $y = 6x - x^2$ and the $x$-axis. [4m]'
        },
        mistakes: {
          bm: [
            'Gagal mencari had pintasan-$x$ terlebih dahulu dengan menyelesaikan $6x - x^2 = 0$.',
            'Membezakan $6x - x^2$ bukannya mengamirkan.',
            'Kesilapan kiraan pecahan: menulis $\\frac{6^3}{3} = 36$ bukannya $\\frac{216}{3} = 72$.'
          ],
          en: [
            'Failing to find the $x$-intercepts $x = 0$ and $x = 6$ by solving $6x - x^2 = 0$ first.',
            'Differentiating $6x - x^2$ instead of integrating.',
            'Arithmetic slip: computing $\\frac{6^3}{3} = 36$ instead of $\\frac{216}{3} = 72$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari pintasan-$x$ ($y = 0$): $6x - x^2 = 0 \\implies x(6 - x) = 0 \\implies x = 0,\\; 6$.',
            en: 'Find $x$-intercepts ($y = 0$): $6x - x^2 = 0 \\implies x(6 - x) = 0 \\implies x = 0,\\; 6$.',
            why: { bm: 'Paksi-$x$ mempunyai persamaan $y = 0$, jadi penyelesaian $y = 0$ memberi had kiri dan kanan rantau.', en: 'The $x$-axis is $y = 0$, so solving $y = 0$ gives the left and right limits of the region.' }
          },
          {
            badge: 'K1',
            bm: 'Kamirkan dari $0$ ke $6$: $\\text{Luas} = \\int_0^6 (6x - x^2)\\,dx = \\left[\\frac{6x^2}{2} - \\frac{x^3}{3}\\right]_0^6 = \\left[3x^2 - \\frac{x^3}{3}\\right]_0^6$.',
            en: 'Integrate from $0$ to $6$: $\\text{Area} = \\int_0^6 (6x - x^2)\\,dx = \\left[\\frac{6x^2}{2} - \\frac{x^3}{3}\\right]_0^6 = \\left[3x^2 - \\frac{x^3}{3}\\right]_0^6$.',
            why: { bm: 'Permudahkan $\\frac{6}{2} = 3$ dahulu sebelum menggantikan had.', en: 'Simplify $\\frac{6}{2} = 3$ first before substituting limits.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan had atas dan bawah: $\\left(3(6)^2 - \\frac{6^3}{3}\\right) - (0 - 0) = \\left(3(36) - \\frac{216}{3}\\right) - 0 = 108 - 72$.',
            en: 'Substitute upper and lower limits: $\\left(3(6)^2 - \\frac{6^3}{3}\\right) - (0 - 0) = \\left(3(36) - \\frac{216}{3}\\right) - 0 = 108 - 72$.',
            why: { bm: 'Kira $6^2 = 36$ dan $6^3 = 216$ dengan cermat ($216 \\div 3 = 72$).', en: 'Evaluate $6^2 = 36$ and $6^3 = 216$ carefully ($216 \\div 3 = 72$).' }
          },
          {
            badge: 'N1',
            bm: '$36\\text{ unit}^2$.',
            en: '$36\\text{ unit}^2$.',
            why: { bm: 'Nilai positif kerana lengkung $y = 6x - x^2$ berada di atas paksi-$x$ antara $0$ dan $6$.', en: 'Positive value because $y = 6x - x^2$ lies above the $x$-axis on $[0, 6]$.' }
          }
        ]
      },
      {
        code: '3.4', marks: 4,
        topic: { bm: 'Luas Rantau Bersempadan Paksi-$y$ ($\\int x\\,dy$)', en: 'Area Bounded by the $y$-Axis ($\\int x\\,dy$)' },
        q: {
          bm: 'Cari luas rantau yang dibatasi oleh lengkung $x = y^2 + 1$, paksi-$y$, garis $y = 1$, dan garis $y = 3$. [4m]',
          en: 'Find the area bounded by the curve $x = y^2 + 1$, the $y$-axis, $y = 1$, and $y = 3$. [4m]'
        },
        mistakes: {
          bm: [
            'Cuba menulis $\\int_1^3 (y^2 + 1)\\,dx$ sedangkan sempadan ialah paksi-$y$ ($y = 1$ ke $y = 3$), sepatutnya $\\int_1^3 x\\,dy$.',
            'Mengamirkan pemalar $1$ menjadi $0$ bukannya $y$.',
            'Kesilapan tanda apabila menolak had bawah: menulis $12 - \\frac{1}{3} + 1$ bukannya $12 - \\left(\\frac{1}{3} + 1\\right)$.'
          ],
          en: [
            'Writing $\\int_1^3 (y^2 + 1)\\,dx$ when the boundary is the $y$-axis ($y = 1$ to $y = 3$), which requires $\\int_1^3 x\\,dy$.',
            'Integrating the constant $1$ to $0$ instead of $y$.',
            'Sign error subtracting lower limit: writing $12 - \\frac{1}{3} + 1$ instead of $12 - \\left(\\frac{1}{3} + 1\\right)$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Rantau bersandar pada paksi-$y$ dari $y = 1$ ke $y = 3$, maka gunakan $\\text{Luas} = \\int_1^3 x\\,dy = \\int_1^3 (y^2 + 1)\\,dy$.',
            en: 'The region rests against the $y$-axis from $y = 1$ to $y = 3$, so use $\\text{Area} = \\int_1^3 x\\,dy = \\int_1^3 (y^2 + 1)\\,dy$.',
            why: { bm: 'Apabila sempadan ialah paksi-$y$ dan had diberi dalam $y$, kamirkan $x$ terhadap $dy$.', en: 'When bounded by the $y$-axis with $y$-limits, integrate $x$ with respect to $dy$.' }
          },
          {
            badge: 'K1',
            bm: 'Cari antiterbitan terhadap $y$: $\\left[\\frac{y^3}{3} + y\\right]_1^3$.',
            en: 'Find the antiderivative w.r.t. $y$: $\\left[\\frac{y^3}{3} + y\\right]_1^3$.',
            why: { bm: 'Kamiran bagi $y^2$ ialah $\\frac{y^3}{3}$ dan kamiran bagi $1$ terhadap $y$ ialah $y$.', en: '$y^2$ integrates to $\\frac{y^3}{3}$ and $1$ integrates w.r.t. $y$ to $y$.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan had atas dan bawah: $\\left(\\frac{3^3}{3} + 3\\right) - \\left(\\frac{1^3}{3} + 1\\right) = \\left(\\frac{27}{3} + 3\\right) - \\left(\\frac{1}{3} + 1\\right) = 12 - \\frac{4}{3}$.',
            en: 'Evaluate limits: $\\left(\\frac{3^3}{3} + 3\\right) - \\left(\\frac{1^3}{3} + 1\\right) = \\left(\\frac{27}{3} + 3\\right) - \\left(\\frac{1}{3} + 1\\right) = 12 - \\frac{4}{3}$.',
            why: { bm: 'Kurungkan seluruh had bawah $\\left(\\frac{1}{3} + 1\\right) = \\frac{4}{3}$ sebelum menolak daripada $12$.', en: 'Group the entire lower limit $\\left(\\frac{1}{3} + 1\\right) = \\frac{4}{3}$ before subtracting from $12$.' }
          },
          {
            badge: 'N1',
            bm: '$\\frac{36}{3} - \\frac{4}{3} = \\frac{32}{3}\\text{ unit}^2$ ($10.67\\text{ unit}^2$).',
            en: '$\\frac{36}{3} - \\frac{4}{3} = \\frac{32}{3}\\text{ unit}^2$ ($10.67\\text{ unit}^2$).',
            why: { bm: 'Tukar $12 = \\frac{36}{3}$ untuk penolakan pecahan tepat.', en: 'Convert $12 = \\frac{36}{3}$ for exact fraction subtraction.' }
          }
        ]
      },
      {
        code: '3.5', marks: 4,
        topic: { bm: 'Isi Padu Kisaran $360^\\circ$ Mengelilingi Paksi-$x$', en: 'Volume of Revolution $360^\\circ$ About the $x$-Axis' },
        q: {
          bm: 'Rantau yang dibatasi oleh lengkung $y = \\sqrt{2x}$, paksi-$x$, dan garis $x = 4$ dikisarkan $360^\\circ$ mengelilingi paksi-$x$. Cari isi padu janaan dalam sebutan $\\pi$. [4m]',
          en: 'The region bounded by $y = \\sqrt{2x}$, the $x$-axis, and $x = 4$ is rotated $360^\\circ$ about the $x$-axis. Find the volume generated in terms of $\\pi$. [4m]'
        },
        mistakes: {
          bm: [
            'Tertinggal faktor $\\pi$ di luar kamiran lalu memberi jawapan $16$ bukannya $16\\pi$.',
            'Terlupa mengkuasaduakan $y$ dalam rumus $V = \\pi\\int y^2\\,dx$ (mengamirkan $\\sqrt{2x}$ terus).',
            'Menulis $\\pi^2$ atau gagal mencari had bawah $x = 0$ daripada $y = 0$.'
          ],
          en: [
            'Forgetting the factor $\\pi$ outside the integral, answering $16$ instead of $16\\pi$.',
            'Integrating $y = \\sqrt{2x}$ directly instead of $y^2$ in $V = \\pi\\int y^2\\,dx$.',
            'Squaring $\\pi$ into $\\pi^2$ or failing to find the lower limit $x = 0$ from $y = 0$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Cari had bawah pada paksi-$x$ ($y = 0$): $\\sqrt{2x} = 0 \\implies x = 0$; had atas ialah $x = 4$.',
            en: 'Find lower limit on the $x$-axis ($y = 0$): $\\sqrt{2x} = 0 \\implies x = 0$; upper limit is $x = 4$.',
            why: { bm: 'Lengkung menyentuh paksi-$x$ di $x = 0$, jadi rantau bermula dari $x = 0$ hingga $x = 4$.', en: 'The curve meets the $x$-axis at $x = 0$, so the region spans from $x = 0$ to $x = 4$.' }
          },
          {
            badge: 'K1',
            bm: 'Isi padu kisaran paksi-$x$: $V = \\pi\\int_0^4 y^2\\,dx = \\pi\\int_0^4 (\\sqrt{2x})^2\\,dx = \\pi\\int_0^4 2x\\,dx$.',
            en: 'Volume about $x$-axis: $V = \\pi\\int_0^4 y^2\\,dx = \\pi\\int_0^4 (\\sqrt{2x})^2\\,dx = \\pi\\int_0^4 2x\\,dx$.',
            why: { bm: 'Mengkuasaduakan $\\sqrt{2x}$ terus menghapuskan tanda punca menjadi $2x$.', en: 'Squaring $\\sqrt{2x}$ cancels the square root cleanly to $2x$.' }
          },
          {
            badge: 'K1',
            bm: 'Kamirkan dan gantikan had: $V = \\pi\\left[\\frac{2x^2}{2}\\right]_0^4 = \\pi[x^2]_0^4 = \\pi(4^2 - 0^2)$.',
            en: 'Integrate and evaluate limits: $V = \\pi\\left[\\frac{2x^2}{2}\\right]_0^4 = \\pi[x^2]_0^4 = \\pi(4^2 - 0^2)$.',
            why: { bm: '$\\frac{2}{2} = 1$, maka tinggal $\\pi[x^2]_0^4$.', en: '$\\frac{2}{2} = 1$, leaving $\\pi[x^2]_0^4$.' }
          },
          {
            badge: 'N1',
            bm: '$16\\pi\\text{ unit}^3$.',
            en: '$16\\pi\\text{ unit}^3$.',
            why: { bm: 'Kekalkan $\\pi$ dalam jawapan akhir kerana soalan meminta "dalam sebutan $\\pi$".', en: 'Keep $\\pi$ exact as requested ("in terms of $\\pi$").' }
          }
        ]
      },
      {
        code: '3.6', marks: 5,
        topic: { bm: 'Luas Rantau di Antara Garis Lurus dan Lengkung', en: 'Area Enclosed Between a Line and a Curve' },
        q: {
          bm: 'Cari luas rantau tertutup yang dibatasi oleh lengkung $y = x^2$ dan garis lurus $y = 2x$. [5m]',
          en: 'Find the area of the closed region bounded by the curve $y = x^2$ and the line $y = 2x$. [5m]'
        },
        mistakes: {
          bm: [
            'Membahagi persamaan $x^2 = 2x$ dengan $x$ lalu kehilangan akar $x = 0$.',
            'Menolak terbalik ($x^2 - 2x$) tanpa mengambil nilai mutlak lalu mendapat luas negatif $-\\frac{4}{3}$.',
            'Menggunakan rumus isi padu $\\int (2x - x^2)^2\\,dx$ untuk soalan luas.'
          ],
          en: [
            'Dividing $x^2 = 2x$ by $x$ and losing the intersection root $x = 0$.',
            'Subtracting bottom minus top ($x^2 - 2x$) without modulus, getting a negative area $-\\frac{4}{3}$.',
            'Using the volume squaring formula $\\int (2x - x^2)^2\\,dx$ instead of area.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Cari titik persilangan ($y_1 = y_2$): $x^2 = 2x \\implies x^2 - 2x = 0 \\implies x(x - 2) = 0 \\implies x = 0,\\; 2$.',
            en: 'Find intersections ($y_1 = y_2$): $x^2 = 2x \\implies x^2 - 2x = 0 \\implies x(x - 2) = 0 \\implies x = 0,\\; 2$.',
            why: { bm: 'Faktorkan $x$ (jangan bahagi dengan $x$!) untuk mendapat kedua-dua had persilangan.', en: 'Factor out $x$ (never divide by $x$!) to capture both intersection limits.' }
          },
          {
            badge: 'P1',
            bm: 'Semak graf di atas pada $x = 1$: garis $y = 2(1) = 2 >$ lengkung $y = 1^2 = 1$, maka $\\text{Luas} = \\int_0^2 (2x - x^2)\\,dx$.',
            en: 'Check top graph at $x = 1$: line $y = 2(1) = 2 >$ curve $y = 1^2 = 1$, so $\\text{Area} = \\int_0^2 (2x - x^2)\\,dx$.',
            why: { bm: 'Sentiasa tolak (Graf Atas $-$ Graf Bawah) supaya luas sentiasa positif.', en: 'Always subtract (Top Graph $-$ Bottom Graph) so the area stays positive.' }
          },
          {
            badge: 'K1',
            bm: 'Kamir dan gantikan had: $\\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = \\left(2^2 - \\frac{2^3}{3}\\right) - (0 - 0) = 4 - \\frac{8}{3}$.',
            en: 'Integrate and substitute limits: $\\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = \\left(2^2 - \\frac{2^3}{3}\\right) - (0 - 0) = 4 - \\frac{8}{3}$.',
            why: { bm: 'Kamiran $2x$ ialah $x^2$, dan kamiran $x^2$ ialah $\\frac{x^3}{3}$.', en: '$2x$ integrates to $x^2$, and $x^2$ integrates to $\\frac{x^3}{3}$.' }
          },
          {
            badge: 'N1',
            bm: '$\\frac{12}{3} - \\frac{8}{3} = \\frac{4}{3}\\text{ unit}^2$.',
            en: '$\\frac{12}{3} - \\frac{8}{3} = \\frac{4}{3}\\text{ unit}^2$.',
            why: { bm: 'Tukar $4 = \\frac{12}{3}$ untuk penolakan pecahan tepat.', en: 'Rewrite $4 = \\frac{12}{3}$ for exact fraction subtraction.' }
          }
        ]
      },
      {
        code: '3.7', marks: 4,
        topic: { bm: 'Isi Padu Kisaran $360^\\circ$ Mengelilingi Paksi-$y$', en: 'Volume of Revolution $360^\\circ$ About the $y$-Axis' },
        q: {
          bm: 'Rantau pada sukuan pertama yang dibatasi oleh $y = x^2$, paksi-$y$, dan garis $y = 4$ dikisarkan $360^\\circ$ mengelilingi paksi-$y$. Cari isi padu janaan dalam sebutan $\\pi$. [4m]',
          en: 'The first-quadrant region bounded by $y = x^2$, the $y$-axis, and $y = 4$ is rotated $360^\\circ$ about the $y$-axis. Find the volume in terms of $\\pi$. [4m]'
        },
        mistakes: {
          bm: [
            'Mengamirkan $\\pi\\int_0^4 (x^2)^2\\,dy = \\pi\\int_0^4 y^2\\,dy$ sedangkan persamaan sudah memberi $x^2 = y$ secara terus!',
            'Mengamirkan terhadap $dx$ walaupun putaran mengelilingi paksi-$y$.',
            'Tertinggal pemalar $\\pi$ pada jawapan akhir.'
          ],
          en: [
            'Writing $\\pi\\int_0^4 (x^2)^2\\,dy = \\pi\\int_0^4 y^2\\,dy$ instead of substituting $x^2 = y$ directly into $\\pi\\int_0^4 x^2\\,dy$!',
            'Integrating with respect to $x$ even though rotation is about the $y$-axis.',
            'Dropping $\\pi$ from the final answer.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Had pada paksi-$y$: pada $x = 0$, $y = 0^2 = 0$, hingga $y = 4$. Daripada $y = x^2$, terus dapat $x^2 = y$.',
            en: 'Limits on the $y$-axis: at $x = 0$, $y = 0^2 = 0$, up to $y = 4$. From $y = x^2$, we directly have $x^2 = y$.',
            why: { bm: 'Rumus isi padu paksi-$y$ memerlukan $x^2$ dalam sebutan $y$; tidak perlu cari $\\sqrt{y}$ kemudian kuasaduakan semula!', en: 'Volume about the $y$-axis uses $x^2$ in terms of $y$; no need to take $\\sqrt{y}$ and square back!' }
          },
          {
            badge: 'K1',
            bm: 'Isi padu paksi-$y$: $V = \\pi\\int_0^4 x^2\\,dy = \\pi\\int_0^4 y\\,dy$.',
            en: 'Volume about $y$-axis: $V = \\pi\\int_0^4 x^2\\,dy = \\pi\\int_0^4 y\\,dy$.',
            why: { bm: 'Gantikan $x^2 = y$ terus ke dalam $\\pi\\int x^2\\,dy$.', en: 'Substitute $x^2 = y$ directly into $\\pi\\int x^2\\,dy$.' }
          },
          {
            badge: 'K1',
            bm: 'Kamirkan dan gantikan had: $V = \\pi\\left[\\frac{y^2}{2}\\right]_0^4 = \\pi\\left(\\frac{4^2}{2} - \\frac{0^2}{2}\\right) = \\pi\\left(\\frac{16}{2}\\right)$.',
            en: 'Integrate and substitute limits: $V = \\pi\\left[\\frac{y^2}{2}\\right]_0^4 = \\pi\\left(\\frac{4^2}{2} - \\frac{0^2}{2}\\right) = \\pi\\left(\\frac{16}{2}\\right)$.',
            why: { bm: 'Kamiran bagi $y$ ialah $\\frac{y^2}{2}$; $4^2 = 16$ dibahagi $2$.', en: '$y$ integrates to $\\frac{y^2}{2}$; evaluate $4^2 = 16$ divided by $2$.' }
          },
          {
            badge: 'N1',
            bm: '$8\\pi\\text{ unit}^3$.',
            en: '$8\\pi\\text{ unit}^3$.',
            why: { bm: 'Permudahkan $\\frac{16}{2}\\pi = 8\\pi$ dalam sebutan $\\pi$.', en: 'Simplify $\\frac{16}{2}\\pi = 8\\pi$ in terms of $\\pi$.' }
          }
        ]
      },
      {
        code: '3.8', marks: 3,
        topic: { bm: 'Sifat Operasi & Gabungan Had Kamiran Tentu', en: 'Additivity & Linearity Properties of Definite Integrals' },
        q: {
          bm: 'Diberi $\\int_1^5 f(x)\\,dx = 8$ dan $\\int_1^3 f(x)\\,dx = 3$, cari nilai bagi $\\int_3^5 [2f(x) - 1]\\,dx$. [3m]',
          en: 'Given $\\int_1^5 f(x)\\,dx = 8$ and $\\int_1^3 f(x)\\,dx = 3$, evaluate $\\int_3^5 [2f(x) - 1]\\,dx$. [3m]'
        },
        mistakes: {
          bm: [
            'Menolak nombor $1$ begitu sahaja ($2(5) - 1 = 9$) tanpa mengamirkan pemalar $1$ pada selang $[3, 5]$ iaitu $[x]_3^5 = 2$!',
            'Menambah $8 + 3 = 11$ bukannya menolak $8 - 3 = 5$ untuk selang $[3, 5]$.',
            'Terlupa mendarab $5$ dengan pekali $2$ di hadapan $f(x)$.'
          ],
          en: [
            'Subtracting $1$ directly ($10 - 1 = 9$) instead of integrating $\\int_3^5 1\\,dx = 5 - 3 = 2$!',
            'Adding $8 + 3 = 11$ instead of subtracting $8 - 3 = 5$ for the interval $[3, 5]$.',
            'Forgetting to multiply $5$ by the leading coefficient $2$ in front of $f(x)$.'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Pecahkan had: $\\int_1^5 f(x)\\,dx = \\int_1^3 f(x)\\,dx + \\int_3^5 f(x)\\,dx \\implies 8 = 3 + \\int_3^5 f(x)\\,dx \\implies \\int_3^5 f(x)\\,dx = 8 - 3 = 5$.',
            en: 'Split limits: $\\int_1^5 f(x)\\,dx = \\int_1^3 f(x)\\,dx + \\int_3^5 f(x)\\,dx \\implies 8 = 3 + \\int_3^5 f(x)\\,dx \\implies \\int_3^5 f(x)\\,dx = 8 - 3 = 5$.',
            why: { bm: 'Jumlah luas dari $1$ ke $5$ ialah bahagian $1 \\to 3$ ditambah bahagian $3 \\to 5$.', en: 'Total integral from $1$ to $5$ equals the $1 \\to 3$ part plus the $3 \\to 5$ part.' }
          },
          {
            badge: 'K1',
            bm: 'Asingkan sebutan secara linear: $\\int_3^5 [2f(x) - 1]\\,dx = 2\\int_3^5 f(x)\\,dx - \\int_3^5 1\\,dx$.',
            en: 'Apply linearity: $\\int_3^5 [2f(x) - 1]\\,dx = 2\\int_3^5 f(x)\\,dx - \\int_3^5 1\\,dx$.',
            why: { bm: 'Kedua-dua $2f(x)$ dan pemalar $-1$ berada di dalam tanda kamiran dan mesti dikamirkan.', en: 'Both $2f(x)$ and the constant $-1$ sit inside the integral and must be integrated.' }
          },
          {
            badge: 'K1',
            bm: 'Nilaikan kedua-dua bahagian: $2(5) - [x]_3^5 = 10 - (5 - 3) = 10 - 2$.',
            en: 'Evaluate both parts: $2(5) - [x]_3^5 = 10 - (5 - 3) = 10 - 2$.',
            why: { bm: 'Kamiran bagi $1$ ialah $x$, dinilai dari $3$ ke $5$ memberi $5 - 3 = 2$.', en: 'The integral of $1$ is $x$, evaluated from $3$ to $5$ to give $5 - 3 = 2$.' }
          },
          {
            badge: 'N1',
            bm: '$8$.',
            en: '$8$.',
            why: { bm: '$10 - 2 = 8$.', en: '$10 - 2 = 8$.' }
          }
        ]
      },
      {
        code: '3.9', marks: 3,
        topic: { bm: 'Pengayaan Kamiran Salingan & Logaritma Asli', en: 'Reciprocal Integral Enrichment' },
        q: {
          bm: 'Diberi $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$ bagi $x > 0$, nilaikan $\\int_1^4 \\frac{3}{x}\\,dx$ dalam sebutan $\\ln$. [3m]',
          en: 'Given $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$ for $x > 0$, evaluate $\\int_1^4 \\frac{3}{x}\\,dx$ in terms of $\\ln$. [3m]'
        },
        mistakes: {
          bm: [
            'Cuba menggunakan petua kuasa pada $3x^{-1}$ lalu mendapat pembahagian sifar $\\frac{3x^0}{0}$.',
            'Menyangka $\\ln 1 = 1$ bukannya $0$ lalu memberi jawapan $3\\ln 4 - 3$.',
            'Menulis $\\ln 4 - \\ln 1 = \\ln(4 - 1) = \\ln 3$.'
          ],
          en: [
            'Applying the power rule to $3x^{-1}$ and hitting division by zero ($\\frac{3x^0}{0}$).',
            'Thinking $\\ln 1 = 1$ instead of $0$, giving $3\\ln 4 - 3$.',
            'Writing $\\ln 4 - \\ln 1 = \\ln(4 - 1) = \\ln 3$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Songsangkan pembezaan yang diberi: oleh sebab $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$, maka $\\int \\frac{1}{x}\\,dx = \\ln x$ ($x > 0$).',
            en: 'Reverse the given derivative: since $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$, we have $\\int \\frac{1}{x}\\,dx = \\ln x$ ($x > 0$).',
            why: { bm: 'Petua kuasa tidak sah bagi $n = -1$, jadi gunakan hubungan songsangan pembezaan yang diberi.', en: 'Power rule fails for $n = -1$, so directly reverse the given derivative.' }
          },
          {
            badge: 'K1',
            bm: 'Keluarkan pemalar $3$: $\\int_1^4 \\frac{3}{x}\\,dx = 3\\int_1^4 \\frac{1}{x}\\,dx = [3\\ln x]_1^4$.',
            en: 'Factor out constant $3$: $\\int_1^4 \\frac{3}{x}\\,dx = 3\\int_1^4 \\frac{1}{x}\\,dx = [3\\ln x]_1^4$.',
            why: { bm: 'Pekali pemalar $3$ boleh dibawa keluar dari tanda kamiran.', en: 'Constant multiplier $3$ factors cleanly outside the integral.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan had atas dan bawah: $3\\ln 4 - 3\\ln 1 = 3\\ln 4 - 3(0)$.',
            en: 'Substitute limits: $3\\ln 4 - 3\\ln 1 = 3\\ln 4 - 3(0)$.',
            why: { bm: 'Ingat hukum logaritma: $\\ln 1 = \\log_e 1 = 0$.', en: 'Recall logarithm law: $\\ln 1 = \\log_e 1 = 0$.' }
          },
          {
            badge: 'N1',
            bm: '$3\\ln 4$ (atau setara dengan $6\\ln 2$ atau $\\ln 64$).',
            en: '$3\\ln 4$ (equivalently $6\\ln 2$ or $\\ln 64$).',
            why: { bm: '$3\\ln 4 = 3\\ln(2^2) = 6\\ln 2 = \\ln(4^3) = \\ln 64$.', en: '$3\\ln 4 = 3\\ln(2^2) = 6\\ln 2 = \\ln(4^3) = \\ln 64$.' }
          }
        ]
      },
      {
        code: '3.10', marks: 4,
        topic: { bm: 'Luas Rantau di Bawah Paksi-$x$ (Nilai Mutlak)', en: 'Area Below the $x$-Axis (Absolute Value)' },
        q: {
          bm: 'Hitung luas rantau yang dibatasi oleh lengkung $y = x^2 - 4$, paksi-$x$, garis $x = 0$, dan garis $x = 2$. [4m]',
          en: 'Calculate the area bounded by $y = x^2 - 4$, the $x$-axis, $x = 0$, and $x = 2$. [4m]'
        },
        mistakes: {
          bm: [
            'Meninggalkan jawapan akhir luas sebagai nilai negatif $-\\frac{16}{3}$ kerana lengkung berada di bawah paksi-$x$.',
            'Mengamirkan $x^2 - 4$ menjadi $\\frac{x^3}{3} - 4$ tanpa meletakkan $x$ pada $-4x$.',
            'Kesilapan tanda apabila menolak pecahan: $\\frac{8}{3} - 8$ disangka positif.'
          ],
          en: [
            'Leaving the final area negative ($-\\frac{16}{3}$) because the curve lies below the $x$-axis.',
            'Integrating $x^2 - 4$ as $\\frac{x^3}{3} - 4$ instead of $\\frac{x^3}{3} - 4x$.',
            'Sign error subtracting fractions: treating $\\frac{8}{3} - 8$ as positive.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Semak tanda pada selang $[0, 2]$: $x^2 - 4 = 0 \\implies x = \\pm 2$ (tiada silangan di dalam $(0, 2)$); pada $x = 1$, $y = 1 - 4 = -3 < 0$ (bawah paksi-$x$).',
            en: 'Check sign on $[0, 2]$: $x^2 - 4 = 0 \\implies x = \\pm 2$ (no crossing inside $(0, 2)$); at $x = 1$, $y = 1 - 4 = -3 < 0$ (below $x$-axis).',
            why: { bm: 'Menguji satu titik memastikan graf tidak melintasi paksi-$x$ dan memberitahu kita nilai kamiran akan negatif.', en: 'Testing one point confirms no crossing inside $(0, 2)$ and warns that the integral will be negative.' }
          },
          {
            badge: 'K1',
            bm: 'Kamirkan dari $0$ ke $2$: $\\int_0^2 (x^2 - 4)\\,dx = \\left[\\frac{x^3}{3} - 4x\\right]_0^2$.',
            en: 'Integrate from $0$ to $2$: $\\int_0^2 (x^2 - 4)\\,dx = \\left[\\frac{x^3}{3} - 4x\\right]_0^2$.',
            why: { bm: 'Kamiran bagi pemalar $-4$ terhadap $x$ ialah $-4x$.', en: 'Constant $-4$ integrates w.r.t. $x$ to $-4x$.' }
          },
          {
            badge: 'K1',
            bm: 'Gantikan had: $\\left(\\frac{2^3}{3} - 4(2)\\right) - (0 - 0) = \\frac{8}{3} - 8 = \\frac{8}{3} - \\frac{24}{3} = -\\frac{16}{3}$.',
            en: 'Evaluate limits: $\\left(\\frac{2^3}{3} - 4(2)\\right) - (0 - 0) = \\frac{8}{3} - 8 = \\frac{8}{3} - \\frac{24}{3} = -\\frac{16}{3}$.',
            why: { bm: 'Tukar $8 = \\frac{24}{3}$ supaya penolakan $\\frac{8 - 24}{3} = -\\frac{16}{3}$ jelas.', en: 'Rewrite $8 = \\frac{24}{3}$ so $\\frac{8 - 24}{3} = -\\frac{16}{3}$ is clear.' }
          },
          {
            badge: 'N1',
            bm: 'Ambil modulus kerana luas $\\ge 0$: $\\text{Luas} = \\left|-\\frac{16}{3}\\right| = \\frac{16}{3}\\text{ unit}^2$ ($5.333\\text{ unit}^2$).',
            en: 'Take modulus since area $\\ge 0$: $\\text{Area} = \\left|-\\frac{16}{3}\\right| = \\frac{16}{3}\\text{ unit}^2$ ($5.333\\text{ unit}^2$).',
            why: { bm: 'Tanda negatif hanya menunjukkan rantau terletak di bawah paksi-$x$; luas fizikal sentiasa positif.', en: 'The negative sign only shows the region lies below the $x$-axis; physical area is always positive.' }
          }
        ]
      }
    ],

    // =========================================================================
    // TINGKATAN 5 BAB 4: PILIH ATUR DAN GABUNGAN (10 SOALAN)
    // =========================================================================
    'f5-c4': [
      {
        code: '4.1', marks: 4,
        topic: { bm: 'Pilih Atur dengan Syarat Duduk Bersebelahan', en: 'Permutations with Adjacent / Grouped Objects' },
        q: {
          bm: 'Cari bilangan cara menyusun $4$ orang murid lelaki dan $2$ orang murid perempuan dalam satu barisan jika kedua-dua murid perempuan mesti duduk bersebelahan. [4m]',
          en: 'Find the number of ways to arrange $4$ boys and $2$ girls in a row if the $2$ girls must sit next to each other. [4m]'
        },
        mistakes: {
          bm: [
            'Mengikat $2$ perempuan sebagai $1$ blok lalu mengira $5! = 120$ sahaja tanpa mendarab susunan dalaman $2!$.',
            'Menambah $5! + 2! = 122$ bukannya mendarab $5! \\times 2!$.',
            'Mengira $4! \\times 2! = 48$ kerana terlupa mengira blok ikatan sebagai $1$ unit ($4 + 1 = 5$ unit).'
          ],
          en: [
            'Computing $5! = 120$ for the grouped block while forgetting the internal $2!$ swap of the two girls.',
            'Adding $5! + 2! = 122$ instead of multiplying $5! \\times 2!$.',
            'Computing $4! \\times 2! = 48$ by forgetting to count the tied block as $1$ outer unit ($4 + 1 = 5$ units).'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Ikat $2$ murid perempuan menjadi $1$ blok $(P_1 P_2)$: jumlah unit luar $= 4\\text{ lelaki} + 1\\text{ blok} = 5\\text{ unit}$.',
            en: 'Tie the $2$ girls into $1$ super-block $(G_1 G_2)$: total outer units $= 4\\text{ boys} + 1\\text{ block} = 5\\text{ units}$.',
            why: { bm: 'Mengikat mereka jadi $1$ guni memastikan mereka sentiasa bergerak dan duduk bersebelahan.', en: 'Tying them into $1$ bundle guarantees they always stay adjacent.' }
          },
          {
            badge: 'K1',
            bm: 'Susun kesemua $5$ unit dalam satu barisan: $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ cara.',
            en: 'Arrange the $5$ outer units in a row: $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ ways.',
            why: { bm: 'Terdapat $5$ tempat kosong untuk menyusun $4$ murid lelaki dan $1$ blok perempuan.', en: 'There are $5$ positions to arrange the $4$ boys and $1$ girl-block.' }
          },
          {
            badge: 'K1',
            bm: 'Susun $2$ perempuan di dalam blok itu sendiri ($P_1 P_2$ atau $P_2 P_1$): $2! = 2 \\times 1 = 2$ cara.',
            en: 'Arrange the $2$ girls internally inside their block ($G_1 G_2$ or $G_2 G_1$): $2! = 2 \\times 1 = 2$ ways.',
            why: { bm: 'Kedua-dua murid perempuan ialah individu berbeza dan boleh bertukar tempat kiri-kanan.', en: 'The $2$ girls are distinct individuals and can swap left-right within their block.' }
          },
          {
            badge: 'N1',
            bm: 'Darab kedua-dua peringkat bebas: $120 \\times 2 = 240$ cara.',
            en: 'Multiply both independent stages: $120 \\times 2 = 240$ ways.',
            why: { bm: 'Kedua-dua pilihan berlaku serentak ("DAN"), maka guna Petua Pendaraban.', en: 'Both stages occur together ("AND"), so apply the Multiplication Rule.' }
          }
        ]
      },
      {
        code: '4.2', marks: 3,
        topic: { bm: 'Pilih Atur Perkataan dengan Huruf Sama Berulang', en: 'Permutations of Letters with Identical Objects' },
        q: {
          bm: 'Cari bilangan susunan berbeza menggunakan semua huruf daripada perkataan $\\text{"KEJAYAAN"}$. [3m]',
          en: 'Find the number of distinct arrangements of all letters in the word $\\text{"KEJAYAAN"}$. [3m]'
        },
        mistakes: {
          bm: [
            'Menulis $8! = 40320$ tanpa membahagikan dengan $3!$ bagi $3$ huruf $\\text{A}$ yang sama.',
            'Menolak $8! - 3! = 40314$ bukannya membahagi dengan $3!$.',
            'Tersilap bilang jumlah huruf ($7$ bukannya $8$) atau bilangan huruf $\\text{A}$ ($2$ bukannya $3$).'
          ],
          en: [
            'Writing $8! = 40320$ without dividing by $3!$ for the $3$ identical letter $\\text{A}$\'s.',
            'Subtracting $8! - 3! = 40314$ instead of dividing by $3!$.',
            'Miscounting total letters ($7$ instead of $8$) or repeated $\\text{A}$\'s ($2$ instead of $3$).'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Bilang huruf dalam $\\text{"KEJAYAAN"}$: jumlah $n = 8$ huruf, dengan huruf $\\text{A}$ berulang $3$ kali ($\\text{K, E, J, Y, N}$ masing-masing $1$ kali).',
            en: 'Count letters in $\\text{"KEJAYAAN"}$: total $n = 8$ letters, with letter $\\text{A}$ repeated $3$ times ($\\text{K, E, J, Y, N}$ appear once each).',
            why: { bm: 'Menukar kedudukan huruf $\\text{A}$ sesama sendiri tidak menghasilkan perkataan baharu.', en: 'Swapping identical letter $\\text{A}$\'s among themselves does not create a new arrangement.' }
          },
          {
            badge: 'K1',
            bm: 'Guna rumus objek sama berulang: $\\frac{8!}{3!} = \\frac{8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3!}{3!} = \\frac{40320}{6}$.',
            en: 'Apply identical-objects formula: $\\frac{8!}{3!} = \\frac{8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3!}{3!} = \\frac{40320}{6}$.',
            why: { bm: 'Bahagi dengan $3!$ untuk membuang semua susunan bertindih daripada $3$ huruf $\\text{A}$.', en: 'Divide by $3!$ to remove all duplicate orderings of the $3$ identical $\\text{A}$\'s.' }
          },
          {
            badge: 'N1',
            bm: '$6720$ susunan berbeza.',
            en: '$6720$ distinct arrangements.',
            why: { bm: '$40320 \\div 6 = 6720$ (atau $8 \\times 7 \\times 6 \\times 5 \\times 4 = 6720$).', en: '$40320 \\div 6 = 6720$ (or $8 \\times 7 \\times 6 \\times 5 \\times 4 = 6720$).' }
          }
        ]
      },
      {
        code: '4.3', marks: 4,
        topic: { bm: 'Kod Empat Digit Genap Tanpa Ulangan', en: 'Four-Digit Even Codes Without Repetition' },
        q: {
          bm: 'Berapakah bilangan kod $4$-digit bernombor genap yang boleh dibentuk daripada digit-digit $\\{1, 2, 3, 5, 7, 8\\}$ tanpa ulangan digit? [4m]',
          en: 'How many $4$-digit even codes can be formed from digits $\\{1, 2, 3, 5, 7, 8\\}$ without repetition? [4m]'
        },
        mistakes: {
          bm: [
            'Mengisi kotak pertama dengan $6$ pilihan sebelum mengunci kotak terakhir yang bersyarat genap ($\\{2, 8\\}$).',
            'Membenarkan ulangan digit ($6 \\times 6 \\times 6 \\times 2 = 432$) sedangkan soalan menyatakan tanpa ulangan.',
            'Menyangka $1$ atau $3$ ialah nombor genap atau tertinggal digit $8$.'
          ],
          en: [
            'Filling the first slot with $6$ choices before locking the restricted even last digit ($\\{2, 8\\}$).',
            'Allowing digit repetition ($6 \\times 6 \\times 6 \\times 2 = 432$) when repetition is forbidden.',
            'Treating $1$ or $3$ as even or missing digit $8$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Lukis $4$ kotak tempat `_ _ _ _` dan kunci **digit terakhir dahulu**: digit genap dalam $\\{1, 2, 3, 5, 7, 8\\}$ ialah $\\{2, 8\\} \\implies 2$ pilihan.',
            en: 'Draw $4$ slot boxes `_ _ _ _` and lock the **last digit first**: even digits in $\\{1, 2, 3, 5, 7, 8\\}$ are $\\{2, 8\\} \\implies 2$ choices.',
            why: { bm: 'Peraturan VIP: sentiasa penuhi kotak bersyarat (genap ditentukan oleh digit terakhir) sebelum mengisi kotak lain.', en: 'VIP Rule: always lock the restricted slot (evenness depends on the last digit) before filling other slots.' }
          },
          {
            badge: 'K1',
            bm: 'Tanpa ulangan, tinggal $6 - 1 = 5$ digit bagi $3$ kotak pertama: ${}^5P_3 = 5 \\times 4 \\times 3 = 60$ cara.',
            en: 'Without repetition, $6 - 1 = 5$ digits remain for the first $3$ slots: ${}^5P_3 = 5 \\times 4 \\times 3 = 60$ ways.',
            why: { bm: 'Satu digit telah dipakai di kotak terakhir, jadi kotak pertama hingga ketiga mempunyai $5, 4, 3$ pilihan.', en: 'One digit is already used in the last slot, leaving $5, 4, 3$ choices for the first three slots.' }
          },
          {
            badge: 'K1',
            bm: 'Pendaraban kotak tempat: $5 \\times 4 \\times 3 \\times 2 = 60 \\times 2$.',
            en: 'Slot multiplication: $5 \\times 4 \\times 3 \\times 2 = 60 \\times 2$.',
            why: { bm: 'Darab pilihan semua $4$ kotak tempat untuk membentuk satu kod lengkap.', en: 'Multiply the choices across all $4$ slots to form one complete code.' }
          },
          {
            badge: 'N1',
            bm: '$120$ kod.',
            en: '$120$ codes.',
            why: { bm: '$60 \\times 2 = 120$ kod $4$-digit genap yang berbeza.', en: '$60 \\times 2 = 120$ distinct $4$-digit even codes.' }
          }
        ]
      },
      {
        code: '4.4', marks: 4,
        topic: { bm: 'Gabungan Pemilihan Jawatankuasa Bersyarat Tepat', en: 'Committee Selection with Exact Subgroup Count' },
        q: {
          bm: 'Sebuah jawatankuasa terdiri daripada $5$ orang ahli hendak dipilih daripada $6$ orang guru dan $5$ orang pengawas. Cari bilangan cara pemilihan jika jawatankuasa mesti mengandungi tepat $3$ orang guru. [4m]',
          en: 'A committee of $5$ is chosen from $6$ teachers and $5$ prefects. Find the number of ways if it must contain exactly $3$ teachers. [4m]'
        },
        mistakes: {
          bm: [
            'Menggunakan pilih atur ${}^nP_r$ sedangkan pemilihan ahli jawatankuasa biasa tidak mementingkan susunan (${}^nC_r$).',
            'Menambah ${}^6C_3 + {}^5C_2 = 30$ bukannya mendarab kedua-dua syarat yang berlaku bersama.',
            'Tertukar bilangan pemilihan kepada $3$ pengawas dan $2$ guru (${}^6C_2 \\times {}^5C_3 = 150$).'
          ],
          en: [
            'Using permutations ${}^nP_r$ when an unranked committee selection does not care about order (${}^nC_r$).',
            'Adding ${}^6C_3 + {}^5C_2 = 30$ instead of multiplying because both selections happen together.',
            'Swapping the counts to $3$ prefects and $2$ teachers (${}^6C_2 \\times {}^5C_3 = 150$).'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Jawatankuasa perlukan $5$ ahli dengan tepat $3$ guru $\\implies$ baki $5 - 3 = 2$ orang mestilah pengawas; susunan tidak penting jadi guna ${}^nC_r$.',
            en: 'Committee needs $5$ members with $3$ teachers $\\implies$ remaining $5 - 3 = 2$ must be prefects; order does not matter so use ${}^nC_r$.',
            why: { bm: 'Kenal pasti bilangan setiap kumpulan dahulu supaya jumlah ahli cukup $5$ orang.', en: 'Pin down both subgroup sizes first so the team totals $5$ members.' }
          },
          {
            badge: 'K1',
            bm: 'Pilih $3$ guru daripada $6$: ${}^6C_3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$ cara.',
            en: 'Choose $3$ teachers from $6$: ${}^6C_3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$ ways.',
            why: { bm: 'Bahagi dengan $3! = 6$ membuang pertindihan susunan kumpulan guru yang sama.', en: 'Dividing by $3! = 6$ removes duplicate orderings of the same $3$ teachers.' }
          },
          {
            badge: 'K1',
            bm: 'Pilih $2$ pengawas daripada $5$: ${}^5C_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$ cara.',
            en: 'Choose $2$ prefects from $5$: ${}^5C_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$ ways.',
            why: { bm: 'Hitung pilihan bagi subkumpulan pengawas secara berasingan.', en: 'Count the prefect subgroup choices separately.' }
          },
          {
            badge: 'N1',
            bm: 'Kedua-dua berlaku bersama ("DAN" $\\implies$ darab): $20 \\times 10 = 200$ cara.',
            en: 'Both happen together ("AND" $\\implies$ multiply): $20 \\times 10 = 200$ ways.',
            why: { bm: 'Jawatankuasa hanya lengkap apabila $3$ guru DAN $2$ pengawas dipilih serentak.', en: 'The committee is only complete when $3$ teachers AND $2$ prefects are chosen together.' }
          }
        ]
      },
      {
        code: '4.5', marks: 4,
        topic: { bm: 'Gabungan Bersyarat "Sekurang-kurangnya"', en: 'Combinations with "At Least" Condition' },
        q: {
          bm: 'Satu pasukan debat $4$ orang dipilih daripada $5$ murid lelaki dan $4$ murid perempuan. Cari bilangan cara pemilihan jika sekurang-kurangnya $3$ orang murid perempuan mesti dipilih. [4m]',
          en: 'A debate team of $4$ is chosen from $5$ boys and $4$ girls. Find the number of ways if at least $3$ girls must be selected. [4m]'
        },
        mistakes: {
          bm: [
            'Hanya mengira kes tepat $3$ perempuan ($20$) dan terlupa menambah kes $4$ perempuan ($0$ lelaki).',
            'Mendarab Kes 1 $\\times$ Kes 2 ($20 \\times 1 = 20$) bukannya menambah kes yang berasingan.',
            'Menggunakan ${}^nP_r$ bukannya ${}^nC_r$ bagi pemilihan ahli pasukan debat.'
          ],
          en: [
            'Counting only the $3$-girls case ($20$) and forgetting the $4$-girls ($0$-boys) case.',
            'Multiplying Case 1 $\\times$ Case 2 ($20 \\times 1$) instead of adding disjoint cases.',
            'Using ${}^nP_r$ instead of ${}^nC_r$ for selecting debate team members.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: '"Sekurang-kurangnya $3$ perempuan" dalam pasukan $4$ orang pecah kepada dua kes berasingan: ($3$P, $1$L) **ATAU** ($4$P, $0$L).',
            en: '"At least $3$ girls" in a team of $4$ splits into two disjoint cases: ($3$G, $1$B) **OR** ($4$G, $0$B).',
            why: { bm: 'Perkataan "sekurang-kurangnya $3$" bermaksud bilangan perempuan boleh jadi $3$ atau lebih (maksimum $4$).', en: '"At least $3$" means $3$ or more girls, up to the team size of $4$.' }
          },
          {
            badge: 'K1',
            bm: 'Kes 1 ($3$P, $1$L): ${}^4C_3 \\times {}^5C_1 = 4 \\times 5 = 20$ cara.',
            en: 'Case 1 ($3$G, $1$B): ${}^4C_3 \\times {}^5C_1 = 4 \\times 5 = 20$ ways.',
            why: { bm: '${}^4C_3 = 4$ dan ${}^5C_1 = 5$; darab kerana memilih kedua-dua jantina dalam satu pasukan.', en: '${}^4C_3 = 4$ and ${}^5C_1 = 5$; multiply because both are needed in one team.' }
          },
          {
            badge: 'K1',
            bm: 'Kes 2 ($4$P, $0$L): ${}^4C_4 \\times {}^5C_0 = 1 \\times 1 = 1$ cara.',
            en: 'Case 2 ($4$G, $0$B): ${}^4C_4 \\times {}^5C_0 = 1 \\times 1 = 1$ way.',
            why: { bm: 'Ingat ${}^4C_4 = 1$ dan ${}^5C_0 = 1$ (hanya $1$ cara untuk memilih semua perempuan dan tiada lelaki).', en: 'Recall ${}^4C_4 = 1$ and ${}^5C_0 = 1$ (only $1$ way to choose all girls and zero boys).' }
          },
          {
            badge: 'N1',
            bm: 'Kes saling eksklusif ("ATAU" $\\implies$ tambah): $20 + 1 = 21$ cara.',
            en: 'Disjoint "OR" cases $\\implies$ add: $20 + 1 = 21$ ways.',
            why: { bm: 'Kes 1 dan Kes 2 tidak boleh berlaku serentak, maka jumlahkan hasil kedua-duanya.', en: 'Cases 1 and 2 cannot happen simultaneously, so add their counts.' }
          }
        ]
      },
      {
        code: '4.6', marks: 3,
        topic: { bm: 'Pilih Atur Membulat Meja Bulat', en: 'Circular Permutations Around a Round Table' },
        q: {
          bm: 'Cari bilangan cara menyusun $6$ orang tetamu duduk mengelilingi sebuah meja bulat. [3m]',
          en: 'Find the number of ways to seat $6$ guests around a circular table. [3m]'
        },
        mistakes: {
          bm: [
            'Mengira $6! = 720$ seperti susunan sebaris tanpa menetapkan satu sauh rujukan $(n - 1)!$.',
            'Membahagi dengan $2$ ($\\frac{5!}{2} = 60$) seolah-olah gelang/rantai yang boleh diterbalikkan.'
          ],
          en: [
            'Computing linear $6! = 720$ instead of $(6 - 1)!$ for rotational symmetry.',
            'Dividing by $2$ unnecessarily ($60$, confusing a round table with a flippable bracelet/necklace).'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Di meja bulat, memusingkan semua kerusi memberi susunan relatif yang sama; tetapkan $1$ tetamu sebagai rujukan sauh ($(n - 1)!$).',
            en: 'Around a round table, rotating everyone gives the same relative seating; anchor $1$ guest as reference ($(n - 1)!$).',
            why: { bm: 'Menetapkan $1$ kerusi membuang $6$ putaran berulang yang sebenarnya susunan bulatan yang sama.', en: 'Anchoring $1$ seat removes the $6$ identical rotated copies of the same seating.' }
          },
          {
            badge: 'K1',
            bm: 'Susun baki $6 - 1 = 5$ tetamu: $(6 - 1)! = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$.',
            en: 'Arrange the remaining $6 - 1 = 5$ guests: $(6 - 1)! = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1$.',
            why: { bm: 'Selepas $1$ tetamu ditetapkan, $5$ tempat kosong lain tersusun secara linear relatif kepadanya.', en: 'Once $1$ guest is fixed, the remaining $5$ seats form a unique linear order relative to that anchor.' }
          },
          {
            badge: 'N1',
            bm: '$120$ cara.',
            en: '$120$ ways.',
            why: { bm: 'Jangan bahagi dengan $2$ kerana tetamu di meja tidak boleh diterbalikkan seperti manik gelang.', en: 'Do not divide by $2$ because seated guests cannot be flipped upside down like bracelet beads.' }
          }
        ]
      },
      {
        code: '4.7', marks: 4,
        topic: { bm: 'Pilih Atur Membulat dengan Syarat Duduk Bersama', en: 'Circular Permutation with Adjacent Pair' },
        q: {
          bm: 'Enam orang rakan duduk mengelilingi meja bulat. Cari bilangan susunan jika dua orang sahabat karib tertentu mesti duduk bersebelahan. [4m]',
          en: 'Six friends sit around a round table. Find the number of arrangements if two specific best friends must sit next to each other. [4m]'
        },
        mistakes: {
          bm: [
            'Menulis $(5 - 1)! = 24$ sahaja tanpa mendarab pertukaran tempat $2!$ bagi dua sahabat karib tersebut.',
            'Menggunakan susunan sebaris $5! \\times 2! = 240$ walaupun soalan adalah meja bulat.',
            'Mengira $(6 - 1)! \\times 2! = 240$ kerana lupa mengurangkan jumlah unit kepada $5$ selepas mengikat pasangan.'
          ],
          en: [
            'Writing $(5 - 1)! = 24$ without multiplying by $2!$ for the internal swap of the two best friends.',
            'Using linear $5! \\times 2! = 240$ instead of circular $(5 - 1)! \\times 2!$.',
            'Computing $(6 - 1)! \\times 2! = 240$ by forgetting to reduce the $6$ people to $5$ outer units.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Ikat $2$ sahabat karib menjadi $1$ blok: baki $4$ rakan lain $+ 1$ blok ikatan $= 5$ unit.',
            en: 'Tie the $2$ best friends into $1$ unit: remaining $4$ friends $+ 1$ tied unit $= 5$ units.',
            why: { bm: 'Menganggap pasangan itu sebagai $1$ blok memastikan mereka sentiasa duduk bersebelahan.', en: 'Treating the pair as $1$ unit guarantees they always sit next to each other.' }
          },
          {
            badge: 'K1',
            bm: 'Susun $5$ unit mengelilingi meja bulat: $(5 - 1)! = 4! = 4 \\times 3 \\times 2 \\times 1 = 24$ cara.',
            en: 'Arrange the $5$ units around a round table: $(5 - 1)! = 4! = 4 \\times 3 \\times 2 \\times 1 = 24$ ways.',
            why: { bm: 'Gunakan rumus meja bulat $(n - 1)!$ dengan $n = 5$ unit.', en: 'Apply the circular permutation formula $(n - 1)!$ with $n = 5$ units.' }
          },
          {
            badge: 'K1',
            bm: 'Tukar tempat $2$ sahabat karib di dalam blok mereka: $2! = 2$ cara.',
            en: 'Swap the $2$ best friends internally inside their unit: $2! = 2$ ways.',
            why: { bm: 'Sahabat A boleh duduk di kiri B atau di kanan B.', en: 'Friend A can sit to the left or right of friend B.' }
          },
          {
            badge: 'N1',
            bm: 'Jumlah susunan $= 24 \\times 2 = 48$ susunan.',
            en: 'Total arrangements $= 24 \\times 2 = 48$ arrangements.',
            why: { bm: 'Darab susunan bulatan luar dengan susunan dalaman pasangan.', en: 'Multiply the outer circular arrangements by the internal pair swaps.' }
          }
        ]
      },
      {
        code: '4.8', marks: 4,
        topic: { bm: 'Nombor Empat Digit Lebih Besar daripada $5000$', en: 'Four-Digit Numbers Greater Than $5000$' },
        q: {
          bm: 'Berapakah bilangan nombor $4$-digit yang lebih besar daripada $5000$ boleh dibentuk daripada digit $\\{2, 4, 5, 7, 9\\}$ tanpa ulangan? [4m]',
          en: 'How many $4$-digit numbers greater than $5000$ can be formed from digits $\\{2, 4, 5, 7, 9\\}$ without repetition? [4m]'
        },
        mistakes: {
          bm: [
            'Tidak memasukkan digit $5$ sebagai pilihan sah bagi tempat ribu (sebarang nombor bermula $5$ seperti $5247$ memang $> 5000$!).',
            'Lupa mengurangkan baki digit daripada $5$ kepada $4$ ($3 \\times {}^5P_3 = 180$).',
            'Menggunakan ${}^4C_3$ bukannya ${}^4P_3$ sedangkan susunan digit membentuk nombor berbeza.'
          ],
          en: [
            'Excluding leading digit $5$ (only using $\\{7, 9\\} \\implies 2 \\times 24 = 48$) when $5247 > 5000$!',
            'Forgetting to reduce remaining digits from $5$ to $4$ ($3 \\times {}^5P_3 = 180$).',
            'Using ${}^4C_3$ instead of ${}^4P_3$ when digit order matters in a number.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Lukis $4$ kotak `_ _ _ _`; untuk nilai $> 5000$, digit pertama (ribu) mestilah $\\{5, 7, 9\\} \\implies 3$ pilihan.',
            en: 'Draw $4$ slot boxes `_ _ _ _`; for value $> 5000$, the 1st (thousands) digit must be $\\{5, 7, 9\\} \\implies 3$ choices.',
            why: { bm: 'Nombor terkecil bermula dengan $5$ daripada set ini ialah $5247 > 5000$, jadi digit $5$ adalah sah.', en: 'The smallest number starting with $5$ from this set is $5247 > 5000$, so $5$ is valid.' }
          },
          {
            badge: 'K1',
            bm: 'Baki $5 - 1 = 4$ digit tinggal untuk mengisi $3$ kotak terakhir tanpa ulangan: ${}^4P_3 = 4 \\times 3 \\times 2 = 24$ cara.',
            en: 'The remaining $5 - 1 = 4$ digits fill the last $3$ slots without repetition: ${}^4P_3 = 4 \\times 3 \\times 2 = 24$ ways.',
            why: { bm: 'Satu digit telah dikunci di kotak ribu, jadi tinggal $4$ pilihan menurun bagi $3$ tempat akhir.', en: 'One digit is locked in the thousands slot, leaving $4$ choices decreasing across $3$ slots.' }
          },
          {
            badge: 'K1',
            bm: 'Pendaraban kotak tempat: $3 \\times 4 \\times 3 \\times 2 = 3 \\times 24$.',
            en: 'Slot multiplication: $3 \\times 4 \\times 3 \\times 2 = 3 \\times 24$.',
            why: { bm: 'Darab pilihan kotak pertama dengan ${}^4P_3$ bagi tiga kotak berikutnya.', en: 'Multiply the first slot choices by ${}^4P_3$ for the remaining three slots.' }
          },
          {
            badge: 'N1',
            bm: '$72$ nombor.',
            en: '$72$ numbers.',
            why: { bm: '$3 \\times 24 = 72$ nombor $4$-digit yang melebihi $5000$.', en: '$3 \\times 24 = 72$ distinct $4$-digit numbers greater than $5000$.' }
          }
        ]
      },
      {
        code: '4.9', marks: 4,
        topic: { bm: 'Gabungan Geometri: Garis Lurus & Segi Tiga daripada Titik Bulatan', en: 'Geometric Combinations: Lines & Triangles from Points' },
        q: {
          bm: 'Lapan titik berbeza ditandakan pada lilitan sebuah bulatan. Cari bilangan (a) garis lurus (perentas), dan (b) segi tiga yang boleh dibentuk dengan menyambungkan titik-titik itu. [4m]',
          en: 'Eight distinct points lie on the circumference of a circle. Find the number of (a) straight lines, and (b) triangles formed by joining the points. [4m]'
        },
        mistakes: {
          bm: [
            'Menggunakan ${}^8P_2 = 56$ dan ${}^8P_3 = 336$ lalu mengira garis $AB$ dan $BA$ (atau $\\triangle ABC$ dan $\\triangle BCA$) berulang kali!',
            'Mendarab ${}^8C_2 \\times {}^8C_3$ sedangkan bahagian (a) dan (b) ialah dua soalan berasingan.',
            'Terlupa membahagi $3 \\times 2 = 6$ dalam penyebut ${}^8C_3$.'
          ],
          en: [
            'Using ${}^8P_2 = 56$ and ${}^8P_3 = 336$, over-counting line $AB = BA$ and triangle $\\triangle ABC = \\triangle BCA$!',
            'Multiplying ${}^8C_2 \\times {}^8C_3$ when parts (a) and (b) are two separate questions.',
            'Forgetting the $3 \\times 2 = 6$ denominator in ${}^8C_3$.'
          ]
        },
        scheme: [
          {
            badge: 'P1',
            bm: 'Tiada $3$ titik pada lilitan bulatan yang segaris, dan garis $AB = BA$ serta $\\triangle ABC = \\triangle BCA$ (susunan tidak penting $\\implies$ guna ${}^nC_r$).',
            en: 'No $3$ points on a circle are collinear, and line $AB = BA$ as well as $\\triangle ABC = \\triangle BCA$ (order is irrelevant $\\implies$ use ${}^nC_r$).',
            why: { bm: 'Menukar urutan titik yang dipilih menghasilkan garis lurus atau segi tiga geometri yang sama.', en: 'Reordering the chosen vertices produces the exact same line or triangle.' }
          },
          {
            badge: 'K1',
            bm: '(a) Satu garis lurus perlukan $2$ titik: ${}^8C_2 = \\frac{8 \\times 7}{2 \\times 1} = \\frac{56}{2} = 28$ garis lurus.',
            en: '(a) A straight line needs $2$ points: ${}^8C_2 = \\frac{8 \\times 7}{2 \\times 1} = \\frac{56}{2} = 28$ straight lines.',
            why: { bm: 'Setiap pasangan $2$ titik unik pada bulatan membentuk $1$ perentas lurus.', en: 'Every unique pair of $2$ points on the circle determines $1$ straight chord.' }
          },
          {
            badge: 'K1',
            bm: '(b) Satu segi tiga perlukan $3$ titik: ${}^8C_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 8 \\times 7 = 56$ segi tiga.',
            en: '(b) A triangle needs $3$ points: ${}^8C_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 8 \\times 7 = 56$ triangles.',
            why: { bm: '$3 \\times 2 \\times 1 = 6$ di bawah memotong terus angka $6$ di atas, meninggalkan $8 \\times 7 = 56$.', en: '$3 \\times 2 \\times 1 = 6$ in the denominator cancels $6$ in the numerator, leaving $8 \\times 7 = 56$.' }
          },
          {
            badge: 'N1',
            bm: '(a) $28$ garis lurus; $\\;$(b) $56$ segi tiga.',
            en: '(a) $28$ straight lines; $\\;$(b) $56$ triangles.',
            why: { bm: 'Nyatakan kedua-dua jawapan (a) dan (b) dengan unit objek yang jelas.', en: 'State both answers (a) and (b) clearly.' }
          }
        ]
      },
      {
        code: '4.10', marks: 4,
        topic: { bm: 'Kaedah Pelengkap & Celah untuk Objek Tidak Bersebelahan', en: 'Complement & Gap Method for Separated Objects' },
        q: {
          bm: '$5$ buah buku Matematik berbeza dan $2$ buah buku Sains berbeza disusun sebaris di atas rak. Cari bilangan susunan jika kedua-dua buku Sains **tidak boleh** bersebelahan. [4m]',
          en: '$5$ distinct Math books and $2$ distinct Science books are arranged in a row. Find the number of ways if the $2$ Science books **must not** be adjacent. [4m]'
        },
        mistakes: {
          bm: [
            'Menolak $6! = 720$ sahaja daripada $7!$ tanpa mendarab $2!$ pada kes buku Sains bersebelahan ($5040 - 720 = 4320$).',
            'Menggunakan ${}^6C_2 = 15$ bukannya ${}^6P_2 = 30$ dalam Kaedah Celah (kedua-dua buku Sains adalah berbeza!).',
            'Menyangka hanya ada $5$ celah di antara $5$ buku Matematik sedangkan ada $6$ celah termasuk kedua-dua hujung.'
          ],
          en: [
            'Subtracting $6! = 720$ instead of $6! \\times 2! = 1440$ from $7! = 5040$.',
            'Using ${}^6C_2 = 15$ instead of ${}^6P_2 = 30$ in the Gap Method (the $2$ Science books are distinct!).',
            'Thinking there are only $5$ gaps around $5$ Math books instead of $6$ gaps (including both ends).'
          ]
        },
        scheme: [
          {
            badge: 'K1',
            bm: 'Jumlah semua susunan tanpa syarat bagi $5 + 2 = 7$ buku berbeza $= 7! = 5040$.',
            en: 'Total unrestricted arrangements of $5 + 2 = 7$ distinct books $= 7! = 5040$.',
            why: { bm: 'Kaedah Pelengkap bermula dengan mengira semua susunan yang mungkin terlebih dahulu.', en: 'The Complement Method starts by counting all possible arrangements without restrictions.' }
          },
          {
            badge: 'K1',
            bm: 'Kes tidak diingini ($2$ buku Sains bersebelahan): ikat jadi $1$ blok $\\implies (5 + 1)! \\times 2! = 6! \\times 2! = 720 \\times 2 = 1440$.',
            en: 'Unwanted case ($2$ Science books together): tie as $1$ block $\\implies (5 + 1)! \\times 2! = 6! \\times 2! = 720 \\times 2 = 1440$.',
            why: { bm: 'Apabila hanya $2$ objek mesti terpisah, kes pelengkapnya tepat ialah "kedua-duanya bersebelahan".', en: 'When only $2$ items must be separated, the exact opposite case is "the $2$ items together".' }
          },
          {
            badge: 'K1',
            bm: 'Tolak kes tidak diingini: $5040 - 1440$ (Kaedah Celah alternatif: susun $5$ buku Matematik dalam $5! = 120$ cara menghasilkan $6$ celah `_M_M_M_M_M_`, selit $2$ buku Sains dalam ${}^6P_2 = 30$ cara $\\implies 120 \\times 30$; *nota: Kaedah Celah wajib bagi $\\ge 3$ objek berasingan!*).',
            en: 'Subtract unwanted from total: $5040 - 1440$ (Alt Gap Method: arrange $5$ Math books in $5! = 120$ ways creating $6$ gaps `_M_M_M_M_M_`, slot $2$ Science books in ${}^6P_2 = 30$ ways $\\implies 120 \\times 30$; *note: Gap Method generalizes to $\\ge 3$ separated items!*).',
            why: { bm: 'Kedua-dua kaedah memberi hasil sama untuk $2$ objek; Kaedah Celah lebih selamat apabila $3+$ objek berasingan.', en: 'Both methods agree for $2$ items; the Gap Method is essential when $3+$ items must all be separated.' }
          },
          {
            badge: 'N1',
            bm: '$3600$ susunan.',
            en: '$3600$ arrangements.',
            why: { bm: '$5040 - 1440 = 3600$ (dan $120 \\times 30 = 3600$).', en: '$5040 - 1440 = 3600$ (and $120 \\times 30 = 3600$).' }
          }
        ]
      }
    ]
  });
})(window.AddMathApp);
