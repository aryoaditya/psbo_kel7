// Menampilkan list sapi potong ke halaman monitoring 
// dengan memanggil method di kelas MonitoringSPT
let monitoringSPT = new MonitoringSPT();
monitoringSPT.createListSPT();
monitoringSPT.tableSapiPotong(monitoringSPT.listSapiPotong);

// fungsi trigger submit form add sapi
function onFormSubmit(){
    let formData = readFormData();
    createObjectSPT(formData);
    resetForm();
}

// fungsi baca data dari form "add sapi"
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

// Buat objek baru fitur "add sapi"
function createObjectSPT(data){
    monitoringSPT.addList(data.id, data.jenisKelamin, data.spesies, data.umur, data.berat, data.riwayatSakit, data.kesehatan);
}

// Reset form setelah submit
function resetForm(){
    document.getElementById("id_sapiPotong").value = "";
    document.getElementById("jenisKelamin_sapiPotong").value = "";
    document.getElementById("spesies_sapiPotong").value = "";
    document.getElementById("umur_sapiPotong").value = "";
    document.getElementById("berat_sapiPotong").value = "";
    document.getElementById("kesehatan_sapiPotong").value = "";
    document.getElementById("riwayatSakit_sapiPotong").value = "";
}

// trigger ketika tombol edit diklik
// untuk menampilkan data sapi pada form sebelum diedit
function onEdit(i){
    let list = monitoringSPT.getListSPT();
    document.getElementById("id_sapiPotongEdit").value = list[i].getId();
    document.getElementById("umur_sapiPotongEdit").value = list[i].getUmur();
    document.getElementById("berat_sapiPotongEdit").value = list[i].getBerat();
    document.getElementById("kesehatan_sapiPotongEdit").value = list[i].getKesehatan();
    document.getElementById("riwayatSakit_sapiPotongEdit").value = list[i].getRiwayatPenyakit();
}

// fungsi submit edit
function onFormEdit(){
    let formData = readFormEdit();
    editObjectSPT(formData);
}

// membaca form setelah edit
function readFormEdit(){
    let formData = {};
    formData["id"] = document.getElementById("id_sapiPotongEdit").value;
    formData["umur"] = document.getElementById("umur_sapiPotongEdit").value;
    formData["berat"] = document.getElementById("berat_sapiPotongEdit").value;
    formData["kesehatan"] = document.getElementById("kesehatan_sapiPotongEdit").value;
    formData["riwayatSakit"] = document.getElementById("riwayatSakit_sapiPotongEdit").value;
    return formData;
}

// update object
function editObjectSPT(data){
    let list = monitoringSPT.getListSPT();
    for(i=0; i<list.length;i++){
        if(list[i].getId() == data.id){
            list[i].setUmur(data.umur);
            list[i].setBerat(data.berat);
            list[i].setKesehatan(data.kesehatan);
            list[i].setRiwayatPenyakit(data.riwayatSakit);
            monitoringSPT.updateSapi(list, i);
        }
    }
}