//Display Diamond Pattern as below
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function displayDiamondPattern(row) {
    //Upper
    for (let i = 1; i <= row; i++) {
        let pattern = '';
        for (let j = 1; j <= row - i; j++) {
            pattern += ' ';
        }
        for(let k = 1; k <= i*2-1; k++){
            pattern += '*';
        }
        console.log(pattern);
    }
    //Bottom
    for (let i = 1; i <= row; i++) {
        let pattern2 = '';
        for(let j = 1; j <= i; j++){
            pattern2 += ' ';
        }
        for(let k = 1; k <= (row*2) - (i*2) -1; k++){
            pattern2 += '*';
        }
        console.log(pattern2)
    }
}

displayDiamondPattern(5);

// Output
// ~ node displayDiamondPattern.js 
// CTRL + ALT + N
