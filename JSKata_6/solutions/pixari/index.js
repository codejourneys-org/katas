
const run = (signature, n) => {
    if (!n) return [];
    for (let i = 3; i < n; i++) {
        signature.push(signature.slice(signature.length - 3).reduce((acc, curr) => {
            return acc + curr;
        }));
    }
    return signature.slice(0, n);
};

module.exports = { run };