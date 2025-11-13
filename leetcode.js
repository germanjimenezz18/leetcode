//
// ┌───────────────────────────────┐
// │ 2704. To Be Or Not To Be.     │
// └───────────────────────────────┘
/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
  return {
    toBe: (compareVal) => {
      if (val === compareVal) {
        return true;
      } else {
        throw Error("Not Equal");
      }
    },
    notToBe: (compareVal) => {
      if (val !== compareVal) {
        return true;
      } else {
        throw Error("Equal");
      }
    },
  };
};
 const result = expect(5).toBe(5);

//
// ┌───────────────────────────────┐
// │ 2665. Counter II              │
// └───────────────────────────────┘
var createCounter = function (init) {
  const originalValue = init;
  let current = init || 0;

  return {
    increment: () => {
      return current++;
    },
    decrement: () => {
      return current--;
    },
    reset: () => {
      current = originalValue;
      return current;
    },
  };
};

 //
 // ┌───────────────────────────────┐
 // │ 2635. Apply Transform Over Each Element in Array │
 // └───────────────────────────────┘
var map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};


// 
// ┌───────────────────────────────┐
// │ 2634. Filter Elements from Array │
// └───────────────────────────────┘
var filter = function (arr, fn) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    const k = fn(arr[i], i);
    if (k) filteredArray.push(arr[i]);
  }
  return filteredArray;
};

/* Filter with reduce */
const filterFunctional = function (arr, fn) {
  return arr.reduce((filtered, value, index) => {
    return fn(value, index) ? [...filtered, value] : filtered;
  }, []);
};

// 
// ┌───────────────────────────────┐
// │ 2626. Array Reduce Transformation │
// └───────────────────────────────┘
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let res = init;
  for (i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};
