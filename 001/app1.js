
function getRandom(min, max) {
    for (let i = 0; i <=10 ; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);      
    }
}

const mas = [...Array(10)].map(_ => getRandom(7, 77));
console.log(mas);

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(getRandom(7, 77));
}
console.log(arr);

for (let i = 0; i < 10; i++) {
    console.log(arr[i]);   
}

arr.forEach(n => console.log(n));

const cats = ['Murka', 'Pilkis', 'Rainius'];

console.log(cats[getRandom(0, 2)]);


