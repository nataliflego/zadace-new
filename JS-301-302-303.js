//JS-301

function min(x, y){
  if (x<y) return x
  else return b;
}
console.log(min(0, 4)) // → 0
console.log(min(0, -4)) // → -4


// JS-302

function istiZnakovi(a) {
    let vari = a.match(/([a-zA-Z])\1*/g)||[]; //matches any character from lowercase a through uppercase Z
    vari = vari.flatMap( function(el) { //flatMap mapira funkciju na svaki el. pa ravna ("flattens") rez. u jedan array
        return [el.length];
    });
    return Math.max(...vari);  //najveci
}
console.log(istiZnakovi("baaaccd")) // → 3
console.log(istiZnakovi("ba2dll")) // → 2


// JS-303, napisati funkciju ackermann

function ackermann(m, n) {
 return m === 0 ? n + 1 : ackermann(m - 1, n === 0  ? 1 : ackermann(m, n - 1));
}
console.log(ackermann(0, 5)) // → 6
console.log(ackermann(5, 0)) // → 65533
console.log(ackermann(3, 6)) // → 509
console.log(ackermann(3, 3)) // → 61
