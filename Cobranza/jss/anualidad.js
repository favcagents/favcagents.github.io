function anualidad() {
    let puntos = parseInt(document.getElementById('input1').value);
    let type = document.getElementById('input2').value;
    let status = document.getElementById('input3').value;
    let cambio = document.getElementById('input4').value;


    if ((type == "Regular") && (status == "Regular")) {
        let x = 364;
        let cc = x.toFixed(2);
        document.getElementById('output1').innerHTML = "Cuota Club: $" + cc + " USD";
        let y = .2237 * puntos;
        let mtt1 = y.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output2').innerHTML = "Mtto: $" + mtt1 + " USD";
        let z = x + y;
        let fee = z.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output3').innerHTML = "Total USD: $" + fee + " USD";
        let a = (z) * (cambio)
        let money = a.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output4').innerHTML = "Total MXN: $" + money + " MXN";
    }
    if ((type == "Regular") && (status == "Founder")) {
        let x = 364;
        let cc = x.toFixed(2);
        document.getElementById('output1').innerHTML = "Cuota Club: $" + cc + " USD";
        let y = .1871 * puntos;
        let mtt1 = y.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output2').innerHTML = "Mtto: $" + mtt1 + " USD";
        let z = x + y;
        let fee = z.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output3').innerHTML = "Total USD: $" + fee + " USD";
        let a = (z) * (cambio)
        let money = a.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output4').innerHTML = "Total MXN: $" + money + " MXN";
    }
    if ((type == "Master") && (status == "Regular")) {
        let x = 383;
        let cc = x.toFixed(2);
        document.getElementById('output1').innerHTML = "Cuota Club: $" + cc + " USD";
        let y = .2237 * puntos;
        let mtt1 = y.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output2').innerHTML = "Mtto: $" + mtt1 + " USD";
        let z = x + y;
        let fee = z.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output3').innerHTML = "Total USD: $" + fee + " USD";
        let a = (z) * (cambio)
        let money = a.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output4').innerHTML = "Total MXN: $" + money + " MXN";
    }
    if ((type == "Master") && (status == "Founder")) {
        let x = 383;
        let cc = x.toFixed(2);
        document.getElementById('output1').innerHTML = "Cuota Club: $" + cc + " USD";
        let y = .1871 * puntos;
        let mtt1 = y.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output2').innerHTML = "Mtto: $" + mtt1 + " USD";
        let z = x + y;
        let fee = z.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output3').innerHTML = "Total USD: $" + fee + " USD";
        let a = (z) * (cambio)
        let money = a.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
        document.getElementById('output4').innerHTML = "Total MXN: $" + money + " MXN";
    }
}
