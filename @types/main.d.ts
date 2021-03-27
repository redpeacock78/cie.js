export interface _lab {
  dE76: _dE76;
  dE94: _dE94;
  dE00: _dE00;
}
export interface color {
  L: number;
  a: number;
  b: number;
}
interface _dE76 {
  (color_1: color, color_2: color): Promise<string>;
}
interface _dE94 {
  textile: _textile;
  graphicArts: _graphicArts;
}
interface _textile {
  (color_1: color, color_2: color): Promise<string>;
}
interface _graphicArts {
  (color_1: color, color_2: color): Promise<string>;
}
interface _dE00 {
  (color_1: color, color_2: color): Promise<string>;
}
