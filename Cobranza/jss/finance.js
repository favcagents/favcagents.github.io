function finance() {
    let saldo = parseInt(document.getElementById('input5').value);
    let months = document.getElementById('input6').value;
    let cambio = document.getElementById('input7').value;
    let x = saldo/months;
    let y = x + 10;
    let money = y.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
    document.getElementById('output5').innerHTML = "Monthly USD: $" + money + " USD";
    let z = money * cambio;
    let pesos = z.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
    document.getElementById('output6').innerHTML = "Monthly MXN: $" + pesos + " MXN";
}
