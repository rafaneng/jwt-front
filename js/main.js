const login = document.querySelector('#email')
const senha = document.querySelector('#password')
const submit = document.querySelector('#submit')

submit.addEventListener('click', (e) => {
    
    let usuario = {}
    usuario.login = login.value;
    usuario.senha = senha.value;

    fetch('https://jwt-rafaneng.herokuapp.com/api/usuarios', {
        method: "POST",
        headers: { "Content-Type":"application/json"},
        body: JSON.stringify(usuario)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
})
