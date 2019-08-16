function sumatoria() {
    var i = document.getElementById('txtRangoInferior').value;
    var j = document.getElementById('txtRangoSuperior').value;
    var res = 0;
    for (x = i; x <= j; x++) {
        res = parseInt(res) + parseInt(x);
    }
    alert(res);
}