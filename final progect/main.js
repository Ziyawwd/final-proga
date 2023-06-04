function isInputFull(params) {
    let allInputs = document.querySelectorAll('input')
   return [...allInputs].every(input => input.value !== '')
}

$('button').click(function (e) {
    e.preventDefault()
    isInputFull()
})
$('input').on('input',function () {
    $('button').prop('disabled', !isInputFull())
})
const users = JSON.parse(localStorage.getItem('users'))
$('button').click(function (e) {
    e.preventDefault()
    console.log(users.some(user=>user.name === allInputs[0].value));
})