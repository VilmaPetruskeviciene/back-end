console.log('--------masyvai basic---------');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('--------1---------');
/*Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.*/
let arr1 = [];
for (let i = 0; i < 30; i++) {
    arr1.push(rand(5, 25));
}
console.log(arr1);

console.log('--------2a---------');
/*Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;*/
let a1 = 0;
arr1.forEach(a => {
    if (a > 10) {
      a1 += 1;  
    }
});
console.log(a1);

console.log('--------2b---------');
/*Raskite didžiausią masyvo reikšmę ir jos indeksą;*/
arr1.sort((a, b) => b - a);
console.log(arr1[0]);

console.log('--------2c---------');
/*Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;*/
let sum = 0;
arr1.forEach((a, i) => {
    if (i === 0 || i % 2 === 0) {
        sum += a;
    }
})
console.log(sum);

console.log('--------2d---------');
/*Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;*/
let arr2 =arr1.map((a, i) => a - i);
console.log(arr1, arr2);

console.log('--------2e---------');
/*Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;*/
for (let i = 0; i < 10; i++) {
    arr2.push(rand(5, 25))   
}
console.log(arr2);

console.log('--------2f---------');
/*Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);*/
arr3 = [];
arr4 = [];
arr2.map((a, i) => {
    if (i % 2 !== 0) {
        arr3.push(a);
    } else {
        arr4.push(a);
    }
});
console.log(arr2, arr3, arr4);

console.log('--------2g---------');
/*Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;*/
arr2.map((a, i) => {
    if (i % 2 === 0 && a > 15) {
        arr2[i] = 0;
    }
})
console.log(arr2);

console.log('--------2h---------');
/*Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;*/
arr2.find((a, i) => {
    if (a > 10) {
        console.log(i);
    }
})

console.log('--------3---------');
/*Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.*/
function random() {
    let text = [];
    let possible = 'ABCD';
    for (let i = 0; i < 200; i++) {
      text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    }
    return text;
}

let letters = random();
console.log(letters);

let aa = 0;
let bb = 0;
let cc = 0;
let dd = 0;

letters.forEach(a => a === 'A' ? aa += 1 : a === 'B' ? bb += 1 : a === 'C' ? cc += 1 : dd += 1);
console.log(`A = ${aa}, B = ${bb}, C = ${cc}, D = ${dd},`);

console.log('--------4---------');
/*Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.*/

console.log('--------5---------');
/*Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).*/
let arr5 = [];
for (let i = 0; i < 100; i++) {
    if(arr5.indexOf(i) === -1) {
        arr5.push(rand(100, 999));
    }  
}
console.log(arr5);

let arr6 = [];
for (let j = 0; j < 100; j++) {
    if(arr6.indexOf(j) === -1) {
        arr6.push(rand(100, 999));
    }  
}
console.log(arr6);

console.log('--------6---------');
/*Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.*/
let arr56 = [];
arr5.map((a, i) => {
    if (a !== arr6[i]) {
        arr56.push(a);
    }
})
console.log(arr56);

console.log('--------7---------');
/*Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.*/
let arr65 = [];
arr5.map((a, i) => {
    if (a === arr6[i]) {
        arr65.push(a);
    }
})
console.log(arr65);

console.log('--------8---------');
/*Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.*/
let arr8 = [];

console.log('--------9---------');
/*Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.*/
let arr9 = [];
for (let i = 0; i < 2; i++) {
    arr9.push(rand(5, 25));  
}

arr9.map((a, i, t) => {
    while (arr9.length < 10) {
       arr9.push(t[t.length - 1] + t[t.length - 2]); 
    }
})
console.log(arr9);
