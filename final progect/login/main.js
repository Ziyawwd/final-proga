const users = [
    {
        name: "u1",
        pass:"p1",
    }
]
let user = user[0].name.value
if(!localStorage.getItem('users')){
    localStorage.setItem('users',JSON.stringify(users))
}

const allinputs = document.querySelectorAll('input')
const btn =document.querySelector(".submit")
btn.addEventListener('click',function (e) {
    e.preventDefault()
   if (users.some(user => user.name == allinputs[0].value && user.pass == allinputs[1].value)) {
    location.href= "../main/admin.html"
   } 
})
