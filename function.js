// membuat sebuah function
function cetak_nama() { // void
    console.info("ini di jalankan di function")
}

// menjalankan function
// cetak_nama()

function hasil(panjang, lebar) {
    return panjang * lebar
}


// arrow function 
let hitungLuas = (p, l) => {
    return p * l
}

let value = hitungLuas(10, 3)

console.info(value)