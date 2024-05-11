//part one Refactoring old code
// For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.
/*
let cell1 = "",
  cell2 = "",
  cell3 = "",
  cell4 = "";
let eachChar = "";
for (let i = 0; i < stringContent.length; i++) {
  eachChar = stringContent[i];
if (stringContent[i] == ",") {
    continue;
  } else if (stringContent[i] == "\n") {
    console.log(cell1, cell2, cell3, cell4);
    cell1 = cell2 = cell3 = cell4 = "";
  } else {
    if (cell1.length < 1) {
      cell1 +=eachChar;
    } else if (cell2.length < 1) {
      cell2 += eachChar;
    } else if (cell3.length < 1) {
      cell3 += eachChar;
    } else {
      cell4 += eachChar;
    }
  }
}
*/
//my ALAB308.3.1 code
console.log(
  "the above code are how is show How I aproched it for parsing the cvs  "
);
const cvsFile =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

//take the string and trim based on new line
//it gives each row separated with comma
let newString = cvsFile.trim().split("\n");
console.log(newString);

/*
[
  'ID,Name,Occupation,Age',
  '42,Bruce,Knight,41',
  '57,Bob,Fry Cook,19',
  '63,Blaine,Quiz Master,58',
  '98,Bill,Doctor’s Assistant,26'
]
*/
//then remov the comma and then display it as a table
//for loop to iterate all the rows and .replace(/,/g," ") this method replace all cooma with whitespace
for (let i = 0; i < newString.length; i++) {
  console.log(newString[i].replace(/,/g, " "));
}
/*
with the help of arrayMethods;
results:ooks like this 
ID Name Occupation Age
42 Bruce Knight 41
57 Bob Fry Cook 19
63 Blaine Quiz Master 58
98 Bill Doctor’s Assistant 26
*/
// end of question one1
console.log("###############--2--#############");
// Begin with the following task:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
let row = [];
let trimedCvsFile = cvsFile.trim().split("\n");
// console.log(trimedCvsFile);//
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
for (let i = 0; i < trimedCvsFile.length; i++) {
  row.push(trimedCvsFile[i].split(","));
}
//log the two dimentional array
console.log(row);

/*
Final Result:
[
    [ 'ID', 'Name', 'Occupation', 'Age' ],
    [ '42', 'Bruce', 'Knight', '41' ],
    [ '57', 'Bob', 'Fry Cook', '19' ],
    [ '63', 'Blaine', 'Quiz Master', '58' ],
    [ '98', 'Bill', 'Doctor’s Assistant', '26' ]
]
*/

console.log("###############--3--#############");
// Implement the following:
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
