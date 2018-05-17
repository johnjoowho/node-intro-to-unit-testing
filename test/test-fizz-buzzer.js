const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  // test the normal case
  it('should return the correct string', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 5, b: 3, expected: 'fizz-buzz'},
      {a: 1, b: 5, expected: 'buzz'},
      {a: 3, b: 1, expected: 'fizz'}
    ];
    // for each set of inputs (a, b), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a, input.b);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        adder(input[0], input[1]);
      }).to.throw(Error);
    });
  });
});