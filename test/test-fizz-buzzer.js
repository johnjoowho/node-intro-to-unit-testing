const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer').default;

describe('fizzBuzzer', function() {

  // test the normal case
  it('should return "fizz-buzz" for multiples of 15', function() { 
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz'); 
    });
  }); 

  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 15].forEach(function(input){
      expect(fizzBuzzer(input)).to.equal('buzz'); 
    });
  });

  it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz'); 
    });
  })

  it ('should return number if not multiples of 3 or 5', function() { 
    [1, 4, 16].forEach(function(input) { 
      expect(fizzBuzzer(input)).to.equal(input); 
    });
  });

  it('should raise error if input isn\'t a number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]]; 
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input); 
      }).to.throw(Error); 
    });
  }); 
  
}); 