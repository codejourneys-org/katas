// Reverse Every Other Word in the String

function reverseEveryOtherWord(str) {
  return str
    .split(' ')
    .map((word, index) =>
      index % 2 === 1 ? word.split('').reverse().join('') : word
    )
    .join(' ')
}

// how it works..
// use split() to convert the string into an array  // ['Reverse', 'this', 'string,' 'please!']
// .map() creates a new array populated, with the results of calling a provided function, on every element in the calling array. It's like a for loop sorta.
// the function checks if the index is an even number // (index % 2 === 1)
// if the function evaluates to true, the word gets reversed // word.split('').reverse().join('')
// and then .join() is used at the end to convert the array back to a string

console.log(reverseEveryOtherWord('Reverse this string, please!'))
console.log(reverseEveryOtherWord('I really don’t like reversing strings!'))
