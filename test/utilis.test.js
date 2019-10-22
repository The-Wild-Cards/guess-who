// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { findById } from '../common/utilis.js';

const test = QUnit.test;

test('testing that findById finds character by Id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'walter';
    const expected = 'walter';

    //Act 
    // Call the function you're testing and set the result to a const
    const foundCharacter = findById(characterArray, id);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(foundCharacter.name, expected);
});
