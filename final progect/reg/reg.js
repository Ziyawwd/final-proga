let input = document.querySelectorAll('input')
let submit = document.querySelector('#submit')
const users = localStorage.getItem('users')

submit.addEventListener("click", function (e) {
    if (input[1].checkValidity()) {
        e.preventDefault()
        let NewUser = {
            name: input[0].value,
            phone: input[1].value,
            pass: input[2].value
        }
        users.push(NewUser)
        localStorage.setItem('users', JSON.stringify(users))
        location.href = '../login/log.html'
    }
    else {
        alert("error")
    }
})

