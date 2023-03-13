var notaMate = document.getElementById('nota1').value;
console.log(notaMate);
var notaLengua = document.getElementById('nota2').value;
var notaEFSI = document.getElementById('nota3').value;
function CalcularPromedio(nota1, nota2, nota3){
    var pro = (nota1 + nota2 + nota3)/3;
    console.log(pro);
    return pro;
}
