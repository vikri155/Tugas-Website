document.getElementById("whatsappButton").addEventListener("click", function() {
    // Ganti nomor berikut dengan nomor WhatsApp yang ingin Anda tuju
    var phoneNumber = "6285162626224";

    // Membuka aplikasi WhatsApp dengan URI Scheme
    window.location.href = "https://wa.me/" + phoneNumber;
});

// Mengambil referensi elemen nav
var menuNav = document.getElementById("menu");

// Menambahkan event listener untuk event "click" pada elemen nav
menuNav.addEventListener("click", function() {
    // Kode yang akan dijalankan ketika elemen nav diklik
    alert("Menu navigation ini belum tersedia!");
});

// mengambil element button
// Menambahkan event listener untuk setiap tombol dengan name "sidebarButton"
var buttons = document.getElementsByName("sidebarButton");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        handleButtonClick(this.name);
    });
}

// Fungsi untuk menangani klik tombol
function handleButtonClick(buttonName) {
    alert("Menu FAQ ini belum tersedia!");
}

// mengambil elemen dari input select option merek motor
let merek = document.getElementById('motor');
// nilai default harga merek motor
let hargaMerek = 0;
// proses yang telah dipilih untuk input merek
merek.addEventListener("change", function () {
switch (merek.value) {
    case "honda":
        hargaMerek = 15000000;
        break;
        case "yamaha":
            hargaMerek = 14000000;
        break;
        case "suzuki":
            hargaMerek = 13000000;
            break;
        }
        proses();
        totalHargaFinal();
    });
    
    
// mengambil elemen dari input checkbox aksesoris
var checkboxes = document.getElementsByName("aksesoris");
// nilai default dari harga aksesoris
let hargaAksesoris = 0;
// proses yang telah dipilih untuk input aksesoris 
// Menambahkan atribut data-harga dan onclick ke setiap checkbox
checkboxes.forEach(function(checkbox) {
switch (checkbox.value) {
    case "velg":
        checkbox.dataset.harga = "500000";
        break;
        case "helm":
        checkbox.dataset.harga = "300000";
        break;
        case "jaket":
        checkbox.dataset.harga = "150000";
        break;
        }
        checkbox.addEventListener("change", function() {
            updateTotal();
            totalHargaFinal();
        });
});
                        
                        
// Fungsi untuk menghitung dan menampilkan total harga saat checkbox diubah
function updateTotal(checkbox) {
    hargaAksesoris = 0;
    
    checkboxes.forEach(function (chk) {
        if (chk.checked && chk.dataset.harga) {
            hargaAksesoris += parseInt(chk.dataset.harga);
        }
    });
    proses();
}
                        
                        

// mengambil elemen dari input radio pembayaran
let pembayaran = document.getElementsByName('pembayaran');
// nilai default pembayaran false karena belum dipilih
let pembayaranTerpilih = false;
// proses pembayaran
  pembayaran.forEach((element) => {
      element.addEventListener("click", function () {
          
          for (var i = 0; i < pembayaran.length; i++) {
              if (pembayaran[i].checked) {
                  var selectedPembayaran = pembayaran[i].value;
                
                  // Setel variabel tunai berdasarkan nilai elemen yang diklik
                  hargaDiskon = document.getElementById('bunga-diskon');
                  if (tunai = element.value === 'tunai'){
                      hargaDiskon.value = "5% (diskon)";
                    } else{
                        hargaDiskon.value = "10% (bunga)";
                    }
                    pembayaranTerpilih = true;
                    totalHargaFinal();
                }
            }
            
        });
    });
    
// mengambil elemen dari input text yang menampilkan harga sebelum diskon maupun bunga
let harga = document.getElementById('harga');
// menjalankan fungsi yang value nya diambil dari tiap" input
function proses() {
    harga.value = (hargaMerek + hargaAksesoris).toLocaleString();
};

totalHarga = document.getElementById('total');
function totalHargaFinal() {
    if (pembayaranTerpilih) {
        if (tunai) {
            var presentaseDiskon = 5;
            var totalDiskon = (harga.value.replace(/,/g, '') * presentaseDiskon) / 100;
            alert('Total diskon yang kamu dapat : ' + totalDiskon.toLocaleString());
            totalHarga.value = (parseFloat(harga.value.replace(/,/g, '')) - totalDiskon).toLocaleString();
        } else {
            var presentaseBunga = 10;
            var totalBunga = (harga.value.replace(/,/g, '') * presentaseBunga) / 100;
            alert('Total bunga yang kamu dapat : ' + totalBunga.toLocaleString());
            totalHarga.value = (parseFloat(harga.value.replace(/,/g, '')) + totalBunga).toLocaleString();
        }
    } else {
        totalHarga.value = harga.value;
    }
}


// Menambahkan event listener untuk event submit pada form
formulir.addEventListener('submit', function (event) {
    // Menghentikan aksi default form (mencegah pengiriman data)
    event.preventDefault();
    // Memeriksa apakah nilai motor, aksesoris, pembayaran, dan harga sudah diisi
    let motorValue = merek.value;
        let aksesorisChecked = [...checkboxes].some(checkbox => checkbox.checked);
        let pembayaranChecked = [...pembayaran].some(radio => radio.checked);
        let hargaValue = harga.value;

        // Jika ada yang kosong, tampilkan pesan kesalahan
        if (motorValue === "- pilih motor -" || !aksesorisChecked || !pembayaranChecked || hargaValue === "") {
            alert('Harap isi semua formulir terlebih dahulu!');
        } else {
            // Jika semua sudah diisi, tampilkan alert pembelian sedang diproses
            alert('Pembelian Anda sedang diproses');
            resetForm();
        }
    });
    

// Menambahkan event listener untuk tombol reset
document.querySelector('button[type="reset"]').addEventListener('click', function () {
    resetForm();
});
// Fungsi resetForm untuk mereset semua nilai ke nilai default
function resetForm() {
    hargaMerek = 0;
    hargaAksesoris = 0;
    tunai = true;

    merek.value = "- pilih motor -";
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    pembayaran.forEach(function (radio) {
        radio.checked = false;
    });

    harga.value = "";
    // Menggunakan id yang benar, yaitu 'bunga-diskon'
    document.getElementById('bunga-diskon').value = "";
    totalHarga.value = "";
    pembayaranTerpilih = false; // Reset ke nilai default
}


