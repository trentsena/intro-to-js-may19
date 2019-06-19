window.addEventListener( type: 'load', listener: function () {
    localStorage.setItem('headerText', 'I am from local storage')
    const element = document.createElement( tagName:'div');
    document.body.prepend(element);
    element.innerText = localStorage.getItem(key:'headerText');
    element.style.color = localStorage.getItem(key:'headerColor');
    element.style.backgroundColor = localStorage.getItem(key:'headerBackgroundColor');
    

const input1 = document.createElement( tagName: ' input');
document.body.prepend(input1);
input1.addEventListener(type:'input', listener: function (event) {
    console.log(event.target.value);
    element.style.color = event.target.value;
    localStorage.setItem('headerColor', event.target.value);
})

const input2 = document.createElement( tagname:'input');
document.body.appendChild(input2);
input2.addEventListener(type:'input', listener: function (event) {
    console.log(event.target.value);
    element.style.color = event.target.value;
    localStorage.setItem('headerBackgroundColor', event.target.value);
})

const xhr = new XMLHttpRequest();
xhr.open('GET', url: 'test.json');
xhr.onreadystatechange = function () {
    
    if (xhr.readyState === 4) {
        console.log(xhr.readyState);
        const response = JSON.parse( xhr.responseText ) ;
        response.forEeach( todo => { console.log(todo)});
        const completed = response.filter( todo => {
            return todo.completed
        })
    }
};
xhr.send();
});