const priyo = 'Furfuri Begum';

// default parameter 
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;
}

// template String
const myPeople = `My lovely person is ${priyo} and his full name is ${getName('Akbar')}. My name is ${priyo}.`;
console.log(myPeople);

// arrow function 
const getName2 = (first, last) => first + ' ' + last;
const name2 = getName2('Akbar', 'Chowdhury');
console.log(name2)