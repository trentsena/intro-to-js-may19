
class Game {
    scenes = {};
    currentScene = 'Home';
    constructor() {
        this.createScenes()
    }

    createScenes() {
        const scenesForSetup = [
            {
                name: 'Home',
                summary: 'You are at home',
                question: 'Do you go to the beach or the store?',
                answers: [{
                    text: 'The Beach', action: function () {
                        game.scenes['Beach'].displayScene();
                    }
                },
                    {
                        text: 'The Store', action: function () {
                            game.scenes['Store'].displayScene();
                        }
                    }
                ]
            },
            {
                name: 'Beach',
                summary: 'You are at the beach. it is hot.',

                question: 'Do you go home or the store?',
                answers: [{
                    text: 'go home', action: function () {
                        game.scenes['Home'].displayScene();
                    }
                },
                    {
                        text: 'this store', action: function () {
                            game.scenes['Store'].displayScene();
                        }
                    }
                ]
            },
            {
                name: 'Store',
                question: 'Do you go home or the beach?',
                summary: 'You are at the store. it is closed.',
                answers: [{
                    text: 'home', action: function () {
                        game.scenes['Home'].displayScene();
                    }
                },
                    {
                        text: 'beach', action: function () {
                            game.scenes['Beach'].displayScene();
                        }
                    }
                ]
            }
        ];

        scenesForSetup.forEach( setup => {
            this.scenes[setup.name] = new Scene(setup);
        });
        this.scenes[this.currentScene].displayScene();
    }
}

class Scene {
    question;
    answers;
    name;
    summary;
    constructor(setup) {
        this.question = setup.question;
        this.answers = setup.answers;
        this.name = setup.name;
        this.summary = setup.summary;
    }

    displayScene() {
        document.querySelector('#questionEl').innerHTML = this.question;
        document.querySelector('#name').innerHTML = this.name;
        document.querySelector('#summary').innerHTML = this.summary;
        const answersEl = document.querySelector('#answersEl');
        answersEl.innerHTML = '';
        const ul = document.createElement('ul');
        answersEl.appendChild(ul);

        this.answers.forEach( answer => {
            const li = document.createElement('li');
            li.innerHTML = answer.text;
            li.addEventListener('click', answer.action);
            ul.appendChild(li);
        });



    }
}

const game = new Game();


