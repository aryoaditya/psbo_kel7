let listSapiPotong = [];

let nSapiPotong = SapiPotongDummy.length;
for (let i=0; i<nSapiPotong; i++){
    s = SapiPotongDummy[i];
    listSapiPotong[i] = new SapiPotong();
    listSapiPotong[i].addSapiPotong(s._id, s.gender, s.cowType, s.age, s.weight, s.deseaseHistory, s.dateofDesease);    
}

console.log(listSapiPotong[1].getUmur());

tableSapiPotong(listSapiPotong);

function tableSapiPotong(data){
    let table = document.getElementById('tableSapiPotong')

    for(let i=0; i<data.length; i++){
        let row = `<tr>
                    <td>${data[i].getId()}</td>
                    <td>${data[i].getJenisKelamin()}</td>
                    <td>${data[i].getSpesiesSapi()}</td>
                    <td>${data[i].getUmur()}</td>
                    <td>${data[i].getBerat()}</td>
                    <td>${data[i].getRiwayatPenyakit()}</td>
                    <td>${data[i].getKesehatan()}</td>
                    <td>${data[i].getKondisi()}</td>
                </tr>`
        table.innerHTML += row
    }
}
