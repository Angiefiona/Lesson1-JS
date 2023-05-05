// Write a function that takes an array of numbers as input and returns the sum of all the numbers
function sumNumbers(numbers){
    let result = 0;
    for(let i = 0;i<=numbers.length; i++){
        result+=i;
    }
    return result;
  
} 
numbers = [4,5,6,7,3,2]
console.log(sumNumbers(numbers))

// Write a function that takes two numbers as input and returns true if their sum is greater than 100,
// And false otherwise
function sum_greater_than_100(sum){
    sum=0
    for(i in sum){
        if(i>=100){
            return true
        }
        else{
            return false
        }
    }
}
const a=40
const b=20
const sum=a+b
console.log(sum_greater_than_100(sum))


// Write a function that takes a string as input and returns the number of vowels in the string
function countStrings(str){
    let count = 0
    let vowels = "a,e,i,o,u" 
    for (let i = 0;i<= str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count;


}
str = "naserian"
console.log(countStrings(str))

// // Write a function that takes in a array of numbers as a parameter and returns the second largest number in the array
// function secondLargestNumber(arr){
//     for(let i = 0; i< arr.length;i++){
//         if(arr[i] > largest){
//             se
//         }
//     }
// }
// Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise
function ispalindrome(str){
    reversedStr=str.split("").reverse().join("")
    return str===reversedStr
}
console.log(ispalindrome("dad"))