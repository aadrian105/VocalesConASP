function SepararTexto() {
    var texto = document.getElementById('campoTexto').value, vocal = "", conso = "";

    for (var i = 0; i < texto.length; i++)
        if ("aeiou".indexOf(texto[i].toLowerCase()) == -1) {
            conso += texto[i];
            vocal += " ";
        }
        else {
            vocal += texto[i];
            conso += " ";
        }
        
    

    document.getElementById('vocalesInput').value = vocal;
    document.getElementById('consonaInput').value = conso;
}
