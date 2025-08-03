/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

var currentSalary = startingSalary;
var rateOfIncriment = 5/100;

for(i=1; i<=experience; i++){
    currentSalary = currentSalary + currentSalary*rateOfIncriment;
}

console.log(currentSalary.toFixed(2));