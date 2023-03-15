let notamate;
let notalengua;
let notaefsi
function enviarForm(evento) {
    evento.preventDefault();
    
    notamate = parseInt(document.getElementById("nota1").value);
    notalengua = parseInt(document.getElementById("nota2").value);
    notaefsi = parseInt(document.getElementById("nota3").value);
}
document.getElementById("myForm").addEventListener("submit", enviarForm);
function CalcularPromedio() {
    var pro = (notamate + notalengua + notaefsi) / 3;
    console.log(pro);
}
function NotaMasAlta(){
    if (notamate >= notalengua && notamate >= notaefsi) {
        return console.log("notamate");
    } 
    else if (notalengua >= notamate && notalengua >= notaefsi) {
        return console.log("notalengua");
    } 
    else {
        console.log("notaefsi");
    }
}
