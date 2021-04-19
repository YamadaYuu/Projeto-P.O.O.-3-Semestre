async function submeterFormulario(event){
    event.preventDefault();

    let aceito = await realizarLogin();

    if(aceito){
        window.location.href = "homeAdmin";
    }else{
        alert("Login recusado!");
    }

}

async function realizarLogin(){
    let credenciais = {};

    credenciais["email"] = document.getElementById("email-input").value;
    credenciais["senha"] = document.getElementById("senha-input").value;

    let resposta = await serverRequester.fazerPost("/allowLogin", credenciais);

    if(resposta["ok"]){
        return true;
    }else{
        return false;
    }

}



