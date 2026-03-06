function pressCalculate(){
    let base = Number(document.getElementById("inpBase").value);
    let height = Number(document.getElementById('inpHeight').value);
    // let area =  Number(.5 * base * height); 
    document.getElementById("resArea").value = .5 * base * height;
}

