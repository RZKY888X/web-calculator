function appendValue(value) {
    const hasilInput = document.getElementById('hasil');
    hasilInput.value += value;
}

function clearResult() {
    const hasilInput = document.getElementById('hasil');
    hasilInput.value = '';
}

function calculate() {
    const hasilInput = document.getElementById('hasil');
    try {
        // Menggunakan eval untuk menghitung ekspresi
        hasilInput.value = eval(hasilInput.value);
    } catch (error) {
        hasilInput.value = 'Error';
    }
}
