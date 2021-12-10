function favcdinamica() {

    let x = parseInt(document.getElementById('inputfavc').value);
    let y = x*3.118
    let z = Math.ceil(y/10) * 10
    let answer = formatNumber(z)
    document.getElementById('outputfavc').innerHTML = answer + " Puntos";
    }