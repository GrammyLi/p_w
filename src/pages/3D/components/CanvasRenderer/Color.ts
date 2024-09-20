export class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  static black(): Color {
    return new Color(0, 0, 0, 255);
  }

  static white(): Color {
    return new Color(255, 255, 255, 255);
  }

  static red(): Color {
    return new Color(255, 0, 0, 255);
  }

  static green(): Color {
    return new Color(0, 255, 0, 255);
  }

  static blue(): Color {
    return new Color(0, 0, 255, 255);
  }

  static cyan(): Color {
    return new Color(0, 255, 255, 255);
  }

  static fromHEX(hex: string): Color {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return new Color(r, g, b, 255);
  }

  add(other: Color): Color {
    return new Color(
      this.r + other.r,
      this.g + other.g,
      this.b + other.b,
      this.a + other.a
    );
  }

  sub(other: Color): Color {
    return new Color(
      this.r - other.r,
      this.g - other.g,
      this.b - other.b,
      this.a - other.a
    );
  }

  mul(factor: number): Color {
    return new Color(
      this.r * factor,
      this.g * factor,
      this.b * factor,
      this.a * factor
    );
  }
}
