class Sapi {
    constructor() {
        this.id = "";
        this.spesiesSapi = "";
        this.umur = 0;
        this.berat = 0;
        this.riwayatPenyakit = "";
        this.tanggalSakit = "";
        this.kesehatan = "";
        this.kondisi = "";
    }

    setId(newId) {
        this.Id = newId;
    }

    getId() {
        return this.id;
    }

    setSpesiesSapi(newSpesiesSapi) {
        this.spesiesSapi = newSpesiesSapi;
    }

    getSpesiesSapi() {
        return this.spesiesSapi;
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

    setKesehatan(newKesehatan) {
        this.kesehatan = newKesehatan;
    }

    getKesehatan() {
        return this.kesehatan;
    }

    setKondisi(newKondisi) {
        this.kondisi = newKondisi;
    }

    getKondisi() {
        return this.kondisi;
    }

}