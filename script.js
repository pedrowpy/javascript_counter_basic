let segundos = 0;
let milissegundos = 0;

function iniciarContador() {
    setInterval(() => {
        milissegundos += 10;
        if (milissegundos === 1000) {
            milissegundos = 0;
            segundos++;
        }
        document.getElementById("contador").innerText = `Segundos: ${segundos}: ${milissegundos}`;
    }, 10); // att.
}
