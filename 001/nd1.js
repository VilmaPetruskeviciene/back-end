console.log('hello');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('----1----');
let x = [];
for (let i = 0; i < 2; i++) {
    x.push(rand(0, 4));
}
if (x[0] > x[1]) {
    console.log(x[0] / x[1]);
} else {
    console.log(x[1] / x[2]);
}

console.log('----2----');
let y = [];
for (let i = 0; i < 3; i++) {
    y.push(rand(0, 25));  
}
if (y[0] > y[1] && y[0] < y[2] || y[0] < y[1] && y[0] > y[2]) {
    console.log(y[0]);
} else if (y[1] > y[0] && y[1] < y[2] || y[1] < y[0] && y[1] > y[2]) {
    console.log(y[1]);
} else {
    console.log(y[2]);
}

console.log('----3----');
const a = rand(1, 10);
const b = rand(1, 10);
const c = rand(1, 10);
if (Math.max(a, b, c) === c && (a + b) > c || Math.max(a, b, c) === b && (a + c) > b || Math.max(a, b, c) === a && (c + b) > a) {
    console.log('galima');
} else {
    console.log('negalima');
}
console.log(a, b, c);


console.log('----4----');
let t = [];
for (let i = 0; i < 4; i++) {
    t.push(rand(0, 2));
}
let t1 = 0;
let t2 = 0;
let t3 = 0;
for (let i = 0; i < t.length; i++) {
    if (t[i] === 0) {
        t1 += 1;
    } else if (t[i] === 1) {
        t2 += 1;
    } else if (t[i] === 2) {
        t3 += 1;
    } 
}
console.log(t1, t2, t3);

console.log('----5----');
for (let i = 0; i < 3; i++) {
    let sk = rand(-10, 10);
    sk < 0 ? console.log(`+${sk}+`) : sk === 0 ? console.log(`*${sk}*`) : sk > 0 ? console.log(`-${sk}-`) : console.log();
}

console.log('----6----');
let kaina = 1;
let zvakes = rand(5, 3000);
let suma = zvakes * kaina;
suma > 2000 ? console.log(zvakes, (kaina - (kaina * 0.04)), (suma - (suma * 0.04))) : suma > 1000 ? console.log(zvakes, (kaina - (kaina * 0.03)), (suma - (suma * 0.03))) : console.log(zvakes, kaina, suma);

console.log('----7----');
let vid = [];
for (let i = 0; i < 3; i++) {
    vid.push(rand(0, 100));
}
let vid1 = 0;
for (let i = 0; i < vid.length; i++) {
    vid1 += vid[i];
}
let vid2 = 0;
let s = 0;
for (let j = 0; j < vid.length; j++) {
    if (vid[j] > 10 && vid[j] < 90) {
        vid2 += vid[j];
        s += 1;
    }  
}
console.log(vid, (vid1 / vid.length), (vid2 / s));


