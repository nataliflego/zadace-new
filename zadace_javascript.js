//1.zadatak   (JS-101)
let a = prompt("Unesi prvi broj");
let b = prompt("Unesi drugi broj");
let c = prompt("Unesi treći broj");
let d = prompt("Unesi četvrti broj");
let maks;
if (a > b && a > c && a > d) {
    maks = a;
} if (b > a && b > c && b > d) {
    maks = b;
} if (c > a && c > b && c > d) {
    maks = c;
} if (d > a && d > b && d > c) {
    maks = d;
}
console.log("Najveći između njih je: " + maks);

// 2.zadatak  (JS-102)
let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka;
if (bodovi < 50) poruka = "Nedovoljan 1";
else if (bodovi < 63) poruka = "Čestitam, 2";
else if (bodovi < 76) poruka = "Čestitam, 3";
else if (bodovi < 89) poruka = "Čestitam, 4";
else poruka = "Čestitam, 5";

console.log(poruka);

