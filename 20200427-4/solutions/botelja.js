const reverseEveryOtherWorld = (str) => {
  //make an array of evry word in string
  const result = str.split(' ');

  for (let i = 0; i < result.length; i++) {
    //find evry other word and reversed
    if (i % 2 !== 0) {
      result[i] = result[i].split('').reverse().join('');
    }
  }
  //return the revesed string
  return result.join(' ');
};
