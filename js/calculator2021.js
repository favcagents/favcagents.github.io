function all_inclusive1() {
    let hotel = document.getElementById('input7').value;
    let adulto = parseInt(document.getElementById('input8').value);
    let kids = parseInt(document.getElementById('input9').value);
    let noches = parseInt(document.getElementById('input10').value);

    if (hotel == "FALC") {
        x = 250;
        y = 85;
        a = 100;
        b = 35;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output4').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output5').innerHTML = "$"+ money + " Dollars";

    }
    else if (hotel == "FACR" || hotel == "EXCZ" || hotel == "EXKO") {
        x = 240;
        y = 85;
        a = 90;
        b = 35;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output4').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output5').innerHTML = "$"+ money + " Dollars";
    }
    else if (hotel == "FACC" || hotel == "FAPV") {
        x = 0;
        y = 190;
        a = 0;
        b = 70;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output4').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output5').innerHTML = "$"+ money + " Dollars";
    }
    else if (hotel == "LRLC") {
        x = 350;
        y = 190;
        a = 125;
        b = 75;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output4').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output5').innerHTML = "$"+ money + " Dollars";
    }

    else if (hotel == "FACB") {
        x = 400;
        y = 205;
        a = 140;
        b = 72;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output4').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output5').innerHTML = "$"+ money + " Dollars";
    }
    else {
        let answer = "Invalid - Fill all Spaces"
        document.getElementById('output4').innerHTML = answer;
    }

}
    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
