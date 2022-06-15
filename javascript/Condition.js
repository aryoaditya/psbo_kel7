class Condition{
    constructor(){
        this.kondisi = "";
    }

    // overloading
    setKondisi() {
        // Untuk Sapi Perah
        var function1 = function (umur, kesehatan) {
            let kondisi = "";
            if((umur >= 2.5) && (kesehatan == "Sehat")){
                kondisi = "Siap Perah";
            }
            else{
                kondisi = "Tidak Siap Perah";
            }
            return kondisi;            
        };
        
        // Untuk Sapi Potong
        var function2 = function (umur, kesehatan, berat, jenisKelamin) {
            let kondisi = "";
            if((jenisKelamin == "Betina") && (umur >= 8) && (berat >= 250) && (kesehatan == "Sehat")){
                kondisi = "Siap Potong";
            }
            else if((jenisKelamin == "Jantan") && (umur >= 3) && (berat >= 250) && (kesehatan == "Sehat")){
                kondisi = "Siap Potong";
            }
            else{
                kondisi = "Tidak Siap Potong";
            }
            return kondisi;
        };

        if (arguments.length === 2) {
            this.kondisi = function1(arguments[0], arguments[1]);
        } else if (arguments.length === 4) {
            this.kondisi = function2(arguments[0], arguments[1], arguments[2], arguments[3]);
        }
    }

    getKondisi(){
        return this.kondisi;
    }

}