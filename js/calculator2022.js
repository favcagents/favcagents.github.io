function all_inclusive2() {
    let hotel = document.getElementById('input221').value;
    let adulto = parseInt(document.getElementById('input222').value);
    let kids = parseInt(document.getElementById('input223').value);
    let noches = parseInt(document.getElementById('input224').value);
    let discount = parseInt(document.getElementById('input225').value);

    if (hotel == "FAVL") {
        x = 275;
        y = 113;
        a = 110;
        b = 45;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output220').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output221').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output222').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output223').innerHTML = "$"+ m + " Dollars con Descuento";

    }
    else if (hotel == "FACR" || hotel == "EXCZ" || hotel == "EXKO") {
        x = 238;
        y = 113;
        a = 95;
        b = 45;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output220').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output221').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output222').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output223').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else if (hotel == "FACC" || hotel == "FAPV") {
        x = 0;
        y = 190;
        a = 0;
        b = 75;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output220').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output221').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output222').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output223').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else if (hotel == "LRLC") {
        x = 350;
        y = 190;
        a = 125;
        b = 75;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output220').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output221').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output222').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output223').innerHTML = "$"+ m + " Dollars con Descuento";
    }

    else if (hotel == "FACB") {
        x = 400;
        y = 205;
        a = 140;
        b = 72;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output220').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output221').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output222').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output223').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else if (hotel == "FALC") {
        x = 263;
        y = 175;
        a = 105;
        b = 70;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output220').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output221').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output222').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output223').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else {
        let answer = "Invalid - Fill all Spaces"
        document.getElementById('output220').innerHTML = answer;
    }

}
    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}