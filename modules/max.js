function max(array){

    let maxNum = array[0];
    array.forEach( (item) => {
        maxNum = item > maxNum ? item : maxNum;
    });
    return maxNum;
};

module.exports = max;