import Fila from "../Fila";

export default class Q3{

    constructor(){
        this.fila = new Fila(10);
    }

    aguardo(){
        return this.fila.isEmpty();
    }

    carregamentoAtingido(){
        return this.fila.isFull();
    }

    chegada(dado){
        this.fila.enqueue(dado);
    }
    saida(){
        this.fila.dequeue();
    }

    listagem(){
        return this.fila.toString();
    }
}