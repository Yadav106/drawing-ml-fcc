const utils = {}

utils.flaggedUsers = [1663882102141,1663900040545,1664485938220];

utils.formatPercent = (n) => {
  return (n*100).toFixed(2) + "%"
}

utils.printProgress = (count, maxValue) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  const percent = utils.formatPercent(count/maxValue);
  process.stdout.write(
    count + "/" + maxValue + "(" + percent + ")"
  );
}

utils.groupBy = (objectArr, key) => {
  const groups = {};
  for (let obj of objectArr) {
    const val = obj[key];
    if (groups[val] == null) {
      groups[val] = [];
    }
    groups[val].push(obj);
  }
  return groups;
}

if (typeof module !== "undefined") {
  module.exports = utils;
}

// some more changes
