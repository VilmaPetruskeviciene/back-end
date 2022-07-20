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
let pinigine1 = [];
let pinigine2 = [];
pinigine.forEach(a => {
    if (a <= 2) {
        pinigine1.push(a);
    } else {
        pinigine2.push(a);
    }
})
console.log(pinigine1);
console.log(pinigine2);

console.log('--------9-------');
/*Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;*/
let pinigine2sk = [pinigine1, pinigine2];
console.log(pinigine2sk);

console.log('--------10-------');
/*Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];*/
let korteles = [];
korteles.push('KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI');
pinigine2sk[2] = korteles;
console.log(pinigine2sk);

console.log('--------11-------');
/*Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;*/
pinigine2sk[2].sort((a, b) => a.localeCompare(b));
console.log(pinigine2sk[2]);

console.log('--------12-------');
/*Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;*/
let bankoKort = ['MasterCard', 'Visa'];
pinigine2sk[2].push(...([...Array(14)].map(_ => bankoKort[rand(0, bankoKort.length-1)])));
console.log(pinigine2sk[2]);

console.log('--------13-------');
/*Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;*/
let MasterCard = 0;
let Visa = 0;
pinigine2sk[2].forEach(a => a === 'MasterCard' ? MasterCard += 1 : a === 'Visa' ? Visa += 1 : null);
console.log('MasterCard: ' + MasterCard + ' Visa: ' + Visa);

console.log('--------14-------');
/*Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;*/
let loterija = [...Array(10)].map(_ => rand(1000000000, 9999999999));
pinigine2sk[3] = loterija;

console.log(pinigine2sk);

console.log('--------15-------');
/*Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;*/
loterija.sort((a, b) => b - a);
console.log(loterija);

console.log('--------16-------');
/*Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);*/
let pinigai = [rand(3, 10)];
while (pinigai.reduce((a, b) => a + b) < 484) {
    pinigai.push(rand(3, 10));
}
while (pinigai.reduce((a, b) => a + b) < 510) {
    let x = rand(3, 10);
    let y = rand(3, 10);
    if (pinigai.reduce((a, b) => a + b) + (x + y) === 500) {
        pinigai.push(x, y);
        break;
    } else {
        continue;
    }
}
console.log(pinigai);
console.log(pinigai.reduce((a, b) => a + b));

console.log('--------17-------');
/*Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.*/
let laim = 0;
loterija.forEach(a => {
    if (a % 777 === 0) {
        laim += 1;
    }
})
console.log(laim);

console.log('--------18-------');
/*Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;*/
let nuotraukos = [];
nuotraukos.push('šuo', 'katė', 'automobilis', 'namas', 'kiemas');
pinigine2sk[4] = nuotraukos;
nuotraukos.sort((a, b) => a.length - b.length);
console.log(nuotraukos);

