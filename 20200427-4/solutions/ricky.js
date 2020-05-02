/**
 * Reverse Every Other Word in the String
 * Reverse every other word in a given string, then return the string.
 * Throw away any leading or trailing whitespace,
 * while ensuring there is exactly one space between each word.
 * Punctuation marks should be treated as if they are a part of
 * the word in this kata.
 * 
 * Example #1: reverse(“Reverse this string, please!“);
 * --> “Reverse siht string, !esaelp”
 * Example #2: reverse(“I really don’t like reversing strings!“);
 * --> “I yllaer don’t ekil reversing !sgnirts”
 * 
 *  |=================================L O G I C===================================|
 *  |                                                                             |
 *  | 1.  START OF PROCESS                                                        |
 *  |                                                                             |
 *  | 2.  SPLIT STRING INTO AN ARRAY SEPARATED BY EMPTY SPACE                     |
 *  |                                                                             |
 *  | 3.  AS WE LOOP THROUGH ARRAY,                                               |
 *  |     IF THE INDEX IS AN ODD NUMBER, REVERSE THE STRING                       |
 *  |                                                                             |
 *  | 4.  RETURN THE ARRAY< JOINED BACK BY SINGLE WHITESPACE                      |
 *  |                                                                             | 
 *  | 5. END OF PROCESS                                                          |
 *  |                                                                             |
 *  |=============================================================================|
 */

const reverseSentence = (str) => {
    // here we make an array for every word, separated by  " "
    const result = str.split(' ');
    // here we loop each string
    for (let i = 0; i < result.length; i++) {
      // reverse for odd index
      if (i % 2 !== 0) {
        result[i] = result[i].split('').reverse().join('');
      }
    }
    // here we return joined semi-reversed string
    return result.join(' ');
  };
  
console.log(reverseSentence('Reverse this string, please!')); // Reverse siht string, !esaelp
console.log(reverseSentence('I really don’t like reversing strings!')); // I yllaer don’t ekil reversing !sgnirts