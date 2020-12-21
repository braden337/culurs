function culurs(saturation = 0.5, lightness = 0.5, cssVarA = '', cssVarB = '') {
  saturation *= 100;
  lightness *= 100;

  return function () {
    let hue = Math.trunc(Math.random() * 360);
    let opposite = (hue + 180) % 360;
    let color = `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
    let contrast = `hsl(${opposite}deg, ${saturation}%, ${lightness}%)`;

    if ([cssVarA, cssVarB].includes('')) return [color, contrast];
    else
      for (let [prop, value] of [
        [cssVarA, color],
        [cssVarB, contrast],
      ])
        document.documentElement.style.setProperty(`--${prop}`, value);
  };
}

module.exports = culurs;
