import { Color } from "./Color";
import { Vertex } from "./Vertex";

export const interpolate = (a: Vertex, b: Vertex, factor: number): Vertex => {
  const interpolatedPosition = a.position.add(
    b.position.sub(a.position).mul(factor)
  );
  const interpolatedColor = a.color.add(b.color.sub(a.color).mul(factor));
  return new Vertex(interpolatedPosition, interpolatedColor);
};
