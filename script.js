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
    validarForm();
    notamate = parseInt(document.getElementById("nota1").value);
    notalengua = parseInt(document.getElementById("nota2").value);
    notaefsi = parseInt(document.getElementById("nota3").value);

    //}
    //else{       }
}
document.getElementById("myForm").addEventListener("submit", enviarForm);

function CalcularPromedio() {
    var pro = (notamate + notalengua + notaefsi) / 3;
    console.log(pro);
}

function validarForm() {
    if (document.getElementById("nota1").value != "" || document.getElementById("nota2").value != "" || document.getElementById("nota3").value != "") {


        if (document.getElementById("nota1").value > 10 || document.getElementById("nota1").value < 0) {

            document.getElementById("nota1").style.borderColor = "red"
        } else {
            document.getElementById("nota1").style.borderColor = "green"
        }

        if (document.getElementById("nota2").value > 10 || document.getElementById("nota2").value < 0) {

            document.getElementById("nota2").style.borderColor = "red"
        } else {
            document.getElementById("nota2").style.borderColor = "green"
        }

        if (document.getElementById("nota3").value > 10 || document.getElementById("nota3").value < 0) {

            document.getElementById("nota3").style.borderColor = "red"
        } else {
            document.getElementById("nota3").style.borderColor = "green"
        }
    } else

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
    mostrarNota(res);
}