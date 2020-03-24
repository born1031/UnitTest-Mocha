function average(array){

    let sum = 0;
    array.forEach( (item) => {
        sum += item;
    });
    return (sum/array.length);
};

module.exports = average;