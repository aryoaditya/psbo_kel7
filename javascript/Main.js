let listSapi = [];

let jumlahSapi = SapiPotongDummy.length;
for (let i=0; i<jumlahSapi; i++){
    s = SapiPotongDummy[i]
    listSapi[i] = new Sapi();
    listSapi[i].addSapi(s._id, s.gender, s.age, s.deseaseHistory, s.dateofDesease);
}

buildTable(listSapi);

function buildTable(data){
    let table = document.getElementById('tableSapi')

    for(let i=0; i<data.length; i++){
        let row = `<tr>
                    <td>${data[i].getId()}</td>
                    <td>${data[i].getJenisKelamin()}</td>
                    <td>${data[i].getUmur()}</td>
                    <td>${data[i].getBerat()}</td>
                    <td>${data[i].getRiwayatPenyakit()}</td>
                    <td>${data[i].getTanggalSakit()}</td>
                </tr>`
        table.innerHTML += row
    }
}
