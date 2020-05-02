function reverse(str) {
    //make arr of words
    const arr = str.split(' ');
    //get rid of extra spaces!! 
    const cleaned = arr.filter(word => word.length != '');

    //convert every other word to arr, reverse it and convert back to str
    for (let i = 1; i < cleaned.length; i += 2) {
        cleaned[i] = cleaned[i].split('').reverse().join('');
    }

    //convert the new arr to str
    const result = cleaned.join(' ');
    return result;
}