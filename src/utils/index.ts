// utils/random.ts
export function randomInSphere(
  array: Float32Array,
  { radius = 1 } = {}
): Float32Array {
  for (let i = 0; i < array.length; i += 3) {
    const r = Math.random() * radius;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    array[i] = r * Math.sin(phi) * Math.cos(theta);
    array[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    array[i + 2] = r * Math.cos(phi);
  }
  return array;
}
