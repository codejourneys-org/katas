const prefill = (n, v) => {
  if (n === 0 || n === '0') return [];
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError(`${n} is invalid`);
  } else {
    if (!v) return new Array(n).fill(undefined);
    return new Array(n).fill(v);
  }
};

module.exports = { prefill };
