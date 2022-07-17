
// foreach, map, sort, filter

console.log('-------------foreach---------');

[1, 5, 77].forEach(a => console.log(a));

[1, 5, 77].forEach(a => {
    if (a > 4) {
        console.log(a);
    }
});

// a yra reiksme, i yra indeksas
[1, 5, 77].forEach((a, i) => console.log(a, i));

//t yra visas masyvas
[1, 5, 77].forEach((a, i, t) => console.log(t[2]));
[1, 5, 77].forEach((a, i, t) => console.log(t[i]));

//nuo galo reiksmes spausdina
[1, 5, 77].forEach((a, i, t) => console.log(t[t.length - i - 1]));

console.log('-----------map-----------');

const fe = [1, 5, 77].forEach(a => console.log(a));
const map = [1, 5, 77].map(a => console.log(a));

console.log('fe', fe);
console.log('map', map);

const map1 = [1, 5, 77].map(a => a * 100);
console.log(map1);

const map2 = [1, 5, 77].map((a, i) => a * i);
console.log(map2);

const map3 = [1, 5, 77].map((a, i) => {
    return a * i;
});
console.log(map3);

const map4 = [1, 5, 77].map((a, i, t) => t);
console.log(map4);

console.log('-----------filter-----------');
//kad filter ka nors grazintu turi buti reiksme true
const fi = [1, 5, 77].filter(a => console.log(a));
console.log(fi);

const fi1 = [1, 5, 77].filter(a => 'taip');
console.log(fi1);

//nulio negrazina, nes jis false
const fi2 = [1, 5, 0, 77].filter(a => a);
console.log(fi2);

const fi3 = [1, 5, 77].filter(a => a > 4);
console.log(fi3);

console.log('-----------filter & map-----------');
const fi4 = [1, 5, 77].filter(a => a > 4).map(r => r * 10);
console.log(fi4);

console.log('-----------sort-----------');
//-1(neigiamas skaicius) nurodo rusiuoti, 
//1(teig. sk), nurodo, kad viskas ok, nieko nedaro
//0(nulis) nieko nedaro, jei tau nesvarbu rasai nuli
const namas = [1, 10, 0, 5, 77];
namas.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
});
console.log(namas);

const namas1 = [1, 10, 0, 5, 77];
namas1.sort((a, b) => a - b);
console.log(namas1);

const namas2 = ['dgfhky', 'gngfghfg', 'fdgfh', 'fdjj', 'Khhgjhk'];
namas2.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(namas2);

namas2.sort((a, b) => a.localeCompare(b));
console.log(namas2);

