const email = document.querySelector('#email')
const password = document.querySelector('#password')
const submit = document.querySelector('#submit')

submit.addEventListener('click', (e) => {
    //e.preventDefault()

    let usuario = {}
    usuario.login = email;
    usuario.senha = password;

    fetch('https://jwt-rafaneng.herokuapp.com/api/usuarios', {
        method: "POST",
        headers: { "Content-Type":"application/json"},
        body: JSON.stringify(usuario)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
})
