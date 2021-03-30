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
    client.setBirthDate(dateParser.getDateFrom("dataNascimentoInput-input"));

    await serverRequester.fazerPost("/signUp", client.getClientData());

}



