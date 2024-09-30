function login(){

    let inputSenha = document.getElementById('inputSenha').value
    let inputValidar = document.getElementById('inputValidar').value

    if(inputSenha == inputValidar){
        alert('Registrado com Sucesso.')
        window.location.href = "http://127.0.0.1:5501/login.html"
    }else{
        alert('Senhas incorretas!')
    }

}