class gato{
    constructor(nome, corPelo, responsavel){
        this.nome = nome;
        this.corPelo = corPelo;
        this.responsavel = responsavel
    }
    miar(){
        return "O gato está miando"
    }
}

//camelCase declaração de var 
//roxo = função, metod | azul = atrib
//Doc = Ctrl + Método, função ou atributo que deseja ver
//https://developer.mozilla.org/pt-BR/docs/Web/API/console/log_static
//const, let, var...

const gato1 = new gato("Zezinho", "azul", "Avatar")

console.log(gato1.nome)
console.log(gato1.responsavel)
console.log(gato1.corPelo)
console.log(gato1.miar())

class cachorro{
    constructor(nome, raca, responsavel){
        this.nome = nome;
        this.raca = raca;
        this.responsavel = responsavel;
    }
    latir(){
        return "O cachorro está latindo"
    }
}

const cachorro1 = new cachorro("Dogito", "caramelo", "Joaozinho")

console.log(cachorro1.nome)
console.log(cachorro1.responsavel)
console.log(cachorro1.raca)
console.log(cachorro1.latir())