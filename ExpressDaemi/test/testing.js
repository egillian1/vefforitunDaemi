var assert = require("assert"); // node.js core module

// Write what you are testing here, indexOf() function in this case
describe('indexOf()', function(){
  // Write what the test should return here
  it('should return -1 when the value is not present', function(){
    // Assert what the test should return and the test itself
    //                   ▼ actual test here
    assert.equal(-1, [1,2,3].indexOf(4));
    //            ^ expected return value here
  });

  // Perform another test on indexOf()
  it('should return 0 when the value is the first value in the array', function(){
    assert.equal(0, [1,2,3].indexOf(1));
  });
});

// Something is not right here. These tests are failing and need to be changed
describe('Strict equals', function(){
  it('should return true when the values are exactly the same', function() {
    assert.equal(true, false === "false");
    //                             ^ Change this value so the test passes
  });

  it('should return false when values are not exactly the same', function(){
    assert.equal(false, 1 === 1);
    //                        ^ Change this value so the test passes
  });
});


// These tests are failing. The function is correct but the tests are not.
// Change the tests so they pass.
describe('theGrayWizard()', function(){
  it('should return true when the passphrase is uttered', function() {
    assert.equal(true, theGrayWizard("Ash nazg durbatuluk"));
    //                                      ^ Change this value
  });
});

// Returns true when the correct passphrase is used
function theGrayWizard(passphrase){
  if(passphrase === "friend"){
    return true;
  } else {
    return "You shall not pass";
  }
}

// These tests are failing. The tests are correct but the function is failing.
// Change the function so the tests pass.
describe('squared()', function(){
  it('should return 9 when the input is 3', function() {
      assert.equal(9, squared(3));
    });

  it('should return 9 when the input is 3', function() {
    assert.equal(49, squared(7));
  });
});


// Should return the input number squared, i.e. inputnumber^2

function squared(inputNumber){
  return Math.pow(2, inputNumber);
}
