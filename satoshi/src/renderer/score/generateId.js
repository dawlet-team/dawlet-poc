export const generateId = (() => {
  let i = 0;
  return (prefix) => {
    return `${prefix}-${++i}`;
  };
})();
