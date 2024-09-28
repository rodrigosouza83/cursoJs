// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe a mensagem de acordo com o tipo do herói
    atacar() {
        let ataque;
        
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque desconhecido';
                break;
        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Adicionando um log para verificar o início do programa
console.log("Programa Iniciado!");

// Criando instâncias da classe Heroi
const mago = new Heroi('Merlin', 150, 'Mago');
const guerreiro = new Heroi('Arthur', 35, 'Guerreiro');
const monge = new Heroi('Shaolin', 40, 'Monge');
const ninja = new Heroi('Naruto', 20, 'Ninja');

// Chamando o método atacar para cada herói
mago.atacar();      // O Mago atacou usando magia
guerreiro.atacar(); // O Guerreiro atacou usando espada
monge.atacar();     // O Monge atacou usando artes marciais
ninja.atacar();     // O Ninja atacou usando shuriken
