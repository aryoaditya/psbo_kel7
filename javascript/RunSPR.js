// Menampilkan list sapi perah ke halaman monitoring 
// dengan memanggil method di kelas MonitoringSPR
let monitoringSPR = new MonitoringSPR();
monitoringSPR.createListSPR();
monitoringSPR.tableSapiPerah(monitoringSPR.listSapiPerah);

// fungsi trigger submit form add sapi
function onFormSubmit(){
    let formData = readFormData();
    createObjectSPR(formData);
    resetForm();
}

// fungsi baca data dari form "add sapi"
function readFormData(){
    let formData = {};
    formData["id"] = document.getElementById("id_sapiPerah").value;
    formData["spesies"] = document.getElementById("spesies_sapiPerah").value;
    formData["umur"] = document.getElementById("umur_sapiPerah").value;
    formData["berat"] = document.getElementById("berat_sapiPerah").value;
    formData["prodSusu"] = document.getElementById("prodSusu_sapiPerah").value;
    formData["kesehatan"] = document.getElementById("kesehatan_sapiPerah").value;
    formData["riwayatSakit"] = document.getElementById("riwayatSakit_sapiPerah").value;
    return formData;
}

// Buat objek baru fitur "add sapi"
function createObjectSPR(data){
    monitoringSPR.addList(data.id, data.prodSusu, data.spesies, data.umur, data.berat, data.riwayatSakit, data.kesehatan);
}

// Reset form setelah submit
function resetForm(){
    document.getElementById("id_sapiPerah").value = "";
    document.getElementById("spesies_sapiPerah").value = "";
    document.getElementById("umur_sapiPerah").value = "";
    document.getElementById("berat_sapiPerah").value = "";
    document.getElementById("prodSusu_sapiPerah").value = "";
    document.getElementById("kesehatan_sapiPerah").value = "";
    document.getElementById("riwayatSakit_sapiPerah").value = "";
}


// trigger ketika tombol edit diklik
// untuk menampilkan data sapi pada form sebelum diedit
function onEdit(i){
    let list = monitoringSPR.getListSPR();
    document.getElementById("id_sapiPerahEdit").value = list[i].getId();
    document.getElementById("umur_sapiPerahEdit").value = list[i].getUmur();
    document.getElementById("berat_sapiPerahEdit").value = list[i].getBerat();
    document.getElementById("kesehatan_sapiPerahEdit").value = list[i].getKesehatan();
    document.getElementById("riwayatSakit_sapiPerahEdit").value = list[i].getRiwayatPenyakit();
}

// fungsi submit edit
function onFormEdit(){
    let formData = readFormEdit();
    editObjectSPR(formData);
}

// membaca form setelah edit
function readFormEdit(){
    let formData = {};
    formData["id"] = document.getElementById("id_sapiPerahEdit").value;
    formData["umur"] = document.getElementById("umur_sapiPerahEdit").value;
    formData["berat"] = document.getElementById("berat_sapiPerahEdit").value;
    formData["kesehatan"] = document.getElementById("kesehatan_sapiPerahEdit").value;
    formData["riwayatSakit"] = document.getElementById("riwayatSakit_sapiPerahEdit").value;
    return formData;
}

// update object
function editObjectSPR(data){
    let list = monitoringSPR.getListSPR();
    for(i=0; i<list.length;i++){
        if(list[i].getId() == data.id){
            list[i].setUmur(data.umur);
            list[i].setBerat(data.berat);
            list[i].setKesehatan(data.kesehatan);
            list[i].setRiwayatPenyakit(data.riwayatSakit);
            monitoringSPR.updateSapi(list, i);
        }
    }
}