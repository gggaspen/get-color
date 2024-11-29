export default interface Color {
  /**
   * Representación hexadecimal del color (opcional)
   */
  hex?: string;

  /**
   * Representación RGB del color (opcional)
   */
  rgb?: string;

  /**
   * Representación HSL del color (opcional)
   */
  hsl?: string;

  /**
   * Representación RGBA del color (opcional)
   */
  rgba?: string;

  /**
   * Representación HSLA del color (opcional)
   */
  hsla?: string;

  /**
   * Valor de opacidad del color (opcional, por defecto 1)
   */
  alpha?: number;

  /**
   * Valor de saturación del color (opcional, por defecto 1)
   */
  saturation?: number;

  /**
   * Valor de iluminación del color (opcional, por defecto 0.5)
   */
  lightness?: number;

  /**
   * Valor de rojo del color (opcional, por defecto 0)
   */
  red?: number;

  /**
   * Valor de verde del color (opcional, por defecto 0)
   */
  green?: number;

  /**
   * Valor de azul del color (opcional, por defecto 0)
   */
  blue?: number;

  /**
   * Representación CMYK del color (opcional)
   */
  cmyk?: string;

  /**
   * Representación HSV del color (opcional)
   */
  hsv?: string;

  /**
   * Representación XYZ del color (opcional)
   */
  xyz?: string;

  /**
   * Representación Lab del color (opcional)
   */
  lab?: string;
}
