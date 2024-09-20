import { BaseObject } from "./Object";

export class Vector extends BaseObject {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  add(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  sub(other: Vector): Vector {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  mul(factor: number): Vector {
    return new Vector(this.x * factor, this.y * factor);
  }
}
