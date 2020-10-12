// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

// Actually this will cause stack overflow on big numbers
var sum_to_n = function(n) {
    function recursiveSum(currentSum, nextElement) {
        if (nextElement === BigInt(0)) {
            return currentSum;
        }
        return recursiveSum(currentSum + nextElement, nextElement - BigInt(1));
    }

    return recursiveSum(BigInt(0), BigInt(n));
};

console.log(sum_to_n(6));