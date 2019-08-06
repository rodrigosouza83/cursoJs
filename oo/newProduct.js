const carro = new Object

carro.marca =  'Honda'
carro.modelo =  'Fit'
carro.versao = 'Automatico'
carro.motor = 1.5
carro.preco = 35000



const proprietario = {

    nome: 'Rodrigo Carlos de Souza',
    idade: 36,
    endereco:  'Rua: Noel Rosa, 882',
    cidade: 'Guarulhos',
    estado: 'SP',
    cep: '07120200',
    habilitacao: 383933,
    estado_civil: 'Casado',
    profissao: 'Analista de Testes de Software'
}

console.log(carro, proprietario)

console.log(proprietario.nome.toUpperCase())