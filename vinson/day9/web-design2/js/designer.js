window.addEventListener('load', function () {
    localStorage.setItem('headerText', 'I am from local storage');
    const element = document.createElement('div');
    document.body.prepend(element);
    element.innerText = localStorage.getItem('headerText');
    element.style.color = localStorage.getItem('headerColor');
    element.style.backgroundColor = localStorage.getItem('headerBackgroundColor');

    const input1 = document.createElement('input');
    document.body.prepend(input1);
    input1.addEventListener('input', function (event) {
        console.log(event.target.value);
        element.style.color = event.target.value;
        localStorage.setItem('headerColor', event.target.value);
    });

    const input2 = document.createElement('input')
    document.body.appendChild(input2);
    input2.addEventListener('input', function (event) {
        console.log(event.target.value);
        element.style.backgroundColor = event.target.value;
        localStorage.setItem('headerBackgroundColor', event.target.value);
    });

    const url = 'https://jsonplaceholder.typicode.com/todos';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {


        if (xhr.readyState === 4) {
            // console.log(xhr.readyState);
            const response = JSON.parse( xhr.responseText ) ;

            const completed = response.filter( todo => {
                return todo.completed
            });
            // console.log(completed);
            const incomplete = response.filter( function (todo) {
                return !todo.completed;
            });
            // console.log(incomplete)
        }

    };
    xhr.send();
});


