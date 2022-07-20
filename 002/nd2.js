console.log('--------masyvai basic---------');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('--------1---------');
/*Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.*/
let arr1 = [...Array(30)].map(_ => rand(5, 25));
console.log(arr1);

console.log('--------2a---------');
/*Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;*/
let a1 = 0;
arr1.forEach(a => a > 10 ? a1 += 1 : null);
console.log(a1);

console.log('--------2b---------');
/*Raskite didžiausią masyvo reikšmę ir jos indeksą;*/
let did = Math.max(...arr1);
let ind = arr1.indexOf(Math.max(...arr1));
console.log('Max reiksme ' + did + ' jos indeksas ' + ind);

console.log('--------2c---------');
/*Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;*/
let sum = 0;
arr1.forEach((a, i) => {
    if (i % 2 === 0) {
        sum += a;
    }
})
console.log(sum);
/*
console.log(arr1.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b));
*/
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
/*
arr2.push(...([...Aray(10)].map(_ => rand(5, 25))));
*/
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
let bigger = arr2.findIndex(a => a > 10);
console.log(bigger);
/*
mas = [2, 100, 8, 18];
let i = -1;
while (i < mas.length && mas[++i] <= 10)
console.log(i > mas.length - 1 ? -1 : i);
*/
console.log('--------3---------');
/*Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.*/

let possible = ['A', 'B', 'C', 'D'];
let letters = [...Array(200)].map(_ => possible[rand(0, possible.length - 1)]);
console.log(letters);

let aa = 0;
let bb = 0;
let cc = 0;
let dd = 0;

letters.forEach(a => a === 'A' ? aa += 1 : a === 'B' ? bb += 1 : a === 'C' ? cc += 1 : dd += 1);
console.log(`A = ${aa}, B = ${bb}, C = ${cc}, D = ${dd},`);
/*
const mas = [...Array(200)].map(_ => ['A', 'B', 'C', 'D'][rand(0, 3)]);
const rez = {A: 0, B: 0, C: 0, D: 0};
mas.forEach(a => rez[a]++);
*/
console.log('--------4---------');
/*Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.*/
let mas1 = [...Array(200)].map(_ => possible[rand(0, possible.length - 1)]);
console.log(mas1);
let mas2 = [...Array(200)].map(_ => possible[rand(0, possible.length - 1)]);
console.log(mas2);
let mas3 = [...Array(200)].map(_ => possible[rand(0, possible.length - 1)]);
console.log(mas3);

let masBendr = [];
mas1.map((_, i) => masBendr.push(mas1[i] + mas2[i] + mas3[i]));
console.log(masBendr);

let unik = 0;
masBendr.forEach((a, i) => {
    if (masBendr.indexOf(a) === i) {
        unik += 1;
    }
})
console.log(unik);

let uniq = [...new Set(masBendr)];
console.log(uniq, uniq.length);
/*
const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i);
console.log(uniqueAges);
*/
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
/*
console.log('-----------------');
const m1 = new Set();
while (m1.size < 100) {
    m1.add(rand(100, 999))
}
let mas11 = [...m1];
console.log(mas11);

const m2 = new Set();
while (m2.size < 100) {
    m2.add(rand(100, 999))
}
let mas12 = [...m2];
console.log(mas12);
*/
console.log('--------6---------');
/*Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.*/
let arr56 = [];
arr5.forEach(a => {
    if (arr6.includes(a)) {
        
    } else {
        arr56.push(a);
    }
})
console.log(arr56);

console.log('--------7---------');
/*Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.*/
let arr65 = [];
arr5.forEach(a => {
    if (arr6.includes(a)) {
        arr65.push(a);
    }
})
console.log(arr65);

console.log('--------8---------');
/*Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.*/
let arr8 = [];
for (let i = 0; i < arr5.length; i++) {
    arr8[arr5[i]] = arr6[i];
}
console.log(arr8);

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



console.log('----Javasript tarpinio žinių patikrinimo testas1----');

/*
Duotas toks vardų masyvas:
const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];
*/
const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];
console.log('--------1---------');
/*Sukurkite masyvą cats iš 10 elementų, kurių reikšmės atsitiktiniai skaičiai nuo 2 iki 12;
Sukurkite masyvą owners iš 10 elementų, kurių reikšmės atsitiktiniai vardai iš masyvo girls. Vardai gali kartotis. Masyvus atspausdinkite su console.log();*/
const cats = [...Array(10)].map(_ => rand(2, 12));
console.log(cats);

let owners = [...Array(10)].map(_ => girls[rand(0, girls.length - 1)]);
console.log(owners);

console.log('--------2---------');
/*Suskaičiuokite kiek katinukų yra cats masyve (suraskite masyvo narių sumą). Sumuokite tik tas katinukų reikšmes, kurios be liekanos dalijasi iš 3. Rezultatą atspausdinkite su console.log();*/
let sumCats = 0;
cats.forEach(a => a % 3 === 0 ? sumCats += a : null);
console.log(sumCats);

console.log('--------3---------');
/*Į masyvo owners pradžią, t.y. elementą su indeksu 0 (o ne galą!, o pridėkite papildomai, o neužrašykite ant mergaitės!) pridėkite vardą 'Nausėda'. Masyvas po pridėjimo turi turėti 11 elementų;*/
owners.unshift('Nausėda');
console.log(owners);

console.log('--------4---------');
/*Sukurkite trečią masyvą catOwners, kurio reikšmė yra stringas, sudarytas iš vardo ir katinukų skaičiaus (pvz Deimantė has 2 cats), naudodami masyvus cats ir owners pagal taisyklę: pirmai mergaitei iš owners masyvo priskiriamas pirmas katinukų skaičius iš cats masyvo, antrai - antras ir t.t. Atkreipkite dėmesį, kad pirma mergaitė owners masyve yra ne pirmas elementas su indeksu 0 (pirmas yra 'Nausėda'), o antrasis su indeksu 1. Pirmas katinukų skaičius cats masyve yra standartiškai su indeksu 0. Masyvą atspausdinkite su console.log();*/
let catOwners = [];
owners.map((a, i) => {
    if (i !== 0) {
        catOwners.push(`${a} has ${cats[i - 1]} cats.`)
    }
})
console.log(catOwners);

console.log('--------5---------');
/*Suraskite vieną (tik vieną) vardą owners masyve, kuris kartojasi (nesvarbu kiek kartų) ir jį atspausdinkite su console.log().*/
/*
let owner = [];
owner = owners.filter(a => owners.indexOf(a) !== owners.lastIndexOf(a) ? owner.push(a) : null);
console.log(owner[0]);
*/
let owner1 = owners.find(a => owners.indexOf(a) !== owners.lastIndexOf(a));
console.log(owner1);

