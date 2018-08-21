// VENDAAAAA


var vendas = [];
var idSeq = 1;
var position = null;

document.getElementById("btnAlterar").style.display = "none";
document.getElementById("btnCancelar").style.display = "none";

var form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {

    var venda = {
        id:idSeq++,
        cnpj:document.getElementById('cnpjFornecedor').value,
        tipocompra:document.getElementById('tipoCompra').value,
        codigocompra:document.getElementById('cdCompra').value,
        datacompra:document.getElementById('dataCompra').value,
        valorcompra:document.getElementById('valorCompra').value,
    };

    vendas.push(venda);

    listarTodos(vendas);

    clearValuesForm();

    e.preventDefault();

});

function listarTodos(rows) {

    var html = "<table border= '1 | 1'>";

    html+= "<th>" + "ID" + "</th>";
    html+= "<th>" + "CNPJ" + "</th>";
    html+= "<th>" + "TIPO DA COMPRA" + "</th>";
    html+= "<th>" + "CÓDIGO PRODUTO" + "</th>";
    html+= "<th>" + "DATA DA COMPRA" + "</th>";
    html+= "<th>" + "VALOR DA COMPRA" + "</th>";

    for (var i = 0; i < rows.length; i++) {
        
        html+="<tr>";
        html+="<td>"+rows[i].id+"</td>";
        html+="<td>"+rows[i].cnpj+"</td>";
        html+="<td>"+rows[i].tipocompra+"</td>";
        html+="<td>"+rows[i].codigocompra+"</td>";
        html+="<td>"+rows[i].datacompra+"</td>";
        html+="<td>"+rows[i].valorcompra+"</td>";
        html+="<td><button class='botaoJS' onClick=alterar("+ i +")>"+"<img src='https://thumb.ibb.co/hKZ1nH/editar.png' title='Editar'"+"</button></td>";
        html+="<td><button class='botaoJS' onClick=remover("+ i +")>"+"<img src='https://thumb.ibb.co/jAuO1c/remover.png' title='Remover'"+"</button></td>";
        
        html+= "</tr>";
    }    

    html+="</table>";

    document.getElementById("boxTable").innerHTML = html;
}

function clearValuesForm() {

    document.getElementById('cnpjFornecedor').value = "";
    document.getElementById('tipoCompra').value = "";
    document.getElementById('cdCompra').value = "";
    document.getElementById('dataCompra').value = "";
    document.getElementById('valorCompra').value = "";

}

function remover(posicao) {

    vendas.splice(posicao, 1);

    listarTodos(vendas);
}

function alterar(posicao) {

    document.getElementById('cnpjFornecedor').value = vendas[posicao].cnpj;
    document.getElementById('tipoCompra').value = vendas[posicao].tipocompra;
    document.getElementById('cdCompra').value = vendas[posicao].codigocompra;
    document.getElementById('dataCompra').value = vendas[posicao].datacompra;
    document.getElementById('valorCompra').value = vendas[posicao].valorcompra;

    document.getElementById("btnAlterar").style.display = "block";
    document.getElementById("btnCancelar").style.display = "block";
    document.getElementById("btnEnviar").style.display = "none";

    position = posicao;

}

function atualizar() {

    if(position != null) {
        vendas[position].cnpj = document.getElementById('cnpjFornecedor').value;
        vendas[position].tipocompra = document.getElementById('tipoCompra').value;
        vendas[position].codigocompra = document.getElementById('cdCompra').value;
        vendas[position].datacompra = document.getElementById('dataCompra').value;
        vendas[position].valorcompra = document.getElementById('valorCompra').value;

        cancelar();

        listarTodos(vendas);
    }
}

function cancelar() {
    
    clearValuesForm();

    document.getElementById("btnAlterar").style.display = "none";    
    document.getElementById("btnCancelar").style.display = "none";       
    document.getElementById("btnEnviar").style.display = "block";    
}

function adicionaClasse() {
    var adiciona= document.getElementById("navbar");

    if (adiciona.className === "menu")
    {
        adiciona.className+= "responsivo";
    } else {
        adiciona.className= "menu";
    }
}