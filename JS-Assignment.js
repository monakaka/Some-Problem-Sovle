// 1st problem solving
//Function description: mindGame function get a number input and do sum,multiply,divided,minus calculation.

function mindGame(num) {
    if (typeof num === 'number') {
        const multiPly = num * 3;
        const sum = multiPly + 10;
        const divided = sum / 2;
        const minus = divided - 5;
        return minus;
    }
    else {
        let warningMsg = 'Please Provide a number';
        return warningMsg;
    }

}

const myNumber = 10;
const mindGameOutPut = mindGame(myNumber);
console.log(mindGameOutPut);

// 2nd problem solving
// function description: this function return odd or even.

function evenOdd(name) {
    let nameLength = name.length;
    if (typeof name !== 'string') {
        let warningMsg = 'Please Provide a string.';
        return warningMsg;
    }
    else if (nameLength % 2 === 0) {
        const evenOutput = 'even';
        return evenOutput;
    }
    else {
        const oddOutput = 'odd';
        return oddOutput;
    }
}



const myName = 'Prioyota Rahman Rose';
const evenOddOutput = evenOdd(myName);
console.log(evenOddOutput);



// 3rd problem solving

// Function description: isLGSeven function get a input and minus it from 7 and check the result is it big from 7? if it will big from 7 the output will be double from this input. or it will smaller than 7 . The output will this result. 


function isLGSeven(inputNum) {
    let minusFromSeven = inputNum - 7;
    if (typeof inputNum !== 'number') {
        let warningMsg = 'Please Provide a Numeric Data.';
        return warningMsg;
    }
    else if (minusFromSeven < 7) {
        return minusFromSeven;
    }
    else {
        let multiplyWithTwo = inputNum * 2;
        return multiplyWithTwo;
    }
}


const myNum = 14;
const outputNum = isLGSeven(myNum);
console.log(outputNum);


// 4th problem solving

// Function description: this function provide me the number of negative element of the input array.

function findingBadData(age) {
    let badData = 0;
    for (let i = 0; i < age.length; i++) {
        let singleAge = age[i];
        if (typeof age !== 'object') {
            let warningMsg = 'Please Provide a object type data.';
            return warningMsg;
        }
        else if (singleAge < 0) {
            badData += 1;
        }
    }

    return badData;
}



const ages = [12, 34, -56, -78, 44, -45, 35, -76];
const outputAges = findingBadData(ages);
console.log(outputAges);



// 5th problem Solving
// Function description: this function get 3 input and sum them then play a condition then return output.

function gemsToDiamond(gemsFirst, gemsSecond, gemsThird) {
    const firstFriendGemsMultiply = gemsFirst * 21;
    const secondFriendGemsMultiply = gemsFirst * 32;
    const thirdFriendGemsMultiply = gemsFirst * 43;

    const totalGemsMultiply = firstFriendGemsMultiply + secondFriendGemsMultiply + thirdFriendGemsMultiply;
    if (typeof gemsFirst !== 'number' || typeof gemsSecond !== 'number' || typeof gemsThird !== 'number') {
        let warningMsg = 'Please Provide a number type data.';
        return warningMsg;
    }
    else if (totalGemsMultiply < 1000 * 2) {
        return totalGemsMultiply;
    }
    else {
        let outputOfGems = totalGemsMultiply - 2000;
        return outputOfGems;
    }
}

const firstFriendGems = 40;
const secondFriendGems = 50;
const thirdFriendGems = 60;

const outPutGemsDiamond = gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems);
console.log(outPutGemsDiamond);
