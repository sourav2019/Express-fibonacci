// const fibonacci = function (arg = 0) {
//   if(arg < 2)
//   return arg;
//     return fibonacci(arg - 1) + fibonacci(arg - 2);
// };

function fibonacci(n, pastResults) {
  var memo = pastResults || [1, 1]; //if no pastResults, set default value
  var i = memo.length;
  if (i > n) {
    // we have result
    console.log("looking up value");
    return {
      //return 2 values
      pastResults: memo,
      result: memo[n - 1],
    }; // return it
  }
  for (; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n - 1]
}

module.exports = fibonacci;