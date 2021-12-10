function mipoints() {

    let x = parseInt(document.getElementById('inputmp').value);
    let y = x/0.17
    let z = Math.ceil(y/100)*100
    let answer = formatNumber(z)
    document.getElementById('outputmp').innerHTML = answer + " Puntos";
    }