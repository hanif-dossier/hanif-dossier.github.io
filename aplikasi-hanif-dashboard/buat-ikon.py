# Ikon dan layar pembuka aplikasi Android Hanif Dashboard, dari gambar yang sama dengan ikon web (beranda/hanif-dashboard).
# Jalankan: python buat-ikon.py   (menimpa berkas di android/app/src/main/res)
from PIL import Image, ImageDraw, ImageFilter
import glob, os
S = 1024
RES = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'android', 'app', 'src', 'main', 'res')

def latar(bulat):
    g = Image.new('RGB', (S, S)); px = g.load(); a, b = (91, 100, 232), (36, 40, 120)
    for y in range(S):
        for x in range(S):
            t = (x + y) / (2 * S); px[x, y] = tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))
    cah = Image.new('L', (S, S), 0); ImageDraw.Draw(cah).ellipse((-260, -300, 620, 520), fill=70); cah = cah.filter(ImageFilter.GaussianBlur(120))
    g = Image.composite(Image.new('RGB', (S, S), (255, 255, 255)), g, cah)
    m = Image.new('L', (S, S), 0)
    if bulat == 'kotak': ImageDraw.Draw(m).rounded_rectangle((0, 0, S - 1, S - 1), radius=int(S * .225), fill=255)
    elif bulat == 'bulat': ImageDraw.Draw(m).ellipse((0, 0, S - 1, S - 1), fill=255)
    else: m.paste(255, (0, 0, S, S))
    out = Image.new('RGBA', (S, S), (0, 0, 0, 0)); out.paste(g, (0, 0), m); return out

def tanda(img, skala):
    k = 4; B = S * k; L = Image.new('RGBA', (B, B), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
    c = B / 2; u = B * .5 * skala; w = u * .25; xL, xR = c - u * .62, c + u * .62; top, bot = c - u * .78, c + u * .78
    putih = (255, 255, 255, 255); emas = (246, 189, 82, 255)
    for x in (xL, xR): d.rounded_rectangle((x - w / 2, top, x + w / 2, bot), radius=w / 2, fill=putih)
    p = [(xL, c + u * .2), (c - u * .2, c - u * .02), (c + u * .1, c + u * .16), (xR, c - u * .3)]; tl = w * .62
    d.line(p, fill=putih, width=int(tl), joint='curve')
    for q in p[1:3]: d.ellipse((q[0] - tl / 2, q[1] - tl / 2, q[0] + tl / 2, q[1] + tl / 2), fill=putih)
    r = w * .62; e = p[-1]; d.ellipse((e[0] - r, e[1] - r, e[0] + r, e[1] + r), fill=emas)
    L = L.resize((S, S), Image.LANCZOS)
    bay = Image.new('RGBA', (S, S), (0, 0, 0, 0)); bay.paste((10, 12, 50, 90), (0, 0), L.split()[3].filter(ImageFilter.GaussianBlur(18)))
    img.alpha_composite(bay, (0, 14)); img.alpha_composite(L); return img

kotak, bulat, depan = tanda(latar('kotak'), .78), tanda(latar('bulat'), .7), tanda(latar('penuh'), .5)
UKURAN = {'mdpi': 48, 'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}
for dpi, n in UKURAN.items():
    d = os.path.join(RES, 'mipmap-' + dpi)
    kotak.resize((n, n), Image.LANCZOS).save(os.path.join(d, 'ic_launcher.png'))
    bulat.resize((n, n), Image.LANCZOS).save(os.path.join(d, 'ic_launcher_round.png'))
    f = int(n * 108 / 48); depan.resize((f, f), Image.LANCZOS).save(os.path.join(d, 'ic_launcher_foreground.png'))
# layar pembuka: latar terang dashboard dengan ikon di tengah
for f in glob.glob(os.path.join(RES, 'drawable*', 'splash.png')):
    w, h = Image.open(f).size; im = Image.new('RGB', (w, h), (242, 244, 249)); n = int(min(w, h) * .28)
    ik = kotak.resize((n, n), Image.LANCZOS); im.paste(ik, ((w - n) // 2, (h - n) // 2), ik); im.save(f)
open(os.path.join(RES, 'values', 'ic_launcher_background.xml'), 'w', encoding='utf-8').write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#3D45B8</color>\n</resources>\n')
print('ikon dan layar pembuka siap')
