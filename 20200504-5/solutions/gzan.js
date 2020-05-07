function isPangram(string) {
    const countAlphabet = 26;
    //get rid of everything but letters and then convert them to lower case:
    const cleanedStr = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    //get rid of redundance
    const countUniqueChars = [...new Set(cleanedStr)].length;
    return countUniqueChars == countAlphabet;
}