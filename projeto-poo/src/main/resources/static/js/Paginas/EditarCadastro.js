async function listarClients() {
    let resposta = await serverRequester.fazerGet("/readClients", {});
    let vBoxEditar = document.getElementById("mostrarConteudo");
    let entidades = resposta["responseJson"];

    for (let i = 0; i < entidades.length; i++) {
        const client = entidades[i];

        let user = new Client(client);

        let userIdentifier = "user" + (i + 1);
        
        let usuarioContainer = document.createElement("div");
        usuarioContainer.classList.add("usuarioContainer");
        usuarioContainer.id = userIdentifier;

        let userInfo1 = document.createElement("div");
        userInfo1.classList.add("userInfo");
        let userNameContainer = document.createElement("div");
        userNameContainer.classList.add("info");
        let userName = document.createElement("input");
        userName.type = "text";
        userName.value = user.getName();
        let labelName = document.createElement("label");
        labelName.textContent = "Nome";
        userNameContainer.appendChild(labelName);
        userNameContainer.appendChild(userName);

        let userEmailContainer = document.createElement("div");
        userEmailContainer.classList.add("info");
        let userEmail = document.createElement("input");
        userEmail.type = "email";
        userEmail.value = user.getEmail();
        let labelEmail = document.createElement("label");
        labelEmail.textContent = "Email";
        userEmailContainer.appendChild(labelEmail);
        userEmailContainer.appendChild(userEmail);

        userInfo1.appendChild(userNameContainer);
        userInfo1.appendChild(userEmailContainer);

        let userInfo2 = document.createElement("div");
        let userGeneroContainer = document.createElement("div");
        userGeneroContainer.classList.add("info");
        let userGender = document.createElement("select");
        let option0 = document.createElement("option");
        option0.textContent = "Selecione um gênero";
        option0.disabled = true;
        let option1 = document.createElement("option");
        option1.textContent = "Masculino";
        option1.value = "Masculino";
        let option2 = document.createElement("option");
        option2.textContent = "Feminino";
        option2.value = "Feminino";
        userGender.appendChild(option0);
        userGender.appendChild(option1);
        userGender.appendChild(option2);
        userGender.value = user.getGender();
        let labelGenero = document.createElement("label");
        labelGenero.textContent = "Gênero";

        userGeneroContainer.appendChild(labelGenero);
        userGeneroContainer.appendChild(userGender);

        let userTelefoneContainer = document.createElement("div");
        userTelefoneContainer.classList.add("info");
        let userTelefone = document.createElement("input");
        userTelefone.type = "text";
        userTelefone.value = user.getPhone();
        let labelTelefone = document.createElement("label");
        labelTelefone.textContent = "Telefone";

        userTelefoneContainer.appendChild(labelTelefone);
        userTelefoneContainer.appendChild(userTelefone);

        userInfo2.appendChild(userTelefoneContainer);
        userInfo2.appendChild(userGeneroContainer);
        
        let userInfo3 = document.createElement("div");
        userInfo3.classList.add("userInfo");
        let userNascimentoContainer = document.createElement("div");
        userNascimentoContainer.classList.add("info");
        let userNascimento = document.createElement("input");
        userNascimento.type = "date";
        userNascimento.value = user.getBirthDate();
        let labelNascimento = document.createElement("label");
        labelNascimento.textContent = "Data de nascimento";

        userNascimentoContainer.appendChild(labelNascimento);
        userNascimentoContainer.appendChild(userNascimento);

        userInfo3.appendChild(userNascimentoContainer);

        let manageButtonsContainer = document.createElement("div");
        manageButtonsContainer.classList.add("manageButtons");

        let buttonExcluir = document.createElement("button");
        buttonExcluir.textContent = "Excluir";
        buttonExcluir.classList.add("bApagar");
        buttonExcluir.onclick = function(){
            deleteUser(userIdentifier, user);
        }
        let buttonSalvar = document.createElement("button");
        buttonSalvar.textContent = "Salvar";
        buttonSalvar.classList.add("bEditar");
        buttonSalvar.onclick = function(){
            saveChanges(userIdentifier, user);
        }

        manageButtonsContainer.appendChild(buttonExcluir);
        manageButtonsContainer.appendChild(buttonSalvar);

        usuarioContainer.appendChild(userInfo1);
        usuarioContainer.appendChild(userInfo2);
        usuarioContainer.appendChild(userInfo3);
        usuarioContainer.appendChild(manageButtonsContainer);

        vBoxEditar.appendChild(usuarioContainer);
    }

}


function saveChanges(userIdentifier, user){
    let container = document.getElementById(userIdentifier);

    let inputs = container.getElementsByTagName("input");

    let nome = inputs[0];
    let email = inputs[1];
    let telefone = inputs[2];
    let nascimento = inputs[3];

    let select = container.getElementsByTagName("select")[0];

    user.setName(nome.value);
    user.setEmail(email.value);
    user.setPhone(telefone.value);
    user.setBirthDate(nascimento.value);
    user.setGender(select.value);

    serverRequester.fazerPost("/update", user.getClientData());

    alert("Alterações salvas");
}

function deleteUser(userIdentifier, user) {
    serverRequester.fazerPost("/delete", user);

    let container = document.getElementById(userIdentifier);
    
    container.remove();

    alert("Cliente excluído");
}


listarClients();