// Question 1
const value = "123";
const result = Number(value) + 7;

console.log(result); 



// Question 2
function checkValue(value) {
    if (!value) {
        return "Invalid";
    }
    return value;
}

console.log(checkValue(0));


// Question 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}



// Question 4
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);



// Question 5
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const mergedArray = [...firstArray, ...secondArray];

console.log(mergedArray);


// Question 6
function getDay(day) {
    switch (day) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getDay(2));



// Question 7
const words = ["a", "ab", "abc"];

const lengths = words.map(function(word) {
    return word.length;
});

console.log(lengths);



// Question 8
function checkDivisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    }

    return "Not divisible by both";
}

console.log(checkDivisibility(15));



// Question 9
const square = (num) => {
    return num * num;
};

console.log(square(5));



// Question 10
const person = {
    name: "John",
    age: 25
};

function getInfo(person) {
    const { name, age } = person;
    return name + " is " + age + " years old";
}

console.log(getInfo(person));



// Question 11
function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));



// Question 12
function delayedSuccess() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Success");
        }, 3000);
    });
}

delayedSuccess().then(function(message) {
    console.log(message);
});



// Question 13
function findLargest(numbers) {
    let largest = numbers[0];

    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

console.log(findLargest([1, 3, 7, 2, 4]));



// Question 14
function getKeys(person) {
    return Object.keys(person);
}

const personData = {
    name: "John",
    age: 30
};

console.log(getKeys(personData));


// Question 15
function splitWords(sentence) {
    return sentence.split(" ");
}

console.log(splitWords("The quick brown fox"));


