function compararData(){
    moment.locale('pt-BR');
    var date = moment().subtract(28, 'days').format('L');
    var tbody = document.getElementById("turmas");
    Array.from(tbody.rows).forEach(function(row){
        if(compare(date, row.cells[2].innerHTML)){
            row.cells[3].setAttribute("class", "success");
            row.cells[3].innerHTML = "Sim";
        }
        else{
            row.cells[3].setAttribute("class", "danger");
            row.cells[3].innerHTML = "Não";
        }
    });

}
function compare(date1, date2){
    var lista1 = date1.split("/");
    var lista2 = date2.split("/");
    for(i = 2; i >= 0 ; i--){
        if(lista1[i] > lista2[i]) {
            return false;
        }
        if(lista1[i] < lista2[i]) {
            return true;
        }
    }
    return true;
}
