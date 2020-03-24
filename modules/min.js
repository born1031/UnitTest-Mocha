function min(array){

    let minNum = array[0];
    array.forEach( (item) => {
        minNum = item < minNum ? item : minNum;
    });
    return minNum;
};

module.exports = min;