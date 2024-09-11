function luas() {
    const alas = document.getElementsById('alas').value;
    const tinggi = document.getElementById('tinggi').value;

    const luas = alas*tinggi/2; 
    document.getElementById('result').innerHTML = luas; 

}