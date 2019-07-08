// Code your solution here!

function printString(myString){
  console.log(myString[0], myString[1], myString[2], myString[3], myString[4]);
}
printString('pizza')

// function printString(myString){
//   let i = 0
//   while(myString.length > i){
//     console.log(myString[i])
//     i++;
//   }
//   return true
// }
// printString('pizza')

function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}


function reverseString(myString){
  if (myString === ""){ //base case / will end function when needed
    return ''
  }else{
    // console.log(reverseString(myString.substring(1))+ myString.charAt(0));
    return reverseString(myString.substring(1))+ myString.charAt(0) //calls self, - 1 plus the characters prior
  }
}


function isPalindrome(myString){
  if (myString[0] === myString[myString.length - 1] ){//checks to see if starting position match
    if (myString.length > 1) { //if true, checks if length >1
      console.log(myString);//put into console for a visual
      //fires callback to ensure each character matches and passes each test
      isPalindrome(myString.substring(1, myString.length -1))
      return true
    }
  }else{
    return false
  }
}


function addUpTo(myArray, index){
  if (index > 0){
    return addUpTo(myArray, index -1) + myArray[index]
  }else{
    return myArray[0]
  }
}


function maxOf(myArray){
  if (myArray.length > 1){
    let array = myArray.slice(1)
    let firstValue = maxOf(array)
    let secValue = myArray[0]
    if (firstValue > secValue){
      return firstValue
    } else {
      return secValue
    }
  }else{
    return myArray[0]
  }
}


function includesNumber(myArray, element){
  if (myArray.length > 0){
    let array = myArray.slice(1)
    return myArray[0] === element || includesNumber(array, element)
  }else{
    return myArray[0] === element
  }
}




//
