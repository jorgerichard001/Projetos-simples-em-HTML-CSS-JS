// trecho do codigo para receber a ativação dos botoes que estão no html
document.getElementById("converter").onclick = calcularMedidas;
document.getElementById("cleanForm").onclick = limpaForm;


// função para limpar os input contidos na pagina
function limpaForm() {

        document.getElementById("pxMedida").value = '';
        document.getElementById("remMedida").value = '';
        console.log("deu certo")
}

// essa função é para fazer a conversão
function calcularMedidas(){
    var pxMedida = document.getElementById("pxMedida").value;
    var remMedida = document.getElementById("remMedida").value;
    // esse if é para verificar se tem dados dentro dos input e com isso 
    // verificar qual conversão fazer se é de PX para REM ou o contrario
    if(isNaN(pxMedida) || isNaN(remMedida)){
        alert("Digite um valor válido");
        return
    }else if(pxMedida === ''){
        pxMedida = (parseFloat(remMedida)*16)
    }else if(remMedida === ''){
        remMedida = (parseFloat(pxMedida)*0.06)
    }
    //aqui é para retornar os dados para a pagina principal
    document.getElementById("pxMedida").value = parseFloat(pxMedida);
    document.getElementById("remMedida").value = parseFloat(remMedida);
    
}