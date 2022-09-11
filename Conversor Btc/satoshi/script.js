const url = "https://api.bitpreco.com/btc-brl/ticker";

let h1 = document.getElementById("price");

let input = document.getElementById("valor");
let input2 = document.getElementById("valor2");

function realSatoshi() {

    fetch(url)
        .then((btc) => {
            return btc.json()
        })
        .then((price) => {

            let valor = (input.value / price.last) * 100000000;

            h1.innerHTML = valor.toFixed(2) + " " + "SATS";

        })

}

function satoshiReal() {

    fetch(url)
        .then((btc) => {
            return btc.json()
        })
        .then((price) => {

            let valor = ((input2.value / 100000000) * price.last);

            if (valor < 1) {

                h1.innerHTML = valor.toFixed(5) + " " + "BRL";

            } else {

                h1.innerHTML = valor.toFixed(2) + " " + "BRL";

            }

        })

}

function OffClose() {        
    h1.innerHTML = "Price" 
}

input.oninput = realSatoshi
input.onchange = OffClose

input2.oninput = satoshiReal
input2.onchange = OffClose

