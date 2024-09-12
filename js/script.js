// LUAS SEGITIGA
function luassg() {
    const alas = document.getElementById('alas-sg').value;
    const tinggi = document.getElementById('tinggi-sg').value;

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert('Masukan angka yang valid untuk alas dan tinggi.');
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

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) ||  s1 <= 0 || s2 <= 0 || s3 <= 0) {
        alert('Masukan angka yang valid.');
        return;
    }
    const keliling_sg = parseFloat(s1) + parseFloat(s2) + parseFloat(s3); 
    document.getElementById('result-keliling-sg').innerHTML = ` K = ${s1} + ${s2} + ${s3} = ${keliling_sg}`; 

}

// LUAS JAJAR GENJANG
function luasJajarGenjang() {
    const alasJajarGenjang = document.getElementById('alas-jg').value;
    const tinggiJajarGenjang = document.getElementById('tinggi-jg').value;

    if (isNaN(alasJajarGenjang) || isNaN(tinggiJajarGenjang) || alasJajarGenjang <= 0 || tinggiJajarGenjang <= 0) {
        alert('Masukan angka yang valid untuk alas dan tinggi.');
        return;
    }

    const luas_jg = parseFloat(alasJajarGenjang)*parseFloat(tinggiJajarGenjang);
    document.getElementById(`result-luas-jg`).innerHTML = `L = ${alasJajarGenjang} x ${tinggiJajarGenjang} = ${luas_jg}`;
}

// Keliling JAJAR GENJANG
function kelilingJajarGenjang() {
    const alas_kelilingJajarGenjang = document.getElementById('alas-keliling').value;
    const tinggi_kelilingJajarGenjang = document.getElementById('tinggi-keliling').value;

    if (isNaN(alas_kelilingJajarGenjang) || isNaN(tinggi_kelilingJajarGenjang) || alas_kelilingJajarGenjang <= 0 || tinggi_kelilingJajarGenjang <= 0) {
        alert('Masukan angka yang valid untuk alas dan tinggi.');
        return;
    }

    const keliling_jg =  2*(parseFloat(alas_kelilingJajarGenjang)+parseFloat(tinggi_kelilingJajarGenjang));
    document.getElementById(`result-keliling-jg`).innerHTML = `K = 2 * (${alas_kelilingJajarGenjang} + ${tinggi_kelilingJajarGenjang}) = ${keliling_jg}`;
    
}