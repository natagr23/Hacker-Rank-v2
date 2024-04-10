arr = [-4, 3, -9, 0, 4, 1];

let positiveArray = [];
let negativeArray = [];
let zeroArray = [];

n = arr.length;
function plusMinus(arr) {
    // Write your code here


    arr.forEach(element => {
        if (element > 0) {
            positiveArray.push(1);
        } else if (element === 0) {
            zeroArray.push(1);
        } else if (element < 0) {
            negativeArray.push(1);
        }
    }
    );
    console.log((positiveArray.length / n).toFixed(6));
    console.log((negativeArray.length / n).toFixed(6));
    console.log((zeroArray.length / n).toFixed(6));


}

plusMinus(arr);