const constants = require("../common/constants.js");
const utils = require("../common/utils.js");

const KNN = require("../common/classifiers/knn.js");

const fs = require("fs");

console.log("RUNNING CLASSIFICATION...");

const { samples: trainingSamples } = JSON.parse(
  fs.readFileSync(constants.TRAINING)
);

for (let i = 0; i < 100; i++) {
  const kNN = new KNN(trainingSamples, i);

  const { samples: testingSamples } = JSON.parse(
    fs.readFileSync(constants.TESTING)
  );

  let totalCount = 0;
  let correctCount = 0;

  for (const sample of testingSamples) {
    const { label: predictedLabel } = kNN.predict(sample.point);
    correctCount += predictedLabel == sample.label;
    totalCount++;
  }

  console.log("ACCURACY (k=" + i + ") : " + 
    correctCount + " / " + totalCount + 
    " (" + utils.formatPercent(correctCount/totalCount) + ")");
}
