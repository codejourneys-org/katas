const removeItems = (mainArr, indexes) => {
    //remove the indexes one by one starting from the end 
    //not to change the indexes of others
    const size = indexes.length;
    for (let i = size - 1; i >= 0; i--) {
        mainArr.splice(indexes[i], 1);
    }
    return mainArr;
}

function deleteNth(arr, n) {
    //if no redundance allowed, then return the set of arr where there can only be unique items
    if (n == 1) return [...new Set(arr)];
    //copy the array not to alter the given one
    const newArr = [...arr];
    //make a map to get the count of each num
    const numMap = {};
    //collect the indexes of items to be removed
    const indexesOfUnwanted = [];
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        let num = arr[i];
        if (numMap[num]) {
            numMap[num] < n ? numMap[num]++ : indexesOfUnwanted.push(i);
        } else {
            numMap[num] = 1;
        }
    }

    const result = removeItems(newArr, indexesOfUnwanted);
    return result;
}

