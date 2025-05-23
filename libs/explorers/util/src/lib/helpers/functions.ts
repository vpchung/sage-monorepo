export function getRandomInt(minInclusive: number, maxExclusive: number) {
  minInclusive = Math.ceil(minInclusive);
  maxExclusive = Math.floor(maxExclusive);
  return Math.floor(Math.random() * (maxExclusive - minInclusive)) + minInclusive;
}

export function removeParenthesis(s: string) {
  return s.replace('(', '').replace(')', '');
}

export function toKebabCase(s: string) {
  return s.toLowerCase().replace(/\s+/g, '-');
}
