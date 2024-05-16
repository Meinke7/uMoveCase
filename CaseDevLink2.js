// Título 


var elemento = document.evaluate('/html/body/div[1]/div[2]/div[1]/h4[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (elemento) {
    
    var title = elemento.textContent.trim();

    console.log("Título:", title);
} else {
    console.log("Elemento não encontrado.");
}


// Valor de avaliação

var valuation = document.evaluate('/html/body/div[1]/div[2]/div[3]/div[3]/h6[3]/text()', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (valuation) {
    
    var valuationValue = valuation.textContent.trim();

    console.log("Valor Avaliação:", valuationValue);
} else {
    console.log("Não encontrado");
}


// Data primeira praça


var primeiraPraca = document.evaluate('/html/body/div[1]/div[2]/div[3]/div[3]/h6[5]/text()[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (primeiraPraca) {
    
    var data = primeiraPraca.textContent.trim();

    
    console.log("Data 1º praça:", data);
} else {
    console.log("Não encontrado.");
}


// Valor segunda praça


var segundaPraca = document.evaluate('/html/body/div[1]/div[2]/div[3]/div[3]/h6[8]/text()[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (segundaPraca) {
    
    var valorSegundaPraca = segundaPraca.textContent.trim();

    
    console.log("Valor 2º praça:", valorSegundaPraca);
} else {
    console.log("Não encontrado dentro do oitavo elemento.");
}


// Endereço


var endereco = document.evaluate('/html/body/div[1]/div[2]/div[4]/div/div[2]/div[2]/text()', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (endereco) {
   
    var address = endereco.textContent.trim();

   
    console.log("Endereço:", address);
} else {
    console.log("Não encontrado");
}



// STATUS

var elemento = document.evaluate('/html/body/div[1]/div[2]/div[3]/div[1]/div[1]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (elemento) {
    
    var statusPraca = elemento.textContent.trim();

    
    console.log("Status:", statusPraca);
} else {
    console.log("Status não encontrado.");
}


// LINK DOCUMENTO  


var elemento = document.evaluate('/html/body/div[1]/div[2]/div[3]/div[7]/p[2]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (elemento) {
    
    var link = elemento.getAttribute('href');

    
    console.log("Link documento:", link);
} else {
    console.log("Elemento não encontrado.");
}


// Link imagem (não encontrei imagem pelo html, então utilizei javascript para inspecionar o CSS)


var elemento = document.evaluate('/html/body/div[1]/div[2]/div[2]/div/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;


if (elemento) {
    
    var estilo = window.getComputedStyle(elemento);

   
    var backgroundImage = estilo.backgroundImage;

    // Extrair a URL 
    var urlInicio = 'url("';
    var urlFim = '")';
    var inicio = backgroundImage.indexOf(urlInicio);
    var fim = backgroundImage.lastIndexOf(urlFim);
    var linkImagem = backgroundImage.substring(inicio + urlInicio.length, fim);

   
    console.log("Link da imagem:", linkImagem);
} else {
    console.log("Elemento não encontrado.");
}
