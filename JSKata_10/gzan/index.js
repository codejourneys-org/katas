const MORSE_CODE = { "-.-.-.": ";", "-...-": "=", "---": "O", "----.": "9", "-..-.": "/", ".-...": "&", "...--": "3", ".--": "W", "--": "M", "--..": "Z", ".----.": "'", "-.-.--": "!", "-...": "B", "..-": "U", ".----": "1", "-.--.-": ")", ".-": "A", "-....-": "-", "...-": "V", "...---...": "SOS", "-.--": "Y", "..": "I", "--.-": "Q", "-.": "N", "..---": "2", "-....": "6", "---...": ",", ".-.-.": "+", ".--.-.": "@", "....-": "4", "-----": "0", ".-.-.-": ".", "-.-.": "C", ".": "E", "..-.": "F", ".---": "J", "-.-": "K", ".-..": "L", ".-.": "R", "...": "S", "--.": "G", "---..": "8", "..--..": "?", "-.--.": "(", ".--.": "P", ".....": "5", "..--.-": "_", "-..": "D", ".-..-.": "\"", "-": "T", "....": "H", "--..--": ",", "...-..-": "$", "--...": "7", "-..-": "X" }

decodeMorse = function (morseCode) {

    let decodedStr = '';
    const words = morseCode.split('   ');

    for (let word of words) {
        let chars = word.split(' ');
        
        for (let char of chars) {
            decodedStr += MORSE_CODE[char] || '';
        }
        //if the code was undefined and therefore it is not added, avoid adding a space
        if (decodedStr != '') {
            decodedStr += ' ';
        }

    }
    //get rid of the extra space at the end
    return decodedStr.slice(0, -1);
}
