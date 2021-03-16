class Client {
    constructor(data) {
        if (data != undefined) {
            this.name = data["name"];
            this.gender = data["gender"];
            this.phone = data["phone"];
            this.birthDate = data["birthDate"];

        } else {
            this.name;
            this.gender;
            this.phone;
            this.birthDate;

        }

    }



    getClientData() {
        let data = {};

        data["name"] = this.name;
        data["gender"] = this.gender;
        data["phone"] = this.phone;
        data["birthDate"] = this.birthDate;

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

}
