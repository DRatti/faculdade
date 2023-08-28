export class Bicicleta{
    modelo: string
    dias_aluguel: number
    valor_diario: number
    data_aluguel: string
    divida_somada: number = 0

    constructor(modelo:string, valor_diario:number, dias_aluguel:number, data_aluguel:string){
        this.modelo = modelo
        this.valor_diario = valor_diario
        this.dias_aluguel = dias_aluguel
        this.data_aluguel = data_aluguel
    }

    encerrar_aluguel(){
        this.modelo = '0'
        this.dias_aluguel = 0
        this.data_aluguel = '0/0/0'
        this.valor_diario = 0
    }

}