class MonitoringSPR{
    constructor(){
        this.listSapiPerah = []
    }

    // Buat list sapi
    createListSPR(){
        let nSapiPerah = SapiPerahDummy.length;

        for (let i=0; i<nSapiPerah; i++){
            let s = SapiPerahDummy[i];
            this.listSapiPerah[i] = new SapiPerah();
            this.listSapiPerah[i].addSapiPerah(s._id, s.milkProdDay, s.cowType, s.age, s.weight, s.deseaseHistory, s.dateofDesease);    
        }

        this.tableSapiPerah(this.listSapiPerah);
    }

    // Tampilin ke halaman monitoring
    tableSapiPerah(data){
        let table = document.getElementById('TableSapiPerah')
        for(let i=0; i<data.length; i++){
            let row = `<tr>
                        <td>${data[i].getId()}</td>
                        <td>${data[i].getSpesiesSapi()}</td>
                        <td>${data[i].getUmur()}</td>
                        <td>${data[i].getBerat()}</td>
                        <td>${data[i].getProdSusuHarian()}</td>
                        <td>${data[i].getRiwayatPenyakit()}</td>
                        <td>${data[i].getKesehatan()}</td>
                        <td>${data[i].getKondisi()}</td>
                    </tr>`
            table.innerHTML += row;
        }
    }
}