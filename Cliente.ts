import { Bicicleta } from "./Bicicleta"

class Cliente{
    nome: string
    idade: number
    cpf: number
    divida: number = 0.0
    bicicleta_alugada: Bicicleta = new Bicicleta('0', 0, 0, '0/0/0')

    constructor(nome:string, idade: number, cpf:number){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    alugarBicicleta(modelo:string, valor_diario:number, dias_aluguel:number, data_aluguel:string){
        this.bicicleta_alugada.modelo = modelo;
        this.bicicleta_alugada.valor_diario = valor_diario
        this.bicicleta_alugada.dias_aluguel = dias_aluguel
        this.bicicleta_alugada.data_aluguel = data_aluguel
    }
    
    somarDivida(){
        if(this.bicicleta_alugada.divida_somada == 0){
            this.divida += this.bicicleta_alugada.valor_diario * this.bicicleta_alugada.dias_aluguel
        }
        this.bicicleta_alugada.divida_somada = 1
    }
}  