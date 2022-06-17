class Information{
    constructor(){
        this.jumlahSapiPotong = 0;
        this.jumlahSapiPerah = 0;
        this.jumlahSapiSiapPtg = 0;
        this.jumlahSapiSiapPrh = 0;
    }

    setInformation(listSPT, listSPR, nSiapPotong, nSiapPerah){
        this.jumlahSapiPotong = listSPT.length;
        this.jumlahSapiPerah = listSPR.length;
        this.jumlahSapiSiapPtg = nSiapPotong;
        this.jumlahSapiSiapPrh = nSiapPerah;
    }

    getJumlahSapiPotong(){
        return this.jumlahSapiPotong;
    }

    getJumlahSapiPerah(){
        return this.jumlahSapiPerah;
    }

    getJumlahSapiSiapPerah(){
        return this.jumlahSapiSiapPrh;
    }

    getJumlahSapiSiapPotong(){
        return this.jumlahSapiSiapPtg;
    }

    getInformation(){
        let jumlahSPT = document.getElementById('jumlahSapiPotong');
        let jumlahSPR = document.getElementById('jumlahSapiPerah');
        let jumlahSSPT = document.getElementById('jumlahSapiSiapPotong');
        let jumlahSSPR = document.getElementById('jumlahSapiSiapPerah');
        jumlahSPT.innerHTML = `<h5 class="card-title">Jumlah Sapi Potong</h5>
                                <p class="card-text">${this.getJumlahSapiPotong()}</p>`;
        jumlahSPR.innerHTML = `<h5 class="card-title">Jumlah Sapi Perah</h5>
                                <p class="card-text">${this.getJumlahSapiPerah()}</p>`;
        jumlahSSPT.innerHTML = `<h5 class="card-title">Jumlah Sapi Siap Potong</h5>
                                <p class="card-text">${this.getJumlahSapiSiapPotong()}</p>`;
        jumlahSSPR.innerHTML = `<h5 class="card-title">Jumlah Sapi Siap Perah</h5>
                                <p class="card-text">${this.getJumlahSapiSiapPerah()}</p>`;
    }
}