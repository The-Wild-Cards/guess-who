// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { findById, renderTableRow } from '../common/utils.js';

const test = QUnit.test;
test('testing that findById finds character by Id', function (assert) {
    const mockData = [{
        id: 'walter',
        name: 'Walter',
        horns: false,
        hat: true,
        hair: true,
        fin: false,
        oneEye: false,
        twoEyes: true,
        threeEyes: false,
        fourEyes: false,
        spots: false,
        nose: false,
        ears: false
    }, {
        id: 'telly',
        name: 'Telly',
        horns: false,
        hat: false,
        hair: false,
        fin: false,
        oneEye: true,
        twoEyes: false,
        threeEyes: false,
        fourEyes: false,
        spots: false,
        nose: true,
        ears: false
    }, {
        id: 'opus',
        name: 'Opus',
        horns: false,
        hat: true,
        hair: false,
        fin: false,
        oneEye: false,
        twoEyes: true,
        threeEyes: false,
        fourEyes: false,
        spots: false,
        nose: false,
        ears: false
    }, {
        id: 'zed',
        name: 'Zed',
        horns: false,
        hat: false,
        hair: false,
        fin: true,
        oneEye: false,
        twoEyes: true,
        threeEyes: false,
        fourEyes: false,
        spots: false,
        nose: false,
        ears: false
    },
    ];

    //Arrange
    // Set up your parameters and expectations
    const id = 'walter';
    const expected = {
        id: 'walter',
        name: 'Walter',
        horns: false,
        hat: true,
        hair: true,
        fin: false,
        oneEye: false,
        twoEyes: true,
        threeEyes: false,
        fourEyes: false,
        spots: false,
        nose: false,
        ears: false
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const foundCharacter = findById(mockData, id);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(foundCharacter, expected);
});
test('testing that renderTableRow renders table row', assert => {
    //Arrange
    // Set up your parameters and expectations
    const wins = 3;
    const losses = 2;
    const userName = 'Steve';
    const expected = '<tr><td class="align-left"></td><td>3</td><td>2</td><td class="win-loss-percentage">1.5</td></tr>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderTableRow(userName, wins, losses);
    const html = dom.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(html, expected);
});
