const name = "haroon"
const repoCount = 50

//console.log(name + repoCount + "value");

// syntex is out dated but now a days we will used `` advantage of `` is string interpollution

const gameName = new String('haroon')


console.log(gameName[5]);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

//looand and integration 
 // for loop

 for (initialization; condition; afterthought)
 statement

  //for loop

//Function syntax

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"
  

//Function syntax
function myFunc(theArr) {
    theArr[0] = 30;
  }
  
  const arr = [45];
  
  console.log(arr[0]); // 45
  myFunc(arr);
  console.log(arr[0]); // 30
  