function calcularDesconto() {
    let campos = document.querySelectorAll("input");

    for (let i = 0; i < campos.length; i++) {
        //if (!campos[i].value)
        //return alert('Preencha todos os campos')
    }

    let price = parseInt(document.querySelector('#price').value);
    let ipi = parseInt(document.querySelector('#ipi').value) / 100;
    let icms = parseInt(document.querySelector('#icms').value) / 100;
    let confins = parseInt(document.querySelector('#confins').value) / 100;
    let pis = document.querySelector('#pis').value / 100;
    let lucro1 = parseInt(document.querySelector('#lucro1').value) / 100;
    let embaI = parseInt(document.querySelector('#embaI').value);

    let embaE = parseInt(document.querySelector('#embaE').value);
    let frete = parseInt(document.querySelector('#frete').value);
    let lucro2 = parseInt(document.querySelector('#lucro2').value);
    let taxa = parseInt(document.querySelector('#taxa').value);

    let ipiTax = Math.round((price * ipi) / (1 + ipi));
    let newPrice = price - ipiTax;
    let deducoesTotais = (newPrice * (icms + confins + pis + lucro1)) + embaI + ipiTax;
    let finalPrice = newPrice - (newPrice * (icms + confins + pis + lucro1)) - embaI;

    document.querySelector('.extra.a').innerHTML = '<span>Abatimentos</span><br>';
    document.querySelector('.extra.b').innerHTML = '<span>Acréscimos</span><br>';
    document.querySelector('.extra.c').innerHTML = '<span>Total</span><br>';

    document.querySelector('.extra.a').innerHTML += `<p>IPI: ${ipiTax.toFixed(2)}</p>`;
    document.querySelector('.extra.a').innerHTML += `<p>ICMS: ${(newPrice * icms).toFixed(2)}</p>`;
    document.querySelector('.extra.a').innerHTML += `<p>CONFINS: ${(newPrice * confins).toFixed(2)}</p>`;
    document.querySelector('.extra.a').innerHTML += `<p>PIS: ${(newPrice * pis).toFixed(2)}</p>`;
    document.querySelector('.extra.a').innerHTML += `<p>Lucro: ${(newPrice * lucro1).toFixed(2)}</p>`;
    document.querySelector('.extra.a').innerHTML += `<p>Embalagem: ${embaI.toFixed(2)}</p>`;
    document.querySelector('.extra.a').innerHTML += `<p>Total: ${deducoesTotais.toFixed(2)}</p>`;
    document.querySelector('.extra.c').innerHTML += `<p>1º Subtotal: R$${finalPrice.toFixed(2)}</p>`;

    finalPrice += embaE + frete;
    document.querySelector('.extra.c').innerHTML += `<p>2º Subtotal: R$${finalPrice.toFixed(2)}</p>`;

    let calculoLucro = (lucro2 * finalPrice)/(100-lucro2);
    finalPrice += calculoLucro;

    let dollarFinalPrice = finalPrice/taxa;

    document.querySelector('.extra.b').innerHTML += `<p>Embalagem para Exportação: ${embaE.toFixed(2)}</p>`;
    document.querySelector('.extra.b').innerHTML += `<p>Frete e seguro: ${frete.toFixed(2)}</p>`;
    document.querySelector('.extra.b').innerHTML += `<p>Lucro: ${calculoLucro.toFixed(2)}</p>`;

    document.querySelector('.extra.c').innerHTML += `<p>Preço de exportação: R$${finalPrice.toFixed(2)}</p>`;
    document.querySelector('.extra.c').innerHTML += `<p>Preço de exportação (dólar): $${dollarFinalPrice.toFixed(2)}</p>`;
    //alert(finalPrice)
    //alert(finalPrice/taxa)
}

function reset() {
    window.location.reload();
}

