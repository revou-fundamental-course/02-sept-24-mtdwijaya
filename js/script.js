// LUAS SEGITIGA
function luassgt() {
    const alas = document.getElementById('alas-sg').value;
    const tinggi = document.getElementById('tinggi-sg').value;

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        showError('error1', 'Masukan angka yang valid untuk alas dan tinggi.');
        return;
    }
    const luas_sg = parseFloat(alas)*parseFloat(tinggi)*1/2; 
    document.getElementById('result-luas-sg').innerHTML = `L = 1/2 x ${alas} x ${tinggi} = ${luas_sg}`; 

}

// KELILING SEGITIGA
function kelilingsg() {
    const s1 = document.getElementById('sisi-pertama').value;
    const s2 = document.getElementById('sisi-kedua').value;
    const s3 = document.getElementById('sisi-ketiga').value;

    const keliling_sg = parseFloat(s1) + parseFloat(s2) + parseFloat(s3); 
    document.getElementById('result-keliling-sg').innerHTML = ` K = ${s1} + ${s2} + ${s3} = ${keliling_sg}`; 

}

// 