class SapiPotong extends Sapi {
    constructor(){
        super();
        this.jenisKelamin = "";
    }

    // Buat objek sapi
    addSapiPotong(id, jenisKelamin, spesiesSapi, umur, berat, riwayatPenyakit, kesehatan) {
        super.id = id;
        super.umur = umur;
        super.berat = berat;
        super.riwayatPenyakit = riwayatPenyakit;
        super.kesehatan = kesehatan;
        this.jenisKelamin = jenisKelamin;
        super.spesiesSapi = spesiesSapi;

        let kondisi = new Condition();
        kondisi.setKondisi(umur, kesehatan, berat, jenisKelamin);
        super.kondisi = kondisi.getKondisi();
    }

    setJenisKelamin(newJenisKelamin){
        this.jenisKelamin = newJenisKelamin;
    }

    getJenisKelamin(){
        return this.jenisKelamin;
    }

    //Override
    getKondisi(){
        return this.kondisi;
    }

    setKondisi(){
        let kondisi = new Condition();
        kondisi.setKondisi(this.umur, this.kesehatan, this.berat, this.jenisKelamin);
        this.kondisi = kondisi.getKondisi();
    }
}