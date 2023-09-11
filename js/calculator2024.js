function all_inclusive4() {
    let hotel = document.getElementById('input401').value;
    let adulto = parseInt(document.getElementById('input402').value);
    let kids = parseInt(document.getElementById('input403').value);
    let noches = parseInt(document.getElementById('input404').value);
    let discount = parseInt(document.getElementById('input405').value);

    if (hotel == "FALC") {
        x = 385;
        y = 265;
        a = 145;
        b = 100;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output401').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output402').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output403').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output404').innerHTML = "$"+ m + " Dollars con Descuento";

    }
    else if (hotel == "FACR" || hotel == "EXCZ" || hotel == "EXKO") {
        x = 290;
        y = 145;
        a = 110;
        b = 55;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output401').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output402').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output403').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output404').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else if (hotel == "LRLC") {
        x = 450;
        y = 290;
        a = 170;
        b = 110;
        let amount = ((adulto * x) + (kids * y)) * noches;
        let answer = formatNumber(amount);
        document.getElementById('output401').innerHTML = answer + " Puntos";
        let dinero = ((adulto * a) + (kids * b)) * noches;
        let money = formatNumber(dinero);
        document.getElementById('output402').innerHTML = "$"+ money + " Dollars";
        let descuento = (discount/100)
        let finalp = (amount * descuento)
        let discountp = (amount - finalp)
        let finalm = (dinero * descuento)
        let discountm = (dinero - finalm)
        let p = Math.round(discountp);
        let m = Math.round(discountm);
        document.getElementById('output403').innerHTML = p + " Puntos con Descuento";
        document.getElementById('output404').innerHTML = "$"+ m + " Dollars con Descuento";
    }
    else {
        let answer = "Invalid - Fill all Spaces"
        document.getElementById('output401').innerHTML = answer;
    }

}
    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}