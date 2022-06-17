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
    }

    // tambah list dari form baru
    addList(id, jenisKelamin, spesies, umur, berat, riwayatSakit, kesehatan){
        let n = this.listSapiPotong.length;

        this.listSapiPotong[n] = new SapiPotong();
        this.listSapiPotong[n].addSapiPotong(id, jenisKelamin, spesies, umur, berat, riwayatSakit, kesehatan);
        this.addRow(this.listSapiPotong[n], n);
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
                        <td> <button onClick="onEdit(${i})" type="button" class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#edit">
                                <span style="padding: 2px;">
                                Edit
                                </span>
                            </button></td>
                    </tr>`
            table.innerHTML += row;
        }
    }

    // tampilin sapi baru ke halaman monitoring
    addRow(data, i){
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
                        <td> <button onClick="onEdit(${i})" type="button" class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#edit">
                                <span style="padding: 2px;">
                                Edit
                                </span>
                            </button> </td>
                    </tr>`
        table.innerHTML += row;
    }

    getListSPT(){
        return this.listSapiPotong;
    }

    cekSiapPotong(){
        let n = 0;
        for(let i=0; i<this.listSapiPotong.length;i++){
            if(this.listSapiPotong[i].getKondisi() == "Siap Potong"){
                n += 1;
            }
        }
        return n;
    }

    // update tampilan halaman monitoring sapi potong setelah diedit
    updateSapi(data, idx){
        let table = document.getElementById('TableSapiPotong')
        table.innerHTML = "";
        console.log(data[idx].getKondisi());
        data[idx].setKondisi();
        console.log(data[idx].getKondisi());
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
                        <td> <button onClick="onEdit(${i})" type="button" class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#edit">
                                <span style="padding: 2px;">
                                Edit
                                </span>
                            </button></td>
                    </tr>`
            table.innerHTML += row;
        }
    }


    

}