function urutkanHarga(arrayHarga) {
    arrayHarga.sort(function (a,b) {
        return a-b;
    });

    return arrayHarga;
}

var hargaBarang = [75000, 10000, 50000, 25000];
var hargaTermurahTermahal = urutkanHarga(hargaBarang);
console.log(hargaTermurahTermahal);