

// var initialHeight = 1;
// var growthRate = 5/100;
// var totalYears = 20;
// var currentHeight = initialHeight;

// for (var year = 1; year <= totalYears; year++) {
//     currentHeight = currentHeight + currentHeight * growthRate;
//     console.log("Year " + year + ": " + currentHeight.toFixed(2) + " meters");
// }







var initialHeight = 1;
var growthRate = 10/100;
var totalYears = 20;
var currentHeight = 0;

for (var year=1; year<=totalYears; year++) {
    currentHeight = currentHeight + initialHeight * growthRate;
}
console.log(currentHeight);





