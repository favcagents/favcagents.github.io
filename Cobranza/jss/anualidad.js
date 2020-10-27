function anualidad() {
    let puntos = document.getElementById('input1').value;
    let type = parseInt(document.getElementById('input2').value);
    let status = parseInt(document.getElementById('input3').value);


    if (type == "Regular") {
        let x = 318;
        if (status == "Regular") {
            let y = .1952;
            let cuota = x;
            let mtto = (puntos * y);
            document.getElementById('output1').innerHTML = cuota;
            document.getElementById('output2').innerHTML = mtto; 
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