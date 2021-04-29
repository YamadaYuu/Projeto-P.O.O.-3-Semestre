function submeterFormulario(event){
    event.preventDefault();

    realizarCadastro();

    alert("Cadastro realizado!");

}

async function realizarCadastro(){
    let client = new Client();

    client.setName(document.getElementById("nameInput-input").value);
    client.setGender(document.getElementById("generoSelect-select").value);
    client.setPhone(document.getElementById("telefoneInput-input").value);
    client.setBirthDate(document.getElementById("dataNascimentoInput-input").value);
    client.setEmail(document.getElementById("email-input").value);
    client.setSenha(document.getElementById("senha-input").value);

    await serverRequester.fazerPost("/signUp", client.getClientData());

}



