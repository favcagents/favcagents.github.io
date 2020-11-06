function anualidad() {
    let puntos = parseInt(document.getElementById('input1').value);
    let type = document.getElementById('input2').value;
    let status = document.getElementById('input3').value;


    if (type == "Regular") {
        let x = 318.00;
        if (status == "Regular") {
            let y = .1952 * puntos;
            let cuota = x.toFixed(2);
            let mtto = y.toFixed(2);
            let usd = cuota + mtto;
            let answer = formatNumber(usd)
            let fix1 = answer;
            let mxn = usd * 20;
            let fix2 = formatNumber(mxn);
            document.getElementById('output1').innerHTML = "Cuota: $" + cuota + " USD";
            document.getElementById('output2').innerHTML = "MTTO: $" + mtto + " USD";
            document.getElementById('output3').innerHTML = "Total: $" + fix1 + " USD";
            document.getElementById('output4').innerHTML = "Total: $" + fix2 + " MXN";
        }
        if (status == "Founder") {
            y = .1632 
        }
    }
    if (type == "Master") {
        x = 334 
        if (status == "Regular") {
            y = .1952
        } 
        if (status == "Founder") {
            y = .1632 
        } 
    }
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }