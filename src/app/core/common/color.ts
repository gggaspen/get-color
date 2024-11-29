export default class Color {
  constructor(private color: string) {}

  static fromRGB(r: number, g: number, b: number): Color {
    const hex = `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)}`;

    return new Color(hex);
  }

  static fromHSL(h: number, s: number, l: number): Color {
    const hslToRgb = (h: number, s: number, l: number) => {
      s /= 100;
      l /= 100;
      const k = (n: any) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n: any) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
      return [
        Math.round(f(0) * 255),
        Math.round(f(8) * 255),
        Math.round(f(4) * 255),
      ];
    };
    const [r, g, b] = hslToRgb(h, s, l);
    return Color.fromRGB(r, g, b);
  }

  toRGB(): { r: number; g: number; b: number } {
    const match6 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.color);
    const match3 = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(this.color);

    let match = match6 || match3;

    return match
      ? {
          r: parseInt(match[1], 16),
          g: parseInt(match[2], 16),
          b: parseInt(match[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  }

  toHSL(): { h: number; s: number; l: number } {
    const { r, g, b } = this.toRGB();
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    const delta = max - min;
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (delta !== 0) {
      h =
        max === rNorm
          ? (gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)
          : max === gNorm
          ? (bNorm - rNorm) / delta + 2
          : (rNorm - gNorm) / delta + 4;
      h = Math.round(h * 60);
      s = delta / (1 - Math.abs(2 * l - 1));
    }
    return { h, s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  static random(): Color {
    const getRandomValue = () => Math.floor(Math.random() * 256); // Valor entre 0 y 255
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();
    const hex = `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)}`;
    return new Color(hex);
  }
}
