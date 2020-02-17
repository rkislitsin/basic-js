WINTER = [11, 0, 1]
SPRING = [2, 3, 4]
SUMMER = [5, 6, 7]
AUTUMN = [8, 9, 10]

module.exports = function getSeason(date) {
  for (item in date) { throw Error };

  if (date instanceof Date) {
    let month = date.getMonth()
    return monthToSeason(month)
  } else if (!date) {
    return 'Unable to determine the time of year!'
  } else {
    throw Error;
  }
};

function monthToSeason(month) {
  if (WINTER.includes(month))
    return 'winter'
  else if (SPRING.includes(month))
    return 'spring'
  else if (SUMMER.includes(month))
    return 'summer'
  else if (AUTUMN.includes(month))
    return 'autumn'
}
