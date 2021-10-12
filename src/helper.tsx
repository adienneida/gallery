//Used to calculate and convert hex color to rgb
export const convertHexToRgb = (hexColor: string) => {
  hexColor = hexColor.toUpperCase().replace('#', '');
  const [red, green, blue] = hexColor.match(/.{1,2}/g) || [];
  return [
    parseInt(red, 16),
    parseInt(green, 16),
    parseInt(blue, 16)
  ]
}

//Used to calculate saturation from rgb color
export const computeSaturation = (red: number, green: number, blue: number) => {
  red = red / 255;
  green = green / 255;
  blue = blue / 255;
  const chromaMin: number = Math.min(red, green, blue);
  const chromaMax: number = Math.max(red, green, blue);
  const chroma: number = chromaMax - chromaMin;

  const lightness: number = (chromaMin + chromaMax) / 2;

  return chroma === 0 ? 0 : Math.floor(chroma / (1 - Math.abs(2 * lightness - 1)) * 100);
}