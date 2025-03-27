// Find the last element of the following arrays.
let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where", 12 , 56];
let lastElementarr1 = arr1.pop();
let lastElementarr2 = arr2.pop();

console.log(lastElementarr1);
console.log(lastElementarr2);

console.log(arr1);
console.log(arr2);


// Write a JS program that will join the following array elements into a string
let myPets = ["cow", "bird", "snake", "dog"];
let petString = myPets.join(",");
console.log(petString);

// Write a JS script to sort the following array items. 
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr4 = arr3.sort()
console.log(arr4)


// Write a program to remove duplicates from the following array.
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let withoutDuplicate = arr.filter((item, index) => arr.indexOf(item) === index);
let duplicatesArr = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log("Array without duplicates:", withoutDuplicate);
console.log("Array with duplicates only:", duplicatesArr);

// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found". 
let arr5 = ["the", "way", "x", 4];
let searchWord = "food";

if (arr5.includes(searchWord)) {
  console.log(searchWord);
} else {
  console.log("The search word was not found.");
}

// Write a JS script to sort the following string:let word = "renniw"
let word = "renniw";
let wordArray = word.split('');
wordArray.sort();
let sortedWord = wordArray.join('');

console.log(sortedWord);


// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index
let arr8 = ["Banana", "Mango", "Orange", "Pear", "Watermelon", "Thornmelon", "Pawpaw", "Apple", "Grapes", "Pinneapple"];
 arr8[5] = "Tomato";
console.log("Array after inserting 'Tomato':", [arr8]);