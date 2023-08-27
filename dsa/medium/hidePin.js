// Hide that PIN!

// Write a function that converts a given PIN to a series of texts that ensures it can be sent out in plain sight without anyone knowing it.
// You first convert the given input number into binary and then use the table below to generate the string equivalent.
// 1 = pop
// 10 = double rip
// 100 = hide your mints
// 1000 = fall
// 10000 = reverse the order of the output.


function hidePIN(pin) {
    let binary = pin.toString(2);
    let result = [];
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === "1") {
            let powerOfTwo = Math.pow(2, binary.length - 1 - i);
            switch (powerOfTwo) {
                case 1:
                    result.push("pop");
                    break;
                case 2:
                    result.push("double rip");
                    break;
                case 4:
                    result.push("hide your mints");
                    break;
                case 8:
                    result.push("fall");
                    break;
                case 16:
                    result.reverse();
                    break;
            }
        }
    }
    return result;
}

let ans = hidePIN(3);
console.log(ans)

let ans2 = hidePIN(19);
console.log(ans2)