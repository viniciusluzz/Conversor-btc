const url = "https://api.bitpreco.com/btc-brl/ticker";

let h1 = document.getElementById("price");
let v1 = document.getElementById("variação");

function cota() {

    fetch(url)
        .then((btc) => {
            return btc.json()
        })
        .then((price) => {

            let valor = price.last;
            h1.innerHTML = valor.toFixed(2) + " " + "BRL";

            let valor2 = price.var;
            
            if (valor2 < 0) {
                v1.innerHTML = valor2 + "% ↙"
                v1.style.color = "red"
            }else{
                v1.innerHTML = valor2 + "% ↗"
                v1.style.color = "green"
            }
        })

}

onload = cota
setInterval(() => { cota() }, 30000);

