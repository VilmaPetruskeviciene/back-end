console.log('----Masyvai----');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('--------1-------');
/*Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);*/
let pinigine = [...Array(rand(10, 30))].map(_ => rand(0, 10));
console.log(pinigine);

console.log('--------2-------');
/*Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;*/
let piniguSuma = pinigine.reduce((a, b) => a + b);
console.log(piniguSuma);

console.log('--------3-------');
/*Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;*/
let piniguSuma2 = 0;
pinigine.map(a => {
    if (a > 2) {
      piniguSuma2  += a;
    }
})
console.log(piniguSuma2);

console.log('--------4-------');
/*Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;*/
let islaidos = pinigine.map(a => {
    if (a <= 2) {
        return 0;
    } else {
        return a;
    }
})
console.log(islaidos);

console.log('--------5-------');
/*Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;*/
let didz = Math.max(...pinigine);
let sumDidz = 0;
pinigine.map(a => {
    if (a === didz) {
        sumDidz += 1;
    }
})
console.log('Didziausia reiksme: ' + didz + ' didziausiu reiksmiu suma ' + sumDidz);

console.log('--------6-------');
/*Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;*/
let islaidosInd = [];
islaidos.map((a, i) => {
    if (a === 0) {
        islaidosInd.push(i);
    } else {
        islaidosInd.push(a);
    }
})
console.log(islaidosInd);

console.log('--------7-------');
/*Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;*/
for (let i = pinigine.length; i < 30; i++) {
    pinigine.push(rand(0, 10)); 
}
console.log(pinigine);

console.log('--------8-------');
/*Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);*/
