
// set constant global variables that will not change and available to rest of app.
const width = 640;
const height = 404;
const columns = 8;
const rows = 3;
// define all the traits of each person
const people = [
    ['alex', 'male', 'man', 'boy', 'black', 'moustache'],
    ['alfred', 'male', 'man', 'boy', 'red', 'orange', 'ginger', 'moustache'],
    ['anita', 'female', 'woman', 'girl', 'female', 'woman', 'girl', 'blonde', 'yellow', 'cheeks'],
    ['anne', 'female', 'woman', 'girl','black'],
    ['bernard', 'male', 'man', 'boy', 'hat', 'brown', 'beard'],
    ['bill', 'male', 'man', 'boy', 'red', 'orange', 'ginger', 'bald', 'cheeks'],
    ['charles','male', 'man', 'boy', 'blonde', 'yellow', 'moustache'],
    ['claire', 'female', 'woman', 'girl', 'hat', 'red', 'orange', 'ginger', 'claire'],
    ['david', 'male', 'man', 'boy', 'blonde', 'yellow', 'beard'],
    ['eric','male', 'man', 'boy', 'hat', 'blonde', 'yellow'],
    ['frans', 'male', 'man', 'boy', 'red', 'orange', 'ginger'],
    ['george', 'male', 'man', 'boy', 'hat', 'white', 'grey', 'gray'],
    ['herman', 'male', 'man', 'boy', 'red', 'orange', 'ginger', 'herman', 'bald'],
    ['joe', 'male', 'man', 'boy', 'blonde', 'yellow', 'glasses'],
    ['maria', 'female', 'woman', 'girl', 'hat', 'brown'],
    ['max', 'male', 'man', 'boy', 'black', 'moustache'],
    ['paul', 'male', 'man', 'boy', 'white', 'grey', 'gray', 'glasses'],
    ['peter', 'male', 'man', 'boy', 'white', 'grey', 'gray'],
    ['phillip', 'male', 'man', 'boy', 'black', 'cheeks', 'beard'],
    ['richard', 'male', 'man', 'boy', 'brown', 'bald', 'moustache', 'beard'],
    ['robert', 'male', 'man', 'boy', 'brown', 'cheeks'],
    ['sam', 'male', 'man', 'boy', 'white', 'grey', 'gray', 'glasses', 'sam'],
    ['susan', 'female', 'woman', 'girl', 'white', 'grey', 'gray', 'cheeks'],
    ['tom','male', 'man', 'boy', 'black', 'glasses'],
];

// create an array to hold all the keywords
const keywords = [];
// we loop through i which is the amount of characters
for(let i = 0; i < people.length; i++) {
    // we then loop through each character trait.
    for (let j = 0; j <  people[i].length; j++){
        // if it is unique to the keywords array (it is not in the array)
        if (!keywords.includes(people[i][j])) {
            // we push it into the array
            keywords.push(people[i][j]);
        }
    }
}

// we set up a global variable that will hold the random suspect
let suspect = null;

// create a container to hold everything
// we cant append it to document.body yet because it does not exist.
const container = document.createElement('div');
container.classList.add('container');

// now that we are done setting up the global variables
// the setup function will load only when the html is loaded.
window.addEventListener('load', setup);
function setup(){
    // now after the load event fires we can append the container element
    document.body.appendChild(container);
    // we should clear our container before each setup or new game
    container.innerHTML = '';
    for(let i = 0; i < columns * rows; i++) {
        // we need to know what part of the picture we want to display
        // we multiply the width of each card with the remainder of 8
        // x will start at zero and move over one card with at a time
        const x = (width/columns) * (i % columns) ;
        // we need to do the same with the row the picture is on
        // it will be i / 8 flattened
        // so the first 8 will be 0 the next 8 will be 1 and the last will be 2
        const row = Math.floor(i / columns);
        // save the total in y
        const y = (height/rows) * row;
        // we created a function that creates and styles the card
        const card = createCard(x + 50, y + 6);
        // then it returns a card and we append it to the container
        container.appendChild(card);
        // we give it text inside
        card.innerHTML = `<div>${people[i][0]}</div>`;
        // then we give it all the classes/traits that we have in its array
        card.classList.add( ...people[i] )
    }

    // create a textarea to ask our questions
    const textBox = document.createElement('textarea');
    textBox.placeholder = 'Ask a Question and see what happens. Remember questions end with ?.';
    // then we add a listener that checks for any input
    textBox.addEventListener('input', function () {
        // create a variable to hold what trait the user is looking for
        let trait = null;
        // we check to see if there is a '?' at the end of the sentence
        if (textBox.value && textBox.value.slice(-1) === '?') {
            // if there is we get the value of the textarea minus the '?'
            const value = textBox.value.slice(0, textBox.value.length -1);
            // once we have the question we can clear the box
            textBox.value = '';
            // next we split the string sentence with a space so we have each word in an array
            value.split(' ').forEach( word => {
                // we call forEach on the array
                if (keywords.includes(word)) {
                    // if the keywords array holds any of the words in the sentence that is our trait
                    trait = word;
                }
            });
            // now that we have a trait we check if our suspect has our trait
            if(suspect.classList.contains(trait)) {
                // if they do we get all the characters
                document.querySelectorAll(`.char`).forEach( char => {
                    // we run a for each on all the character cards
                    if(!char.classList.contains(trait)) {
                        // if the card does not have the same trait as the suspect we remove it from view
                        char.style.display = 'none';
                    }
                })
            } else {
                // if the suspect does not have the trait
                document.querySelectorAll(`.char`).forEach( char => {
                    // we remove all the character cards that do have that trait
                    if(char.classList.contains(trait)) {
                        char.style.display = 'none';
                    }
                })
            }
        }
    });

    // next we add our textbox to the container
    container.appendChild(textBox);
    // we select a random number based off how many characters
    const randomNumber = Math.floor(Math.random() * (columns * rows) );
    // we get our suspect by selecting all our characters and chose the randomNumber as the index
    suspect = document.querySelectorAll('.char')[randomNumber];
}

// create card is our helper function
function createCard(x, y) {
    // a single card is created when this function is call
    const card = document.createElement('div');
    // it is just a div with a .char class
    card.classList.add('char');
    // we tell it how wide and how tall it should be
    card.style.minWidth = (width / columns) + 'px';
    card.style.minHeight = (height/ rows) + 'px';
    // we also set a background based off the supplied parameter
    // x represents how far from the left it should start drawing
    // y represents how far from the top it should start drawing
    card.style.background = `url("char.png") no-repeat -${x}px -${y}px`;
    // finally we return the card so we can do more stuff to it
    return card;
}

