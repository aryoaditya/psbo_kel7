// Menampilkan list sapi perah ke halaman monitoring 
// dengan memanggil method di kelas MonitoringSPR
let monitoringSPR = new MonitoringSPR();
monitoringSPR.createListSPR();

function onFormSubmit(){
    let formData = readFormData();
    createObjectSPR(formData);
    resetForm();
}

function readFormData(){
    let formData = {};
    formData["id"] = document.getElementById("id_sapiPerah").value;
    formData["spesies"] = document.getElementById("spesies_sapiPerah").value;
    formData["umur"] = document.getElementById("umur_sapiPerah").value;
    formData["berat"] = document.getElementById("berat_sapiPerah").value;
    formData["prodSusu"] = document.getElementById("prodSusu_sapiPerah").value;
    formData["kesehatan"] = document.getElementById("kesehatan_sapiPerah").value;
    formData["riwayatSakit"] = document.getElementById("riwayatSakit_sapiPerah").value;
    console.log(formData);
    return formData;
}

// data kesehatan belum dikeluarin
function createObjectSPR(data){
    monitoringSPR.addList(data.id, data.prodSusu, data.spesies, data.umur, data.berat, data.riwayatSakit, data.kesehatan);
}

function resetForm(){
    document.getElementById("id_sapiPerah").value = "";
    document.getElementById("spesies_sapiPerah").value = "";
    document.getElementById("umur_sapiPerah").value = "";
    document.getElementById("berat_sapiPerah").value = "";
    document.getElementById("prodSusu_sapiPerah").value = "";
    document.getElementById("kesehatan_sapiPerah").value = "";
    document.getElementById("riwayatSakit_sapiPerah").value = "";
}