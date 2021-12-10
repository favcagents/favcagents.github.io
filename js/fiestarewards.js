function fiesta_rewards() {

    let x = parseInt(document.getElementById('inputfr1').value);
    let y = x * 70
    let answer = formatNumber(y)
    document.getElementById('outputfr').innerHTML = answer + " Puntos FR";
    }