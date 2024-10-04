let segundos = 0;

function iniciarContador() {
    setInterval(() => {
        segundos++;
        document.getElementById("contador").innerText = `Segundos: ${segundos}`;
    }, 1000);
}
