/** Problem 04 - (Delete / Store) */
var fileName= "docx.txt";
//write your code here

// var hashSign = fileName.slice(0,1);
// if(hashSign=="#" || fileName.includes(".pdf") || fileName.includes(".docx")){
//     console.log("Store")
// }
// else{
//     console.log("Delete")
// }



var hashSign = fileName.slice(0,1);
if(hashSign=="#" || fileName.endsWith("pdf") || fileName.endsWith("docx")){
    console.log("Store")
}
else{
    console.log("Delete")
}



