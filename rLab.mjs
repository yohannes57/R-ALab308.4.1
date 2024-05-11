// Part 1: Refactoring Old Code
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
//Part 2: Expanding Functionality

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
let cachedArray = row;
// console.log(caceArray);

console.log("###############--3--#############");
//Part 3: Transforming Data
// Implement the following:
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
//solution
// our two dimentiona array is row cached to cachecArray ,we found it in question 2
let header = cachedArray[0];
let objArray = [];
for (let i = 1; i < cachedArray.length; i++) {
  let eachRow = cachedArray[i];
  let obj = {};

  // header.lenght the lenght of header at index 0
  for (let j = 0; j < header.length; j++) {
    obj[header[j].toLowerCase()] = eachRow[j];
  }
  objArray.push(obj);
  // console.log(objArray);
}
console.log(objArray);
/*
result looks like this ,the array changed in object format:
[
  { ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' },
  { ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' },
  { ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' },
  {
    ID: '98',
    Name: 'Bill',
    Occupation: 'Doctor’s Assistant',
    Age: '26'
  
*/
console.log("###############--4--#############");
// Part 4: Sorting and Manipulating Data
//Using array methods, accomplish the following tasks, in order upon the result of Part 3:
// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
//
// 1 remove the last element
//we have array of object created from part 3 ,which is I calle it,objArray
objArray.pop();
// console.log(objArray); pop method removes the last object of the array
// 2.to insert at specific index ,remove we use splice method
let newObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
objArray.splice(1, 0, newObj);
// console.log(objArray);
//3 add to end of the index,we use push method
let newObjeToEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
objArray.push(newObjeToEnd);
console.log(objArray);
/*
result:
[
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
]
*/
//to calculate the average age of array of object we use loop
let sum = 0;
// console.log(objArray.length);
for (let i = 0; i < objArray.length; i++) {
  sum += parseInt(objArray[i].age);
}
console.log(`The average age of the array is ${sum / objArray.length}`);

console.log("###############--5--#############");
// Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!
// Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.
// data we finaly have is this ,and we need to change it as original way
// [
//   { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
//   { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
//   { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
//   { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
//   { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
// ]
// change to  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//one way
//let get the key atrribute or the headers
let firstHeader = [];
for (let headers in objArray[0]) {
  firstHeader.push(headers);
}
//let have a var to hold cvs string
let toOrginalStr = "";
for (let i = 0; i < firstHeader.length; i++) {
  toOrginalStr += firstHeader[i];
  if (i !== firstHeader.length - 1) {
    toOrginalStr += ",";
  }
}
toOrginalStr += "\\n";
console.log("nnn " + toOrginalStr);
//this part done
let count = 0;
for (let value of objArray) {
  count++;
  for (let i = 0; i < firstHeader.length; i++) {
    toOrginalStr += value[firstHeader[i]];
    if (i !== firstHeader.length - 1) {
      toOrginalStr += ",";
    }
  }
  if (count !== objArray.length) {
    toOrginalStr += "\\n";
  }
}
console.log("first method result : " + toOrginalStr);

//
//let's assign first the key attribute to the string
let cvsData = `id,name,occupation,age\\n`;
//then we iterate with for loop for a number of row ,which is objArray.lenght
//
for (let i = 0; i < objArray.length; i++) {
  for (let j = i; j >= i; j--) {
    //to remove \n from end
    if (i == objArray.length - 1) {
      cvsData +=
        objArray[j].id +
        "," +
        objArray[j].name +
        "," +
        objArray[j].occupation +
        "," +
        objArray[j].age;
    } else {
      cvsData +=
        objArray[j].id +
        "," +
        objArray[j].name +
        "," +
        objArray[j].occupation +
        "," +
        objArray[j].age +
        "\\n";
    }
  }
}
console.log("second method result: " + cvsData);
/*
result for Q5:
id,name,occupation,age\n42,Bruce,Knight,41\n48,Barry,Runner,25\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n7,Bilbo,None,111
*/
console.log("\n");
console.log("######## end of project#########");
console.log("##########Thank~you #############");
console.log("#################################");
