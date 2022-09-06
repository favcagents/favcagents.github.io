function all_inclusive3() {
    let hotel = document.getElementById('input321').value;
    let adulto = parseInt(document.getElementById('input322').value);
    let kids = parseInt(document.getElementById('input323').value);
    let noches = parseInt(document.getElementById('input324').value);
    let discount = parseInt(document.getElementById('input325').value);

    if (hotel == "FAVL") {
        x = 335;
        y = 215;
        a = 127;
        b = 82;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output320').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output321').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output322').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output323').innerHTML = "$"+ m + " Dollars con Descuento";

    }
    else if (hotel == "FACR" || hotel == "EXCZ" || hotel == "EXKO") {
        x = 265;
        y = 130;
        a = 100;
        b = 50;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output320').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output321').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output322').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output323').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else if (hotel == "LRLC") {
        x = 405;
        y = 245;
        a = 152;
        b = 92;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output320').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output321').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output322').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output323').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else if (hotel == "FALC") {
        x = 335;
        y = 215;
        a = 127;
        b = 82;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output320').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output321').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output322').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output323').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else {
        let answer = "Invalid - Fill all Spaces"
        document.getElementById('output320').innerHTML = answer;
    }

}
    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}