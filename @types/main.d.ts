/**
 * Calculates the color difference between two colors using the color difference formula in LAB Delta E established by the Commission internationale de l'éclairage (CIE).
 * @property dE76
 * @property dE94
 * @property dE00
 */
export interface _lab {
  /**
   * The CIE 1976 color difference formula is the first color difference formula defined, and is calculated as the Euclidean distance in CIELAB coordinates.
   * @param { color } color_1 - Lab color space values.
   * @param { color } color_2 - Lab color space values.
   * @returns { Promise<string> } A Promise for the completion of which ever callback is executed.
   */
  dE76: _dE76;
  /**
   * ΔE(1994) is calculated from the difference in brightness, saturation, and hue in the L\*C\*h\* color space, which is calculated from the L\*a\*b\* color space.
   * It also introduces a weighting factor for specific applications, derived from the allowable values for automotive paints.
   * @property textile
   * @property graphicArts
   */
  dE94: _dE94;
  /**
   * Since the CIE 1994 definition did not sufficiently ensure perceived uniformity, the CIE revised the definition and established the standard.
   * @param { color } color_1 - Lab color space values.
   * @param { color } color_2 - Lab color space values.
   * @returns { Promise<string> } A Promise for the completion of which ever callback is executed.
   */
  dE00: _dE00;
}
/**
 * Lab color space values.
 */
export interface color {
  /**
   * Value of lightness in Lab color space.
   */
  L: number;
  /**
   * Hue value in Lab color space.
   */
  a: number;
  /**
   * Saturation values in Lab color space.
   */
  b: number;
}
/**
 * he CIE 1976 color difference formula is the first color difference formula defined, and is calculated as the Euclidean distance in CIELAB coordinates.
 */
interface _dE76 {
  (color_1: color, color_2: color): Promise<string>;
}
/**
 * ΔE(1994) is calculated from the difference in brightness, saturation, and hue in the L\*C\*h\* color space, which is calculated from the L\*a\*b\* color space.
 * It also introduces a weighting factor for specific applications, derived from the allowable values for automotive paints.
 */
interface _dE94 {
  /**
   * `Weighting Factor (k_L=1, K_1=0.045, K_2=0.015)`
   * @param { color } color_1 - Lab color space values.
   * @param { color } color_2 - Lab color space values.
   * @returns { Promise<string> } A Promise for the completion of which ever callback is executed.
   */
  textile: _textile;
  /**
   * `Weighting Factor (k_L=2, K_1=0.048 K_2=0.014)`
   * @param { color } color_1 - Lab color space values.
   * @param { color } color_2 - Lab color space values.
   * @returns { Promise<string> } A Promise for the completion of which ever callback is executed.
   */
  graphicArts: _graphicArts;
}
/**
 * `Weighting Factor (k_L=1, K_1=0.045, K_2=0.015)`
 */
interface _textile {
  (color_1: color, color_2: color): Promise<string>;
}
/**
 * `Weighting Factor (k_L=2, K_1=0.048 K_2=0.014)`
 */
interface _graphicArts {
  (color_1: color, color_2: color): Promise<string>;
}
/**
 * Since the CIE 1994 definition did not sufficiently ensure perceived uniformity, the CIE revised the definition and established the standard.
 */
interface _dE00 {
  (color_1: color, color_2: color): Promise<string>;
}
