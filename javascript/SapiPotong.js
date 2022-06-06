class SapiPotong extends Sapi {
    constructor(){
        super();
        this.jenisKelamin = "";
    }

    addSapiPotong(id, jenisKelamin, spesiesSapi, umur, berat, riwayatPenyakit, tanggalSakit) {
        super.id = id;
        super.umur = umur;
        super.berat = berat;
        super.riwayatPenyakit = riwayatPenyakit;
        super.tanggalSakit = tanggalSakit;
        this.jenisKelamin = jenisKelamin;
        super.spesiesSapi = spesiesSapi;
    }

    setJenisKelamin(newJenisKelamin){
        this.jenisKelamin = newJenisKelamin;
    }

    getJenisKelamin(){
        return this.jenisKelamin;
    }
}