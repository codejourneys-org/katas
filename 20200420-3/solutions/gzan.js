function countDeafRats(town) {
    // Get rid of empty spaces 
    const newTown = town.split(' ').join('');

    const pIndex = newTown.indexOf("P");
    let deafRats = 0;

    //get number of deaf rats on the left of P
    for (let i = 0; i < pIndex; i += 2) {
        if (newTown[i] == "O") deafRats++;
    }

    //get number of deaf rats on the right of P
    for (let i = pIndex + 1; i < newTown.length; i += 2) {
        if (newTown[i] == "~") deafRats++;
    }

    return deafRats;
}