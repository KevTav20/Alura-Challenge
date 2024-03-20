document.addEventListener('DOMContentLoaded', function() {
    const btnEncriptar = document.querySelector('button:nth-of-type(1)');
    const btnDesencriptar = document.getElementById('desencriptarInput');
    const textoArea = document.querySelector('textarea');
    const resultadoDiv = document.querySelector('.nada');
    const resultadoMensaje = document.querySelector('.nada p');

    btnEncriptar.addEventListener('click', function(e) {
        e.preventDefault();
        const textoEncriptado = encriptarTexto(textoArea.value);
        mostrarResultado(textoEncriptado);
    });

    btnDesencriptar.addEventListener('click', function(e) {
        e.preventDefault();
        const textoDesencriptado = desencriptarTexto(textoArea.value);
        mostrarResultado(textoDesencriptado);
    });

    function encriptarTexto(texto) {
        let textoEncriptado = texto.replace(/e/g, "enter")
                                   .replace(/i/g, "imes")
                                   .replace(/a/g, "ai")
                                   .replace(/o/g, "ober")
                                   .replace(/u/g, "ufat");
        return textoEncriptado;
    }

    function desencriptarTexto(texto) {
        let textoDesencriptado = texto.replace(/enter/g, "e")
                                       .replace(/imes/g, "i")
                                       .replace(/ai/g, "a")
                                       .replace(/ober/g, "o")
                                       .replace(/ufat/g, "u");
        return textoDesencriptado;
    }

    function mostrarResultado(texto) {
        resultadoDiv.innerHTML = `<section class="self-center grid gap-3 p-2">
                                    <h2 class="text-[#343A40] text-xl font-black text-center text-[24px]">Resultado</h2>
                                    <p class="text-[16px] text-center">${texto}</p>
                                    <button class="copiarBtn text-white bg-[#0A3871] p-2 rounded">Copiar</button>
                                  </section>`;
        resultadoDiv.classList.remove('xl:hidden'); // Asegurarse de mostrar el div si estaba oculto
        document.querySelector('.copiarBtn').addEventListener('click', function() {
            navigator.clipboard.writeText(texto).then(() => {
                alert("Texto copiado al portapapeles");
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        });
    }
});
