import { Vector } from "./Vector";
import { Color } from "./Color";
import { Vertex } from "./Vertex";
import { interpolate } from "./utils";

export class CanvasObject {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  w: number;
  h: number;
  pixels: ImageData;
  bytesPerPixel: number;
  penColor: Color;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d")!;
    this.w = canvas.width;
    this.h = canvas.height;
    this.pixels = this.context.getImageData(0, 0, this.w, this.h);
    this.bytesPerPixel = 4; // 一个像素由4个字节组成（RGBA）
    this.penColor = Color.black();
  }

  initialize() {
    // 清空画布并设置初始图像
    this.context.clearRect(0, 0, this.w, this.h);
    this.context.fillStyle = "#FFFFFF";
    this.context.fillRect(0, 0, this.w, this.h);

    const v1 = new Vertex(new Vector(50, 100), Color.red());
    const v2 = new Vertex(new Vector(200, 100), Color.blue());
    const v3 = new Vertex(new Vector(125, 200), Color.green());

    this.drawTriangle(v1, v2, v3);
  }

  render() {
    const { pixels, context } = this;
    context.putImageData(pixels, 0, 0);
  }

  private _setPixel(x: number, y: number, color: Color) {
    const int = Math.floor;
    x = int(x);
    y = int(y);
    const i = (y * this.w + x) * this.bytesPerPixel;
    const p = this.pixels.data;
    const { r, g, b, a } = color;
    p[i] = r;
    p[i + 1] = g;
    p[i + 2] = b;
    p[i + 3] = a;
  }

  drawPoint(point: Vector, color: Color = Color.black()) {
    const { w, h } = this;
    if (point.x >= 0 && point.x <= w && point.y >= 0 && point.y <= h) {
      this._setPixel(point.x, point.y, color);
    }
  }

  drawScanline(v1: Vertex, v2: Vertex) {
    const [a, b] = [v1, v2].sort((a, b) => a.position.x - b.position.x);
    const x1 = Math.floor(a.position.x);
    const x2 = Math.floor(b.position.x);
    const y = Math.floor(a.position.y);
    const sign = x2 > x1 ? 1 : -1;

    let factor = 0;
    for (let i = x1; i <= x2 + sign * 1; i += sign) {
      if (x1 !== x2) {
        factor = (i - x1) / (x2 - x1);
      }

      // 使用 a.color 和 b.color 进行颜色插值，而不是直接使用 Vertex 对象
      const color = interpolate(a.color as any, b.color as any, factor);
      const vector = new Vector(i, y);
      this.drawPoint(vector, color);
    }

    this.render();
  }

  drawTriangle(v1: Vertex, v2: Vertex, v3: Vertex) {
    const [a, b, c] = [v1, v2, v3].sort((a, b) => a.position.y - b.position.y);

    let middleFactor = 0;
    if (c.position.y - a.position.y !== 0) {
      middleFactor =
        (b.position.y - a.position.y) / (c.position.y - a.position.y);
    }

    const middle = interpolate(a, c, middleFactor);

    let startY = Math.floor(a.position.y);
    let endY = Math.floor(b.position.y);

    for (let i = startY; i <= endY; i++) {
      const factor = endY !== startY ? (i - startY) / (endY - startY) : 0;
      const va = interpolate(a, b, factor);
      const vb = interpolate(a, middle, factor);
      this.drawScanline(va, vb);
    }

    startY = Math.floor(b.position.y);
    endY = Math.floor(c.position.y);

    for (let j = startY; j <= endY; j++) {
      const factor = endY !== startY ? (j - startY) / (endY - startY) : 0;
      const va = interpolate(b, c, factor);
      const vb = interpolate(middle, c, factor);
      this.drawScanline(va, vb);
    }

    this.render();
  }
}
