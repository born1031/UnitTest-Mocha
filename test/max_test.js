const should = require('should');
const max = require('../modules/max');

describe('#max', () => {
    
    // Check the maximun is 99.
    it('should return the maximun in array', done => {
        var maximun = max([1, 3, 5, 99, 88, 43]);
        maximun.should.equal(99);
        done();
    });

    // Check the array is undefined.
    it('should return undefined when array is empty', done => {
        var maximun = max([]);
        (maximun === undefined).should.equal(true);
        done();
    });
});