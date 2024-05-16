// título

var title = document.evaluate('/html/body/main/div/div/div[1]/div[1]/h3', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (title) {
    
    console.log("Título:", title.innerHTML);
    
} else {
    console.log("Título não encontrado.");
}

// avaliação


var valuation = document.evaluate('//div//dd[@class="d-inline-block mb-0" and @id="incremento"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);


if (valuation.snapshotLength >= 2) {
    
    var valuation = valuation.snapshotItem(1);

    
    console.log("Valor de Avaliação:", valuation.innerHTML);
    
} else {
    console.log("Avaliação não encontrada.");
}


// Data Primeira praça


var date = document.evaluate('/html/body/main/div/div/div[2]/div[2]/div[3]/div/table/tbody/tr[1]/td[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (date) {

    console.log("Data Primeira Praça:", date.innerHTML);
    
} else {
    console.log("Data não encontrada.");
}


// Valor Segunda praça


var priceSecond = document.evaluate('/html/body/main/div/div/div[2]/div[2]/div[3]/div/table/tbody/tr[2]/td[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (priceSecond) {
    
    console.log("Valor da Segunda Praça:", priceSecond.innerHTML);
   
} else {
    console.log("Valor da segunda praça não encontrado.");
}

// ENDEREÇO


var paragrafoEndereco = document.evaluate('/html/body/main/div/div/div[2]/div[1]/div[2]/div[1]/article/div/p[4]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (paragrafoEndereco) 
    
    var nosDeTexto = paragrafoEndereco.childNodes;

    
    var ultimoTextoEndereco = null;
    for (var i = nosDeTexto.length - 1; i >= 0; i--) {
        if (nosDeTexto[i].nodeType === Node.TEXT_NODE && nosDeTexto[i].textContent.trim() !== "") {
            ultimoTextoEndereco = nosDeTexto[i].textContent.trim();
            break;
        }
    }

    if (ultimoTextoEndereco) {
        console.log("Endereço da casa leiloada:", ultimoTextoEndereco);
    } else {
        console.log("Nenhum endereço encontrado.");
    }




// STATUS


var statusPraca = document.evaluate('/html/body/main/div/div/div[1]/div[2]/div/div[2]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (statusPraca) {
   
    console.log("Status:", statusPraca.innerHTML);
    
} else {
    console.log("status não encontrado.");
}


// LINK DOCUMENTO


var baseUrl = "https://www.123leiloes.com.br/";


var elemento = document.evaluate('/html/body/main/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div/div[2]/nav/a[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (elemento) {
    
    var link = elemento.getAttribute('href');

    
    var urlCompleta = baseUrl + link;

    
    console.log("URL completa:", urlCompleta);
    
} else {
    console.log("Elemento não encontrado.");
}



// URL IMAGEM 




var elemento = document.evaluate('/html/body/main/div/div/div[2]/div[1]/div[1]/div/div/div/div/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (elemento) {
    
    var linkImagem = elemento.getAttribute('href');

    
    var urlImagemCompleta = linkImagem;

    
    console.log("URL da imagem:", urlImagemCompleta);
} else {
    console.log("Elemento não encontrado.");
}
