// @flow
export const oneOf = <T>(items: T[]): T =>
  items[Math.floor(Math.random() * items.length)];
