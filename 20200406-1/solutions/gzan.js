//Execution Timed Out in big inputs => so, this solution is not fast enough!
//Anyone who reads this is welcome to notify me if they have a faster solution.
function listSquared(m, n) {
    const result = [];
    for (let num = m; num <= n; num++) {
        let sum = divisors(num).map(x => Math.pow(x, 2)).reduce((a, b) => a + b, 0);
        if (isSquare(sum)) result.push([num, sum])

    }
    return result;
}

const isSquare = (num) => Math.sqrt(num) % 1 === 0;

const divisors = num => [...Array(num + 1).keys()].slice(1).filter(x => num % x == 0);
