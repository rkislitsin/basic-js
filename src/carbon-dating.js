const MODERN_ACTIVITY = 15; // n0
const HALF_LIFE_PERIOD = 5730; // t1/2

module.exports = function dateSample(sampleActivity) {
  // n - sampleActivity
  // 1. k = Math.LN2 / t1/2
  // 2. t = Math.log(n0 / n) / k
  let n, k, t
  if ((typeof sampleActivity === 'string') && (parseFloat(sampleActivity) > 0)) {
    n = parseFloat(sampleActivity)
    k = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
    t = Math.log(MODERN_ACTIVITY / n) / k;
    if (t < 0) { return false }
    return Math.ceil(t)
  } else {
    return false
  }
};
