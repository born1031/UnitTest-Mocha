const should = require('should');
const min = require('../modules/min');

describe('#min', () => {
    
    // Check the minimun is 1.
    it('should return the minimun in array', done => {
        var minimun = min([78, 55, 87, 45, 3, 27, 1, 77, 34]);
        minimun.should.equal(1);
        done();
    });

    // Check the array is undefined.
    it('should return undefined when array is empty', done => {
        var minimun = min([]);
        (minimun === undefined).should.be.true;
        done();
    });
});