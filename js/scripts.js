let colorCanv = document.getElementById('color_canv');
let colorCanvCTX = colorCanv.getContext('2d');
let r;
let g;
let b;
let textR = document.getElementById('text_r');
let textG = document.getElementById('text_g');
let textB = document.getElementById('text_b');
let t=0;

window.onload = function() {
    reset()
}

function reset() {
    r = Math.floor(Math.random() * 250)
    g = Math.floor(Math.random() * 250)
    b = Math.floor(Math.random() * 250)

    colorCanvCTX.fillStyle = `rgb(${r}, ${g}, ${b})`;
    colorCanvCTX.fillRect(10, 10, 50, 50);

    colorCanvCTX.fillStyle = `rgb(255, 255, 255)`
    colorCanvCTX.fillRect(100,10,50,50)

}

function check(color,guess) {

    console.log(color)

    if (guess >= color-5 && guess <= color+5) {
        return "BINGO"
    } else if (guess < color) {
        return "wiecej"
    } else {
        return "mniej"
    }

}

function guess() {

    let guess_r = document.getElementById('guess_r').value;
    let guess_g = document.getElementById('guess_g').value;
    let guess_b = document.getElementById('guess_b').value;
    
    textR.innerHTML = check(r, guess_r);
    textG.innerHTML = check(g, guess_g);
    textB.innerHTML = check(b, guess_b);

    t++;

    if((check(r, guess_r) +
    check(g, guess_g) +
    check(b, guess_b)) === "BINGOBINGOBINGO") {
        alert(`liczba prób: ${t}`)
    }

    colorCanvCTX.fillStyle = `rgb(${guess_r}, ${guess_g}, ${guess_b})`
    colorCanvCTX.fillRect(100,10,50,50)
}