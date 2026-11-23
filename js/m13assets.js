// m13: new sprite / icon assets (files, not data URIs). Registered before game.js starts loading images.
// ?m13=0 registers nothing, so the m12 asset set loads unchanged.
(function () {
  if (/[?&]m13=0/.test(location.search) || !window.ASSETS) return;
  const N = ['s_m13bastion', 's_m13cantor', 's_m13leaper', 's_m13stalker', 's_m13butcher', 's_m13abbess', 's_m13blackbaron',
    'ic_m13storm', 'ic_m13split', 'ic_m13aegis', 'ic_m13return', 'ic_m13blink', 'ic_m13cinder', 'ic_m13rico', 'ic_m13wake',
    'ic_m13sigil', 'ic_m13gskull', 'ic_m13candle'];
  for (const n of N) window.ASSETS[n] = 'assets/m13/' + n + '.png';
})();
