class Sapi {
    constructor() {
        this.id = "";
        this.jenisKelamin = "";
        this.umur = 0;
        this.berat = 0;
        this.riwayatPenyakit = "";
        this.tanggalSakit = "";
    }
    
    addSapi(id, jenisKelamin, umur, riwayatPenyakit, tanggalSakit) {
        this.id = id;
        this.jenisKelamin = jenisKelamin;
        this.umur = umur;
        this.riwayatPenyakit = riwayatPenyakit;
        this.tanggalSakit = tanggalSakit;
    }

    setId(newId) {
        this.Id = newId;
    }

    getId() {
        return this.id;
    }

    setJenisKelamin(newJenisKelamin) {
        this.jenisKelamin = newJenisKelamin;
    }

    getJenisKelamin() {
        return this.jenisKelamin;
    }

    setUmur(newUmur) {
        this.umur = newUmur;
    }

    getUmur() {
        return this.umur;
    }

    setBerat(newBerat) {
        this.berat = newBerat;
    }

    getBerat() {
        return this.berat;
    }

    setRiwayatPenyakit(newRiwayatPenyakit) {
        this.riwayatPenyakit = newRiwayatPenyakit;
    }

    getRiwayatPenyakit() {
        return this.riwayatPenyakit;
    }

    setTanggalSakit(newTanggalSakit) {
        this.tanggalSakit = newTanggalSakit;
    }

    getTanggalSakit() {
        return this.tanggalSakit;
    }

}