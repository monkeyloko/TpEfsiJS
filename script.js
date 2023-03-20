let notamate;
let notalengua;
let notaefsi

function mostrarNota(res) {
    var contenido = document.createElement("h1");
    var texto = document.createTextNode("Materia con la nota mayor: " + res);
    contenido.appendChild(texto)
    document.getElementById("respuestas").appendChild(contenido)

}


function enviarForm(evento) {
    evento.preventDefault();
    if (validarForm()) {
        notamate = parseInt(document.getElementById("nota1").value);
        notalengua = parseInt(document.getElementById("nota2").value);
        notaefsi = parseInt(document.getElementById("nota3").value);

        console.log(notamate)
        console.log(notalengua)
        console.log(notaefsi)
    }
}
document.getElementById("myForm").addEventListener("submit", enviarForm);

function CalcularPromedio() {
    var pro = (notamate + notalengua + notaefsi) / 3;
    console.log(pro);
}

function validarForm() {
    var validado = true;
    if (document.getElementById("nota1").value != "" && document.getElementById("nota2").value != "" && document.getElementById("nota3").value != "") {


        if (document.getElementById("nota1").value > 10 || document.getElementById("nota1").value < 1) {
            validado = false;
            document.getElementById("nota1").style.borderColor = "red"
        } else {
            document.getElementById("nota1").style.borderColor = "green"
        }

        if (document.getElementById("nota2").value > 10 || document.getElementById("nota2").value < 1) {
            validado = false;
            document.getElementById("nota2").style.borderColor = "red"
        } else {
            document.getElementById("nota2").style.borderColor = "green"
        }

        if (document.getElementById("nota3").value > 10 || document.getElementById("nota3").value < 1) {
            validado = false;
            document.getElementById("nota3").style.borderColor = "red"
        } else {
            document.getElementById("nota3").style.borderColor = "green"
        }

    } else {
        alert("Falta rellenar los inputs");
        validado = false;
    }
    return validado;

}

function NotaMasAlta() {
    var res;
    if (notamate >= notalengua && notamate >= notaefsi) {
        res = "Matematicas";
    } else if (notalengua >= notamate && notalengua >= notaefsi) {
        res = "Lengua"
    } else {
        res = "Efsi";
    }
    mostrarNota(res)
}