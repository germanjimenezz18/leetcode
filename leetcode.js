// ┌───────────────────────────────────────────────┐
// │ 2704. To Be Or Not To Be.                     │
// └───────────────────────────────────────────────┘
const expect = (val) => ({
  toBe: (compareVal) => (val === compareVal ? true : (() => { throw Error("Not Equal") })()),
  notToBe: (compareVal) => (val !== compareVal ? true : (() => { throw Error("Equal") })()),
});
const result = expect(5).toBe(5);

// ┌───────────────────────────────────────────────┐
// │ 2665. Counter II                               │
// └───────────────────────────────────────────────┘
var createCounter = function (init) {
  const originalValue = init;
  let current = init || 0;
  return {
    increment: () => current++,
    decrement: () => current--,
    reset: () => (current = originalValue),
  };
};

// ┌───────────────────────────────────────────────┐
// │ 2635. Apply Transform Over Each Element in Array │
// └───────────────────────────────────────────────┘
var map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) result.push(fn(arr[i], i));
  return result;
};

// ┌───────────────────────────────────────────────┐
// │ 2634. Filter Elements from Array               │
// └───────────────────────────────────────────────┘
var filter = function (arr, fn) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filteredArray.push(arr[i]);
  }
  return filteredArray;
};

const filterFunctional = function (arr, fn) {
  return arr.reduce((filtered, value, index) => fn(value, index) ? [...filtered, value] : filtered, []);
};

// ┌───────────────────────────────────────────────┐
// │ 2626. Array Reduce Transformation             │
// └───────────────────────────────────────────────┘
var reduce = function (nums, fn, init) {
  let res = init;
  for (i = 0; i < nums.length; i++) res = fn(res, nums[i]);
  return res;
};



//262z9. Function Composition
// 48ms Beats 92.82%

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
      let value = x
        for (let i = 0; i < functions.length; i++) {
          fun = functions[functions.length - i - 1]
          value = fun(value)
        }
        return value
    }
};


/* const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9 
 */
