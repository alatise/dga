/** Caps stagger delay at ~400ms so the last card in a large grid doesn't lag. */
export function staggerDelay(index: number, stepMs = 90, maxMs = 400) {
  return Math.min(index * stepMs, maxMs);
}
