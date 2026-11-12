
class Parquimetro {

    constructor() {
        this.tabela = [
            { valor: 1.00, tempo: 30 },
            { valor: 2.00, tempo: 60 },
            { valor: 3.00, tempo: 120 }
        ];
    }

    calcular(valorPago) {

        if (valorPago < 1) {
            return {
                mensagem: "Valor insuficiente!"
            };
        }

        let tempo = 0;
        let valorCobrado = 0;

        for (let faixa of this.tabela) {

            if (valorPago >= faixa.valor) {
                tempo = faixa.tempo;
                valorCobrado = faixa.valor;
            }
        }

        const troco = valorPago - valorCobrado;

        return {
            mensagem: "Pagamento realizado!",
            tempo: tempo,
            troco: troco
        };
    }
}

// Criando o objeto
const parquimetro = new Parquimetro();

// Capturando os elementos HTML
const formulario = document.getElementById("parkingForm");
const campoValor = document.getElementById("valor");
const resultado = document.getElementById("resultado");

// Evento do formulário
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const valor = Number(campoValor.value);

    const resposta = parquimetro.calcular(valor);

    if (resposta.tempo === undefined) {

        resultado.innerHTML = `
            <p>${resposta.mensagem}</p>
        `;

    } else {

        resultado.innerHTML = `
            <h2>${resposta.mensagem}</h2>
            <p>Tempo de permanência: ${resposta.tempo} minutos</p>
            <p>Troco: R$ ${resposta.troco.toFixed(2).replace(".", ",")}</p>
        `;
    }

});
