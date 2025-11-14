// ┌───────────────────────────────────────────────┐
// │ 2704. To Be Or Not To Be.                     │
// └───────────────────────────────────────────────┘
const expect = (val) => ({
	toBe: (compareVal) =>
		val === compareVal
			? true
			: (() => {
					throw Error("Not Equal");
				})(),
	notToBe: (compareVal) =>
		val !== compareVal
			? true
			: (() => {
					throw Error("Equal");
				})(),
});
/* const result = expect(5).toBe(5); */

// ┌───────────────────────────────────────────────┐
// │ 2665. Counter II                              │
// └───────────────────────────────────────────────┘
function createCounter(init) {
	const originalValue = init;
	let current = init || 0;
	return {
		increment: () => current++,
		decrement: () => current--,
		reset: () => {
			current = originalValue;
			return current;
		},
	};
}

// ┌───────────────────────────────────────────────┐
// │ 2635. Apply Transform Over Each Element in Array │
// └───────────────────────────────────────────────┘
function map(arr, fn) {
	const result = [];
	for (let i = 0; i < arr.length; i++) result.push(fn(arr[i], i));
	return result;
}

// ┌───────────────────────────────────────────────┐
// │ 2634. Filter Elements from Array              │
// └───────────────────────────────────────────────┘
function filter(arr, fn) {
	const filteredArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i], i)) filteredArray.push(arr[i]);
	}
	return filteredArray;
}

const filterFunctional = (arr, fn) =>
	arr.reduce(
		(filtered, value, index) =>
			fn(value, index) ? [filtered, value] : filtered,
		[],
	);

// ┌───────────────────────────────────────────────┐
// │ 2626. Array Reduce Transformation             │
// └───────────────────────────────────────────────┘
function reduce(nums, fn, init) {
	let res = init;
	for (i = 0; i < nums.length; i++) res = fn(res, nums[i]);
	return res;
}

// ┌───────────────────────────────────────────────┐
// │ 2629. Function Composition   (Beats 92.82%)   │
// └───────────────────────────────────────────────┘
/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
	return (x) => {
		let value = x;
		for (let i = 0; i < functions.length; i++) {
			fun = functions[functions.length - i - 1];
			value = fun(value);
		}
		return value;
	};
}

/* const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// ┌───────────────────────────────────────────────┐
// │ 2703. Return Length of Arguments Passed       │
// └───────────────────────────────────────────────┘
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
function argumentsLength(...args) {
	return args.length;
}

/**
 * argumentsLength(1, 2, 3); // 3
 */

// ┌───────────────────────────────────────────────┐
// │ 2666. Allow One Function Call                 │
// └───────────────────────────────────────────────┘
/**
 * @param {Function} fn
 * @return {Function}
 */
function once(fn) {
	let used = false;
	return (...args) => {
		if (used) return;
		used = true;
		return fn(...args);
	};
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// ┌───────────────────────────────────────────────┐
// │ 2623. Memoize (beats 90%)                     │
// └───────────────────────────────────────────────┘
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
	const cache = new Map();
	return (...args) => {
		const key = JSON.stringify(args);
		if (cache.has(key)) return cache.get(key);
		const result = fn(...args);
		cache.set(key, result);
		return result;
	};
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// ┌───────────────────────────────────────────────┐
// │ 2723. Add Two Promises (beats 98.83% wtf??)   │
// └───────────────────────────────────────────────┘
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
async function addTwoPromises(promise1, promise2) {
	const res1 = await promise1;
	const res2 = await promise2;
	return res1 + res2;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
