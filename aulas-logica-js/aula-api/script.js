function buscarCEP(){ /*25025010=adecen*/
    const cep = document.getElementById("cep").value

    fetch (`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(dados => {
            document.getElementById("rua").value = dados.logradouro
            document.getElementById("bairro").value = dados.bairro
            document.getElementById("cidade").value = dados.localidade
            document.getElementById("estado").value = dados.estado
        })
}