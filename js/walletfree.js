function wallet_free() {

    let x = parseInt(document.getElementById('input5').value);
    let y = (x/80) * 500
    let answer = formatNumber(y)
    document.getElementById('output').innerHTML = "$" + answer + " MXN";
    
    }
    function dinero() {
    let x = parseInt(document.getElementById('input6').value);
    let y = (x/500) * 80
    let z = y.toFixed(2)
    let answer = formatNumber(z)
    document.getElementById('output1').innerHTML = answer + " Puntos";
    }