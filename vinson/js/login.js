let loginName = '';
const username = document.getElementById('username');

function login() {
    loginName = '';
    document.getElementById('myBtn').innerText = `Login`;
    if (!username.value) {
        document.getElementById('myBtn').innerText = `Login`;
        username.value = '';
        return;
    }
    loginName = username.value;
    document.getElementById('myBtn').innerText = `${username.value.toUpperCase()} - Logout`;
    document.getElementById("myModal").style.display = "none";
    username.value = '';
}