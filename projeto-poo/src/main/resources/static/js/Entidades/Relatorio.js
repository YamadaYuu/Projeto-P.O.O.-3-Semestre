class Relatorio {
    constructor(data) {
        if (data != undefined) {
            this.idadeMedia = data["idadeMedia"];
            this.iMediaMulheres = data["iMediaMulheres"];
            this.iMediaHomens = data["iMediaHomens"];
            this.servMaisProcurado = data["servMaisProcurado"];
            this.smpMulheres = data["smpMulheres"];
            this.smpHomens = data["smpHomens"];

        } else {
            this.idadeMedia;
            this.imm;
            this.imh;
            this.servMaisProcurado;
            this.smpMulheres;
            this.smpHomens;

        }
    }
    getReDados() {
        let data = {};

        data["idadeMedia"] = this.idadeMedia;
        data["iMediaMulheres"] = this.iMediaMulheres;
        data["iMediaHomens"] = this.iMediaHomens;
        data["servMaisProcurado"] = this.servMaisProcurado;
        data["smpMulheres"] = this.smpMulheres;
        data["smpHomens"] = this.smpHomens;

        return data;
    }
}