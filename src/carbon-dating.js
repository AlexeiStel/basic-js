const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  let number;
  if (typeof(sampleActivity) == "string" && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693);
  } else {
    return false;
    }
};

