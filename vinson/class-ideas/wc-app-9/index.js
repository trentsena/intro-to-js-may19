window.addEventListener('load', ()=> {
   fetchNews();
});

async function fetchNews() {
    const res = await fetch('localhost:3000/');
    const json = await res.json();
}
