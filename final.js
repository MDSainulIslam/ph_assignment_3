/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var output = area/2;
console.log(output);










/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money>=25000){
    console.log("Laptop");
}
else if(money>=10000){
    console.log("Cycle")
}
else{
    console.log("Chocolate");
};










/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

var firstDay = 1;
for (i = firstDay; i <= lastDay; i++){
    
    if(i%3===0){
        console.log(i + " - " + "medicine");
    }
    else{
        console.log(i + " - " + "rest");
    }
}










/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

var hashSign = fileName.slice(0,1);
if(hashSign=="#" || fileName.includes(".pdf") || fileName.includes(".docx")){
    console.log("Store")
}
else{
    console.log("Delete")
}










/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhanku" , roll: 1014 ,department: "cse" };
//write your code here

var studentName = student.name;
var studentRoll =student.roll;
var departmentName = student.department;

console.log(studentName + studentRoll + "." + departmentName + "@ph.ac.bd");










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