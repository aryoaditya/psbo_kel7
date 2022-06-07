class SapiPerah extends Sapi {
    constructor(){
        super();
        this.prodSusuHarian = "";
    }

    // Buat objek sapi
    addSapiPerah(id, prodSusuHarian, spesiesSapi, umur, berat, riwayatPenyakit, tanggalSakit) {
        super.id = id;
        super.umur = umur;
        super.berat = berat;
        super.riwayatPenyakit = riwayatPenyakit;
        super.tanggalSakit = tanggalSakit;
        this.prodSusuHarian = prodSusuHarian;
        super.spesiesSapi = spesiesSapi;
    }
    
    setProdSusuHarian(newProdSusuHarian){
        this.prodSusuHarian = newProdSusuHarian;
    }

    getProdSusuHarian(){
        return this.prodSusuHarian;
    }
}