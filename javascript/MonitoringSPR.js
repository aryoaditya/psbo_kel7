class MonitoringSPR{
    constructor(){
        this.listSapiPerah = [];
    }

    // Buat list sapi
    createListSPR(){
        let nSapiPerah = SapiPerahDummy.length;

        for (let i=0; i<nSapiPerah; i++){
            let s = SapiPerahDummy[i];
            this.listSapiPerah[i] = new SapiPerah();
            this.listSapiPerah[i].addSapiPerah(s._id, s.milkProdDay, s.cowType, s.age, s.weight, s.deseaseHistory, s.health);    
        }
        this.tableSapiPerah(this.listSapiPerah);
    }

    addList(id, prodSusu, spesies, umur, berat, riwayatSakit, kesehatan){
        let n = this.listSapiPerah.length;

        this.listSapiPerah[n-1] = new SapiPerah();
        this.listSapiPerah[n-1].addSapiPerah(id, prodSusu, spesies, umur, berat, riwayatSakit, kesehatan);
        this.addRow(this.listSapiPerah[n-1]);
    }

    // Tampilin ke halaman monitoring
    tableSapiPerah(data){
        let table = document.getElementById('TableSapiPerah')
        for(let i=0; i<data.length; i++){
            let row = `<tr>
                        <td>${data[i].getId()}</td>
                        <td>${data[i].getSpesiesSapi()}</td>
                        <td>${data[i].getUmur()}</td>
                        <td>${data[i].getBerat()} Kg</td>
                        <td>${data[i].getProdSusuHarian()} L</td>
                        <td>${data[i].getRiwayatPenyakit()}</td>
                        <td>${data[i].getKesehatan()}</td>
                        <td>${data[i].getKondisi()}</td>
                    </tr>`
            table.innerHTML += row;
        }
    }

    addRow(data){
        let table = document.getElementById('TableSapiPerah');

        let row = `<tr>
                        <td>${data.getId()}</td>
                        <td>${data.getSpesiesSapi()}</td>
                        <td>${data.getUmur()}</td>
                        <td>${data.getBerat()} Kg</td>
                        <td>${data.getProdSusuHarian()} L</td>
                        <td>${data.getRiwayatPenyakit()}</td>
                        <td>${data.getKesehatan()}</td>
                        <td>${data.getKondisi()}</td>
                    </tr>`
        table.innerHTML += row;
    }
}