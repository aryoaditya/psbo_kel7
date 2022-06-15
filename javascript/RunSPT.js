// Menampilkan list sapi potong ke halaman monitoring 
// dengan memanggil method di kelas MonitoringSPT
let monitoringSPT = new MonitoringSPT();
monitoringSPT.createListSPT();

function onFormSubmit(){
    let formData = readFormData();
    createObjectSPT(formData);
    resetForm();
}

function readFormData(){
    let formData = {};
    formData["id"] = document.getElementById("id_sapiPotong").value;
    formData["jenisKelamin"] = document.getElementById("jenisKelamin_sapiPotong").value;
    formData["spesies"] = document.getElementById("spesies_sapiPotong").value;
    formData["umur"] = document.getElementById("umur_sapiPotong").value;
    formData["berat"] = document.getElementById("berat_sapiPotong").value;
    formData["kesehatan"] = document.getElementById("kesehatan_sapiPotong").value;
    formData["riwayatSakit"] = document.getElementById("riwayatSakit_sapiPotong").value;
    return formData;
}

// data kesehatan belum dikeluarin
function createObjectSPT(data){
    monitoringSPT.addList(data.id, data.jenisKelamin, data.spesies, data.umur, data.berat, data.riwayatSakit, data.kesehatan);
}

function resetForm(){
    document.getElementById("id_sapiPotong").value = "";
    document.getElementById("jenisKelamin_sapiPotong").value = "";
    document.getElementById("spesies_sapiPotong").value = "";
    document.getElementById("umur_sapiPotong").value = "";
    document.getElementById("berat_sapiPotong").value = "";
    document.getElementById("kesehatan_sapiPotong").value = "";
    document.getElementById("riwayatSakit_sapiPotong").value = "";
}