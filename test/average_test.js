const should = require('should');
const average = require('../modules/average');

describe('#average', () => {

    // Check the result is equal 2.5 or not.
    it('should return the average of array', done => {
        var avg = average([4, 1, 3, 2]);
        avg.should.equal(2.5);
        done();
    });

    // Check the return 'NaN'.
    it('should return NaN when array is empty', done => {
        var avg = average([11]);
        isNaN(avg).should.be.true;
        done();
    });
});