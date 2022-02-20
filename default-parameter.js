function add(num1, num2 = 0) {
    console.log(num1, num2)
    // option 2
    // num2 = num2 || 0;
    // option 1
    // if (num2 == undefined) {
    //     num2 = 0;             old system
    // }
    const sum = num1 + num2;
    return sum;
}

const favNum = add(15);
console.log(favNum);