// Mengambil data sapi potong
let monitoringSPT = new MonitoringSPT();
monitoringSPT.createListSPT();
let nSiapPotong = monitoringSPT.cekSiapPotong();
let listSPT = monitoringSPT.getListSPT();

//Mengambil data sapi perah
let monitoringSPR = new MonitoringSPR();
monitoringSPR.createListSPR();
let nSiapPerah = monitoringSPR.cekSiapPerah();
let listSPR = monitoringSPR.getListSPR();

//Tampilkan ke halaman informasi
let info = new Information();
info.setInformation(listSPT, listSPR, nSiapPotong, nSiapPerah);
info.getInformation();