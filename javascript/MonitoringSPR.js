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
    }

    // tambah list sapi baru
    addList(id, prodSusu, spesies, umur, berat, riwayatSakit, kesehatan){
        let n = this.listSapiPerah.length;

        this.listSapiPerah[n] = new SapiPerah();
        this.listSapiPerah[n].addSapiPerah(id, prodSusu, spesies, umur, berat, riwayatSakit, kesehatan);
        this.addRow(this.listSapiPerah[n], n);
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
                        <td> <button onClick="onEdit(${i})" type="button" class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#edit">
                                <span style="padding: 2px;">
                                Edit
                                </span>
                            </button> </td>
                    </tr>`
            table.innerHTML += row;
        }
    }

    // tampilin sapi baru ke halaman monitoring
    addRow(data, i){
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
                        <td> <button onClick="onEdit(${i})" type="button" class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#edit">
                                <span style="padding: 2px;">
                                Edit
                                </span>
                            </button></td>
                    </tr>`
        table.innerHTML += row;
    }
    
    getListSPR(){
        return this.listSapiPerah;
    }

    // Cek jumlah sapi potong untuk ditampilkan ke halaman informasi
    cekSiapPerah(){
        let n = 0;
        for(let i=0; i<this.listSapiPerah.length;i++){
            if(this.listSapiPerah[i].getKondisi() == "Siap Perah"){
                n += 1;
            }
        }
        return n;
    }

    // update tampilan halaman monitoring sapi perah setelah diedit
    updateSapi(data, idx){
        let table = document.getElementById('TableSapiPerah')
        table.innerHTML = "";
        data[idx].setKondisi();
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
                        <td> <button onClick="onEdit(${i})" type="button" class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#edit">
                                <span style="padding: 2px;">
                                Edit
                                </span>
                            </button> </td>
                    </tr>`
            table.innerHTML += row;
        }
    }
}