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
