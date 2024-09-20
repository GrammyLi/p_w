import { Vector } from "./Vector";
import { Color } from "./Color";
import { BaseObject } from "./Object";

export class Vertex extends BaseObject {
  position: Vector;
  color: Color;

  constructor(position: Vector, color: Color) {
    super();
    this.position = position;
    this.color = color;
  }

  add(other: Vertex): Vertex {
    const position = this.position.add(other.position);
    const color = this.color.add(other.color);
    return new Vertex(position, color);
  }

  sub(other: Vertex): Vertex {
    const position = this.position.sub(other.position);
    const color = this.color.sub(other.color);
    return new Vertex(position, color);
  }

  mul(factor: number): Vertex {
    const position = this.position.mul(factor);
    const color = this.color.mul(factor);
    return new Vertex(position, color);
  }
}
