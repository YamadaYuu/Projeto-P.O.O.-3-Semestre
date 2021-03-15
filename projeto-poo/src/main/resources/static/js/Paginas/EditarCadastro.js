async function teste() {
    let resposta = await serverRequester.fazerGet("/readClients", {});

    let label = document.createElement("label");

    resposta = resposta[0];

    label.textContent = resposta["name"] + " " + resposta["gender"] + " " + resposta["birthDate"] + " " + resposta["telefone"];

    let body = document.getElementsByTagName("body")[0];

    body.appendChild(label);

    console.log(resposta);
}

async function listarClients() {
    let resposta = await serverRequester.fazerGet("/readClients", {});

    for (let i = 0; i < resposta.length; i++) {
        const client = resposta[i];
        
        let div = document.createElement("div");
        let labelNome = document.createElement("label");
        let labelGenero = document.createElement("label");
        let labelTelefone = document.createElement("label");
        let labelNascimento = document.createElement("label");
        let botaoEditarCadastro = document.createElement("button");
        let botaoExcluirCadastro = document.createElement("button");

        labelNome.textContent = "Nome: " + client["name"];
        labelGenero.textContent = "Gênero: " + client["gender"];
        labelNascimento.textContent = "Data de nascimento: " + client["birthDate"];
        labelTelefone.textContent = "Telefone: " + client["telefone"];

        div.classList.add("hBox");

        botaoEditarCadastro.textContent = "Editar";
        botaoEditarCadastro.onclick = function () {
            console.log("editando cadastro");
        }
        botaoExcluirCadastro.textContent = "Excluir";
        botaoExcluirCadastro.onclick = function () {
            console.log("excluir cadastro");
        }

        div.appendChild(labelNome);
        div.appendChild(labelGenero);
        div.appendChild(labelTelefone);
        div.appendChild(labelNascimento);
        div.appendChild(botaoEditarCadastro);
        div.appendChild(botaoExcluirCadastro);

        let body = document.getElementsByTagName("body")[0];

        body.appendChild(div);
    }

}
