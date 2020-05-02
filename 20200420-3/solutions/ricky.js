/** 
 *  The Deaf Rats of Hamelin
 *  Story: The Pied Piper has been enlisted to play his magical tune
 *  and coax all the rats out of town (they run towards his tune).
 *  But some of the rats are deaf and are going the wrong way!
 *  
 *  The Task: How many deaf rats are there?
 *  Legend:
 *  P = The Pied Piper
 *  O~ = Rat going left
 *  ~O = Rat going right
 *  
 *  Examples:
 *  - ex1 ~O~O~O~O P has 0 deaf rats
 *  - ex2 P O~ O~ ~O O~ has 1 deaf rat
 *  - ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
 *  
 *  
 *  |=================================L O G I C===================================|
 *  |                                                                             |
 *  | 1.  START OF PROCESS                                                        |
 *  |                                                                             |
 *  | 2.  TRIM ALL WHITESPACES FROM THE STRING WE GOT AS INPUT                    |
 *  |                                                                             |
 *  | 3.  MAKE A NEW VARIABLE AS AN ARRAY TO HOLD ALL VALUES                      |
 *  |     OF EITHER "piper", "left" or "right"                                    |
 *  |                                                                             |
 *  | 4.  MAKE A NEW VARIABLE TO STORE HOW MANY DEAF RATS ARE THERE               |
 *  |                                                                             |
 *  | 5.  AS WE LOOP THROUGH STRING, IF "P" IS PRESENT, ADD "piper" TO THE ARRAY  |
 *  |                                                                             |
 *  | 6.  IF "O~" IS PRESENT, ADD "left" AND SKIP THE NEXT INDEX                  |
 *  |                                                                             |
 *  | 7.  IF "~O" IS PRESENT, ADD "right" AND SKIP THE NEXT INDEX                 |
 *  |                                                                             |
 *  | 8.  GET INDEX OF "piper" AND STORE IT INTO A NEW VARIABLE                   |
 *  |                                                                             |
 *  | 9.  LOOP ONE MORE TIME, THIS TIME LOOPING THROUGH THE ARRAY                 |
 *  |                                                                             |
 *  | 10. IF THE ELEMENT IN ARRAY IS "left" AND THE INDEX IS LESS THAN "piper"    |
 *  |     INCREMENT THE DEAF COUNT                                                |
 *  |                                                                             |
 *  | 11. IF THE ELEMENT IN ARRAY IS "right" AND THE INDEX IS MORE THAN "piper"   |
 *  |     INCREMENT THE DEAF COUNT                                                |
 *  |                                                                             |
 *  | 12. IF THE DEAF COUNT IS 1, RETURN "{DEAF COUNT} deaf rat"                  |
 *  |                                                                             |
 *  | 13. OF NOT, RETURN "{DEAF COUNT} deaf rats"                                 |
 *  |                                                                             |
 *  | 14. END OF PROCESS                                                          |
 *  |                                                                             |
 *  |=============================================================================|
 */ 

function countDeafRats(str) {
    // to remove all whitespace
	str = str.split(' ').join('');
    // to fill the array with one of three: left, right or piper
	const map = [];
    // to monitor how much deaf rats are present
	let deafCount = 0;
    // this is to insert values into the map variable,
    // with either left, right, or piper
	for (let i = 0; i < str.length; i++) {
		if (str[i] == 'P') {
			map.push('piper');
		} else if (str[i] + str[i + 1] == 'O~') {
			map.push('left');
			i++;
		} else if (str[i] + str[i + 1] == '~O') {
			map.push('right');
			i++;
		}
	}
    // this is to find which index is the piper at
	const piper = map.indexOf('piper');
    // this is to count the deaf rats
	for (let i = 0; i < map.length; i++) {
		switch (map[i]) {
			case 'left':
				if (i < piper) deafCount++;
				break;
			case 'right':
				if (i > piper) deafCount++;
				break;
			default:
				break;
		}
	}
    // using ternary to display the correct message
	return `${deafCount} deaf rat${deafCount == 1 ? '' : 's'}`;
}

console.log(countDeafRats('~O~O~O~O P')); // 0 deaf rats
console.log(countDeafRats('P O~ O~ ~O O~')); // 1 deaf rat
console.log(countDeafRats('~O~O~O~OP~O~OO~')); // 2 deaf rats
