class Client {
    constructor(data) {
        if (data != undefined) {
            this.name = data["name"];
            this.gender = data["gender"];
            this.phone = data["telefone"];
            this.birthDate = data["birthDate"];
            this.email = data["email"];
            this.senha = data["senha"];
            this.id = data["id"];

        } else {
            this.name;
            this.gender;
            this.phone;
            this.birthDate;
            this.email;
            this.senha;
            this.id;

        }

    }



    getClientData() {
        let data = {};

        data["name"] = this.name;
        data["gender"] = this.gender;
        data["telefone"] = this.phone;
        data["birthDate"] = this.birthDate;
        data["email"] = this.email;
        data["senha"] = this.senha;
        data["id"] = this.id;

        return data;
    }

    setName(name) {
        this.name = name;
    }

    setGender(gender) {
        this.gender = gender;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }

    setEmail(email) {
        this.email = email;
    }

    setSenha(senha) {
        this.senha = senha;
    }

    getName() {
        return this.name;
    }

    getGender() {
        return this.gender;
    }

    getPhone() {
        return this.phone;
    }

    getBirthDate() {
        return this.birthDate;
    }
    
    getEmail() {
        return this.email;
    }
    
    getSenha() {
        return this.senha;
    }

}
