class SapiPerah extends Sapi {
    constructor(){
        super();
        this.prodSusuHarian = 0;
    }

    // Buat objek sapi
    addSapiPerah(id, prodSusuHarian, spesiesSapi, umur, berat, riwayatPenyakit, kesehatan) {
        if(prodSusuHarian == ""){
            this.prodSusuHarian = 0;
        }
        else{
            this.prodSusuHarian = prodSusuHarian;
        }
        super.id = id;
        super.umur = umur;
        super.berat = berat;
        super.riwayatPenyakit = riwayatPenyakit;
        super.kesehatan = kesehatan;
        super.spesiesSapi = spesiesSapi;

        let kondisi = new Condition();
        kondisi.setKondisi(umur, kesehatan);
        super.kondisi = kondisi.getKondisi();
    }
    
    setProdSusuHarian(newProdSusuHarian){
        this.prodSusuHarian = newProdSusuHarian;
    }

    getProdSusuHarian(){
        return this.prodSusuHarian;
    }

    //Override
    getKondisi(){
        return this.kondisi;
    }
    
    setKondisi(){
        let kondisi = new Condition();
        kondisi.setKondisi(this.umur, this.kesehatan);
        this.kondisi = kondisi.getKondisi();
    }
}