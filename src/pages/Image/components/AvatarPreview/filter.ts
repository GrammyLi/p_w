export type RGBA = [number, number, number, number];

// 定义过滤器函数的类型
type FilterFunction = (colors: RGBA) => RGBA;

// 漫画效果
const comicBooksOfColors: FilterFunction = ([r, g, b, A]) => {
  const R = (Math.abs(g - b + g + r) * r) / 256;
  const G = (Math.abs(b - g + b + r) * r) / 256;
  const B = (Math.abs(b - g + b + r) * g) / 256;
  return [Math.round(R), Math.round(G), Math.round(B), A];
};

// 怀旧效果
const nostalgiaOfColors: FilterFunction = ([r, g, b, A]) => {
  const R = 0.393 * r + 0.769 * g + 0.189 * b;
  const G = 0.349 * r + 0.686 * g + 0.168 * b;
  const B = 0.272 * r + 0.534 * g + 0.131 * b;
  return [Math.round(R), Math.round(G), Math.round(B), A];
};

// 融合投射效果
const fusedCastOfColors: FilterFunction = ([r, g, b, A]) => {
  const R = (r * 128) / (g + b + 1);
  const G = (g * 128) / (r + b + 1);
  const B = (b * 128) / (g + r + 1);
  return [Math.round(R), Math.round(G), Math.round(B), A];
};

// 灰度效果
const grayOfColors: FilterFunction = ([r, g, b, A]) => {
  const gray = (r + g + b) / 3;
  return [Math.round(gray), Math.round(gray), Math.round(gray), A];
};

// 黑白效果
const blackWhiteOfColors: FilterFunction = ([r, g, b, A]) => {
  const gray = (r + g + b) / 3 >= 100 ? 255 : 0;
  return [gray, gray, gray, A];
};

// 底片效果
const negativeOfColors: FilterFunction = ([r, g, b, A]) => {
  return [255 - r, 255 - g, 255 - b, A];
};

// 封装过滤器集合
const filters: Record<string, FilterFunction> = {
  gray: grayOfColors, // 灰度
  blackWhite: blackWhiteOfColors, // 黑白
  negative: negativeOfColors, // 底片
  comic: comicBooksOfColors, // 漫画
  nostalgia: nostalgiaOfColors, // 怀旧
  fusedCast: fusedCastOfColors, // 融合投射
};

// 封装应用过滤器的函数
export const applyFilter = (filterName: string, colors: RGBA): RGBA => {
  const filter = filters[filterName];
  if (filter) {
    return filter(colors);
  }
  throw new Error(`Filter "${filterName}" not found.`);
};

export default filters;
