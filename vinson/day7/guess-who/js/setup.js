window.addEventListener('load', setup);
const width = 640;
const height = 404;
const columns = 8;
const rows = 3;
const people = [
    ['alex', 'black'],
    ['alfred', 'red'],
    ['anita', 'girl', 'blonde'],
    ['anne', 'girl','black'],
    ['bernard', 'hat', 'brown'],
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
    ['phillip', 'black'],
    ['richard', 'brown'],
    ['robert', 'brown'],
    ['sam', 'white'],
    ['susan', 'girl', 'white'],
    ['tom', 'black'],
];
const keywords = [];
for(let i = 0; i < 23; i++) {
    for (let j = 0; j <  people[i].length; j++){
        if (!keywords.includes(people[i][j])) {
            keywords.push(people[i][j]);
        }

    }
}

let suspect = null;
function setup(){
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.classList.add('container');

    for(let i = 0; i < columns * rows; i++) {
        console.log('i', i);
        const x = (width/columns) * (i % columns) ;
        const row = Math.floor(i / columns);
        const y = (height/rows) * row;
        const card = createCard(x + 50, y + 6);
        container.appendChild(card);
        card.innerText = people[i][0];
        card.classList.add( ...people[i] )
    }

    const textBox = document.createElement('textarea');
    textBox.addEventListener('input', function () {
        console.log(textBox.value);
        let trait = null;
        if (textBox.value && textBox.value.slice(-1) === '?') {
            const value = textBox.value.slice(0, textBox.value.length -1);
            textBox.value = '';
            value.split(' ').forEach( word => {
                if (keywords.includes(word)) {
                    trait = word;
                }
            });
            console.log('trait', trait, suspect, suspect.classList.contains(trait));
            if(suspect.classList.contains(trait)) {
                console.log('true');
                document.querySelectorAll(`.char`).forEach( char => {
                    if(!char.classList.contains(trait)) {
                        char.style.display = 'none';
                    }
                })
            } else {
                console.log('false')
                document.querySelectorAll(`.char`).forEach( char => {
                    if(char.classList.contains(trait)) {
                        char.style.display = 'none';
                    }
                })
            }
        }
    });

    container.appendChild(textBox);
    const randomNumber = Math.floor(Math.random() * (columns * rows) )
    suspect = document.querySelectorAll('.char')[randomNumber];
    console.log(suspect);
    console.log('keywords', keywords);
}

function createCard(x, y) {
    console.log(x, y);
    const card = document.createElement('div');
    card.classList.add('char');
    card.style.width = (width / columns) + 'px';
    card.style.height = (height/ rows) + 'px';
    card.style.background = `url("char.png") no-repeat -${x}px -${y}px`;
    return card;
}

