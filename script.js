function encriptar() {
    var texto = document.getElementById("textodesencriptado").value;

    var textoencriptado = texto.replace(/e/gi,"enter");
    var textoencriptado = textoencriptado.replace(/i/gi,"imes");
    var textoencriptado = textoencriptado.replace(/a/gi,"ai");
    var textoencriptado = textoencriptado.replace(/o/gi,"ober");
    var textoencriptado = textoencriptado.replace(/u/gi,"ufat");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("msj1").style.display = "none";
    document.getElementById("msj2").style.display = "none";
    document.getElementById("textoencriptado").style.display = "flex";
    document.getElementById("botoncortar").style.display = "flex";
    document.getElementById("textoencriptado").innerHTML = textoencriptado;
    document.getElementById("textoencriptado").readOnly = true;
      
}

    
function desencriptar() {
    var texto = document.getElementById("textodesencriptado").value;

    var textoencriptado = texto.replace(/enter/gi,"e");
    var textoencriptado = textoencriptado.replace(/imes/gi,"i");
    var textoencriptado = textoencriptado.replace(/ai/gi,"a");
    var textoencriptado = textoencriptado.replace(/ober/gi,"o");
    var textoencriptado = textoencriptado.replace(/ufat/gi,"u");

    document.getElementById("munheco").style.display = "none";
    document.getElementById("msj1").style.display = "none";
    document.getElementById("msj2").style.display = "none";
    document.getElementById("textoencriptado").style.display = "flex";
    document.getElementById("botoncortar").style.display = "flex";
    document.getElementById("textoencriptado").innerHTML = textoencriptado;
    document.getElementById("textoencriptado").readOnly = true;
    
}

function cortar() {
    var textarea = document.getElementById("textoencriptado");
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand("copy");

    document.getElementById("munheco").style.display = "";
    document.getElementById("msj1").style.display = "";
    document.getElementById("msj2").style.display = "";
    document.getElementById("textoencriptado").style.display = "none";
    document.getElementById("botoncortar").style.display = "none";
}


