function all_inclusive() {
    let hotel = document.getElementById('input1').value;
    let adulto = parseInt(document.getElementById('input2').value);
    let kids = parseInt(document.getElementById('input3').value);
    let noches = parseInt(document.getElementById('input4').value);

    if (hotel == "FALC") {
        x = 240;
        y = 80;
        a = 95
        b = 35
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output2').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output3').innerHTML = "$"+ money + " Dollars";

    }
    else if (hotel == "FACR" || hotel == "EXCZ" || hotel == "EXKO") {
        x = 230;
        y = 80;
        a = 85
        b = 35
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output2').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output3').innerHTML = "$"+ money + " Dollars";
    }
    else if (hotel == "FACC" || hotel == "FAPV" || hotel == "CFAVA" || hotel == "CFAHO" ) {
        x = 0
        y = 180
        a = 0
        b = 65
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output2').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output3').innerHTML = "$"+ money + " Dollars";
    }
    else {
        let answer = "Invalid - Fill all Spaces"
        document.getElementById('output2').innerHTML = answer;
    }
}

    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

