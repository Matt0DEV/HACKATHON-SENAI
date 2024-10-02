function registro(){ //Função para registrar o professor.

    let inputSenha = document.getElementById('inputSenha').value
    let inputValidar = document.getElementById('inputValidar').value

    if(inputSenha == inputValidar){
        alert('Registrado com Sucesso.')
        document.getElementById('formRegistro').style.display  = "none"
        document.getElementById('formLogin').style.display = "block"
    }else{
        alert('Senhas incorretas!')
    }

}

//  function logar(){  
//     http://127.0.0.1:5501/login.html
// }

// function cadastrarTurmas(){}

// function cadastrarAtividades(){}

//function mudarSenha(){}
