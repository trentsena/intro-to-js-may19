
const sections = document.querySelectorAll('h3');

sections.forEach(hr => {
    hr.addEventListener('click', fold);
});

function fold() {
    const list = this.parentNode.classList;
    if (list.contains('fold')) {
        list.remove('fold');
    } else {
        list.add('fold');
    }
}

const tables = document.querySelectorAll('table');
tables.forEach( table => {
    const labels = [];
    table.querySelectorAll('th').forEach( th => {
        console.log('th', th.innerText);
        labels.push(th.innerText)
    });
    table.querySelectorAll('td').forEach( (td, index) => {
        td.setAttribute('data-label', labels[index % labels.length])
    })
});