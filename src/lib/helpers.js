/**
 * Find the min and max difference between two arrays' elements
 *
 * Finding the max difference is rather simple. It's Max(max1 - min2, max2 - min1)
 * where max1 is the max in array 1, etc.
 *
 * Finding the min difference could be done by taking every element
 * of array 1 and diffing it with every element of array 2.
 * However this would take O(n*m) time, where n and m are the array sizes.
 *
 * We can do better: sort the arrays in O(n*log n) time, then search for the
 * min difference in O(n+m) time.
 * This can be further improved using hash sets for special cases;
 */
const getMinMaxDiff = (a1, a2) => {
  if (
    !Array.isArray(a1) ||
    !Array.isArray(a2) ||
    a1.length === 0 ||
    a1.length === 0
  ) {
    throw new Error("Arguments need to be non empty arrays");
  }

  const a1Sorted = [...a1].sort(increasingNumbers);
  const a2Sorted = [...a2].sort(increasingNumbers);

  return [getMaxDiff(a1Sorted, a2Sorted), getMinDiff(a1Sorted, a2Sorted)];
};

const increasingNumbers = (a, b) => a - b;

const getMaxDiff = (a1, a2) => {
  const min1 = a1[0];
  const max1 = a1[a1.length - 1];

  const min2 = a2[0];
  const max2 = a2[a2.length - 1];

  return Math.max(max2 - min1, max1 - min2);
};

const getMinDiff = (a1, a2) => {
  let minDiff = Number.MAX_VALUE;
  let i2 = 0;

  for (let i1 = 0; i1 < a1.length; i1++) {
    do {
      minDiff = Math.min(minDiff, Math.abs(a1[i1] - a2[i2]));
      i2++;
    } while (a1[i1] > a2[i2]);
    i2--;
  }

  return minDiff;
};

// console.log(getMinMaxDiff([3, 10, 5], [20, 7, 15, 8]));

export { getMinMaxDiff };
