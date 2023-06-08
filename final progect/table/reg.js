let input = document.querySelectorAll('input')
let submit = document.querySelector('#submit')
JSON.parse(data)
submit.addEventListener(click, function (e) {
    e.preventDefault()
    let NewUser = {
        name: input[0].value
        phone: input[1].value
        pass: input[2].value
    }
    localStorage.setItem(NewUser)
})
