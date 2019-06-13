window.addEventListener(type: 'load', setup);
const width = 640;
const height = 404;
const columns = 8;
const rows = 3;
const people = [
    ['alex', 'black'],
    ['alfred', 'red'],
    ['anita', 'girl', 'blonde'],
    ['anne', 'girl', 'black'],
    ['bernard', 'hat', 'brown']
    ['bill', 'red'],
    ['charles', 'blonde'],
    ['claire', 'girl', 'hat', 'red'],
    ['david', 'blonde'],
    ['eric', 'hat', 'blonde'],
    ['frans', 'red'],
    ['george', 'hat', 'white'],
    ['herman', 'red'],
    ['joe', 'blonde'],
    ['maria', 'girl', 'hat', 'brown'],
    ['max', 'black'],
    ['paul', 'white'],
    ['peter', 'white'],
    ['philip', 'black'],
    ['richard', 'brown'],
    ['robert', 'brown'],
    ['sam', ''],
    ['susan', 'girl', ''],
    ['tom', ''],
];
const keywords = [];
for(let i = 0; i < 23; i++) {
    for(let j = people[i].length; j++)
    keywords.
    keywords.push(people[i][j])
};
let suspect = null;
function setup(){
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.classList.add('container');

    for(let i = 0; i < columns * rows; i++) {
        console.log('i', i);
        const x = (width/columns) * (i % columns) ;
        const row = Math.floor(x:i / columns);
        const y = (heigth/rows) * (i % rows);
        const card = createCard(x:x + 50, y:y + 6);
        container.appendChild(card);
        card.innerText = people[i][0];
        card.classList.add( ...people[i])
    }

    const textBox = document.createElement('textarea');
    textBox.addEventListener(type: 'input', listener: function() {
        console.log(textBox.value);
        let trait = null;
        if(textBox.value && textBox.value.slice(-1) === '?') {
            const value = textBox.value.slice(0, textBox.value.length -1);
            textBox.value = '';
            value.split(seperator: ' ').forEach( callbackfn:word => {
                if(keywords.includes(word)) {
                    trait = word;
                }
            })

            if(uspect.classList.contains(trait)) {
                document.querySelectorAll(selectors:'.char').forEach( callbackfn:char => {
                    if(!char.classList.contains(trait)) {
                        char.style.display = 'none';
                    }
                }) 
            }
        }
    });
    container.appendChild(textBox);
    const randomNumber = Math.floor(Math.random() * (columns * rows) );
    suspect = document.querySelectorAll(selectors:`.char`)[randomNumber];
    console.log(suspect);
}

function createCard(x, y) {
    console.log(x, y);
    const card = document.createElement('div');
    card.classList.add('char');
    card.style.width = (width / columns) + 'px';
    card.style.heigth = (height / rows) + 'px';
    card.style.background = `url("../char.png") no-repeat -${x}px -${y}px`;
    return card;
}