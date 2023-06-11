let user = document.querySelector('#user')
let users = localStorage.getItem('users')
let logout = document.querySelector('#logout')
let login = document.querySelector('#login')
let signin = document.querySelector('#signin')

user.innerHTML = `<h1 id="user">your Accaunt:${users}</h1>`
if (!user.innerText == `your Accaunt:`) {
    logout.style.display = "inline"
    login.style.display = "none"
    signin.style.display = "none"
} else {
    logout.style.display = "none"
    login.style.display = "inline"
    signin.style.display = "inline"
}
logout.addEventListener(click, function () {
localStorage.setItem('users','')
    logout.style.display = "none"
    login.style.display = "inline"
    signin.style.display = "inline"

})