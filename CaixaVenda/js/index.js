// VARIAVEIS


var alunos = [];
var idSeq = 1;
var position = null;

document.getElementById("btnAlterar").style.display = "none";
document.getElementById("btnCancelar").style.display = "none";

var form = document.getElementById('formulario');

// PUXANDO OS VALORES P TABELA

form.addEventListener('submit', function(e) {

    var aluno = {
        id:idSeq++,
        nome:document.getElementById('nomeAluno').value,
        idade:document.getElementById('idadeAluno').value,
        codigo:document.getElementById('cdProduto').value,
        datavenda:document.getElementById('dataVenda').value,
        matricula:document.getElementById('matriculaAluno').value,
    };

    alunos.push(aluno);

    listarTodos(alunos);

    clearValuesForm();

    e.preventDefault();

});

// LISTAR NA TABELA

function listarTodos(rows) {

    var html = "<table border= '1 | 1'>";

    html+= "<th>" + "ID" + "</th>";
    html+= "<th>" + "NOME" + "</th>";
    html+= "<th>" + "TIPO DA VENDA" + "</th>";
    html+= "<th>" + "CÓDIGO PRODUTO" + "</th>";
    html+= "<th>" + "DATA DA VENDA" + "</th>";
    html+= "<th>" + "VALOR DA VENDA" + "</th>";

    for (var i = 0; i < rows.length; i++) {
        
        html+="<tr>";
        html+="<td>"+rows[i].id+"</td>";
        html+="<td>"+rows[i].nome+"</td>";
        html+="<td>"+rows[i].idade+"</td>";
        html+="<td>"+rows[i].codigo+"</td>";
        html+="<td>"+rows[i].datavenda+"</td>";
        html+="<td>"+rows[i].matricula+"</td>";
        html+="<td><button class='botaoJS' onClick=alterar("+ i +")>"+"<img src='https://thumb.ibb.co/hKZ1nH/editar.png' title='Editar'"+"</button></td>";
        html+="<td><button class='botaoJS' onClick=remover("+ i +")>"+"<img src='https://thumb.ibb.co/jAuO1c/remover.png' title='Remover'"+"</button></td>";
        
        html+= "</tr>";
    }    

    html+="</table>";

    document.getElementById("boxTable").innerHTML = html;
}

function clearValuesForm() {

    document.getElementById('nomeAluno').value = "";
    document.getElementById('idadeAluno').value = "";
    document.getElementById('cdProduto').value = "";
    document.getElementById('dataVenda').value = "";
    document.getElementById('matriculaAluno').value = "";

}

// REMOVER DA TABELA

function remover(posicao) {

    alunos.splice(posicao, 1);

    listarTodos(alunos);
}

// ALTERAR NA TABELA
function alterar(posicao) {

    document.getElementById('nomeAluno').value = alunos[posicao].nome;
    document.getElementById('idadeAluno').value = alunos[posicao].idade;
    document.getElementById('cdProduto').value = alunos[posicao].codigo;
     document.getElementById('dataVenda').value = alunos[posicao].datavenda;
    document.getElementById('matriculaAluno').value = alunos[posicao].matricula;

    document.getElementById("btnAlterar").style.display = "block";
    document.getElementById("btnCancelar").style.display = "block";
    document.getElementById("btnEnviar").style.display = "none";

    position = posicao;

}

// ATUALIZAR NA TABELA

function atualizar() {

    if(position != null) {
        alunos[position].nome = document.getElementById('nomeAluno').value;
        alunos[position].idade = document.getElementById('idadeAluno').value;
        alunos[position].codigo = document.getElementById('cdProduto').value;
        alunos[position].datavenda = document.getElementById('dataVenda').value;
        alunos[position].matricula = document.getElementById('matriculaAluno').value;

        cancelar();

        listarTodos(alunos);
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