//Pair programmed with Gabe, Idel, and Jacob
const wordSearch = (letters, word) => { 
    // check for rows
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    // go through 2d array column by column and build a new array 
    let newArray = [];
    for (let i = 0; i < letters[0].length; i++) { 
        let joinedColumn = [];
        for (let j = 0; j < letters.length; j++) {
            joinedColumn.push(letters[j][i]);
        }
        newArray.push(joinedColumn);
    }

    // newArray after join looks like this:
    // newArray = ["ASYHWBUOE", "WEFMHFBDZ", "CICJCRTCK"]

    // check for columns
    const columnJoin = newArray.map(ls => ls.join(''));
    for (l of columnJoin) {
        if (l.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;