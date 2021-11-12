// (JS-201)
for (let x = 0; x < 5; x = x + 1) {
    let y = 0;
    var var1 = "";
    while (y < x + 1) {
        var1 += "#";
        y++;
    }
    console.log(var1);
}

// (JS-202) FizzBuzz
for (let a = 1; a <= 101; a++) {
    if (a % 3 == 0) console.log("Fizz");
    else if (a % 5 == 0) console.log("Buzz");
    else if (a % 3 == 0 && a % 3 == 00) console.log("FizzBuzz");
    else console.log(a);
}

// (JS-203) šahovnica
let velicina = 8;
let b = "";
for (let c = 0; c < velicina; c++) {
    if (c % 2 == 0) {
        for (let d = 1; d <= velicina; d++) {
            if (d % 2 == 0) b += "#";
            else b += " ";
        }
        console.log(b);
        b = "";
    }
    else {
        for (let d = 0; d < velicina; d++) {
            if (d % 2 != 0) b += " ";
            else b += "#";
        }
        console.log(b);
        b = "";
    }
}
1