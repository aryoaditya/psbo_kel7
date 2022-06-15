class MonitoringSPT{
    constructor(){
        this.listSapiPotong = [];
    }

    // Buat list sapi
    createListSPT(){
        let nSapiPotong = SapiPotongDummy.length;

        for (let i=0; i<nSapiPotong; i++){
            let s = SapiPotongDummy[i];
            this.listSapiPotong[i] = new SapiPotong();
            this.listSapiPotong[i].addSapiPotong(s._id, s.gender, s.cowType, s.age, s.weight, s.deseaseHistory, s.health);    
        }
        
        this.tableSapiPotong(this.listSapiPotong);
    }

    addList(id, jenisKelamin, spesies, umur, berat, riwayatSakit, kesehatan){
        let n = this.listSapiPotong.length;

        this.listSapiPotong[n-1] = new SapiPotong();
        this.listSapiPotong[n-1].addSapiPotong(id, jenisKelamin, spesies, umur, berat, riwayatSakit, kesehatan);
        this.addRow(this.listSapiPotong[n-1]);
    }

    // Tampilin ke halaman monitoring
    tableSapiPotong(data){
        let table = document.getElementById('TableSapiPotong')
        for(let i=0; i<data.length; i++){
            let row = `<tr>
                        <td>${data[i].getId()}</td>
                        <td>${data[i].getJenisKelamin()}</td>
                        <td>${data[i].getSpesiesSapi()}</td>
                        <td>${data[i].getUmur()}</td>
                        <td>${data[i].getBerat()} Kg</td>
                        <td>${data[i].getRiwayatPenyakit()}</td>
                        <td>${data[i].getKesehatan()}</td>
                        <td>${data[i].getKondisi()}</td>
                    </tr>`
            table.innerHTML += row;
        }
    }

    addRow(data){
        let table = document.getElementById('TableSapiPotong');

        let row = `<tr>
                        <td>${data.getId()}</td>
                        <td>${data.getJenisKelamin()}</td>
                        <td>${data.getSpesiesSapi()}</td>
                        <td>${data.getUmur()}</td>
                        <td>${data.getBerat()} Kg</td>
                        <td>${data.getRiwayatPenyakit()}</td>
                        <td>${data.getKesehatan()}</td>
                        <td>${data.getKondisi()}</td>
                    </tr>`
        table.innerHTML += row;
    }
}