window.addEventListener('load', setup);

const width = 640;
const height = 405;
const columns= 8;
const rows = 3;
const people = [
    ['alex'],
    ['eric'],
    ['philip'],
    ['alex'],
    ['eric'],
    ['philip'],
    ['alex'],
    ['eric'],
    ['philip'],
    ['alex'],
    ['eric'],
    ['philip'],
    ['alex'],
    ['eric'],
    ['philip'],
    ['alex'],
    ['eric'],
    ['philip'],
    ['alex'],
    ['eric'],
    ['philip'],
    ['alex'],
    ['eric'],
    ['philip'],
    ['alex'],
    ['eric'],
    ['philip'],
];

const keywords = [];

for(let i = 0; i < 23; i++) {
    for(let j = 0; j < people[i].length; j++){
        if (keywords.includes(people[i][j])) {
            keywords.push(people[i][j]);
        }
    }
}

console.log('keywords')
let suspect;
function setup(){
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.classList.add('container');
    for(let i = 0; i < columns * rows; i++) {
        console.log('i', i);
        const x = (width / columns) * (i * columns);
        const row = Math.floor(i / columns);
        const y = (height / rows ) * (i % rows)
        const card = createCard(x + 50);
        container.appendChild(card);
        card.innerText = people[i][0];
        card.classList.add(...people[i]);
    }

    const textBox = document.createElement('textarea');
    textBox.addEventListener('input', function () {
        let trait = null;
        if (textBox.value && textBox.value.slice(-1) === '?') {
            const value = textBox.value.slice(0, textBox.value.length -1);
            textBox.value = '';
            value.split(' ').forEach(word => {
                if (keywords.includes(word)) {
                    trait = word;
                }
            })

            if(suspect.classList.contains(trait)) {
                document.querySelectorAll('.char').forEach(char => {
                    if(char.classList.contains(trait)) {
                        char.style.display = none;
                    }
                })
            } else {

            }

        }
    })
    container.appendChild(textBox);
    const randomNumber = Math.floor(Math.random() * (columns * rows) );
    suspect = document.querySelectorAll('.char')[randomNumber];
}


function createCard(x, y) {
    const card = document.createElement('div');
    card.classList.add('char');
    card.style.width = (width / columns) + 'px';
    card.style.height = (height / rows) + 'px';
    card.style.background = `url('char.png') no-repeat -${x}px -${y}px`;
    return card;
}