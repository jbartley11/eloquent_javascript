let myArray = [1, 2, 3, 4, 5, 6, 7];


let reverseArrayInPlace = array => {
    let lastValue = array.length - 1;
    let counter = lastValue - 1;
    let sliceArray = array.slice(0, lastValue);

    while (counter >= 0){
        // remove first value
        array.shift();

        // add last value in sliceArray to array
        array.push(sliceArray[counter]);
        counter -= 1;
    }
}

reverseArrayInPlace(myArray);

console.log(myArray);
// 

function onClick() {
    reverseArrayInPlace(myArray);

    console.log(myArray);
  }


var button = document.querySelector('button');
button.addEventListener('click', onClick);