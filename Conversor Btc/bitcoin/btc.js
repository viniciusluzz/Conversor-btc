const url = "https://api.bitpreco.com/btc-brl/ticker";

let h1 = document.getElementById("price");

let input = document.getElementById("valor");
let input2 = document.getElementById("valor2");

function realBtc() {

    fetch(url)
        .then((btc) => {
            return btc.json()
        })
        .then((price) => {

            let valor = (input.value / price.last);

            if (valor >= 1) {
                h1.innerHTML = valor.toFixed(2) + " " + "BTC";
            }else{
                h1.innerHTML = valor.toFixed(8) + " " + "BTC";
            }
        })

}

function BtcReal() {

    fetch(url)
        .then((btc) => {
            return btc.json()
        })
        .then((price) => {

            let valor = ((input2.value) * price.last);

            h1.innerHTML = valor.toFixed(2) + " " + "BRL";
        })

}

function OffClose() {
    h1.innerHTML = "Price"
}

input.oninput = realBtc
input.onchange = OffClose

input2.oninput = BtcReal
input2.onchange = OffClose

