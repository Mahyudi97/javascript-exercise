//Display Pattern Row as below
// *****
// ****
// ***
// **
// *
// **
// ***
// ****
// *****

function displayPatternRow(row) {
    let pattern = '';
    for(let i=1; i<=row; i++){
        pattern = '';
        
        if(i == Math.ceil(row/2)){
            pattern = pattern + '*'
        }else if(i < Math.ceil(row/2)){
            for(let j=Math.ceil(row/2); j>=i; j--){
                pattern = pattern + '*'
            }
        }else{
            for(let k=0; k<=(i-Math.ceil(row/2)); k++){
                pattern = pattern + '*'
            }
        }
        
        console.log(pattern)
    }
}

displayPatternRow(15);

// Output
// ~ node displayPatternRow.js 
// CTRL + ALT + N