import ListaSimplesmenteLigada from "../ListaSimplesmenteLigada";

export default class Q2{
    constructor(){
        this.lista = new ListaSimplesmenteLigada;
    }

    enqueue(dado){
        this.lista.append(dado);
    }

    dequeue() {
        if (this.isEmpty()){
            return "Fila vazia"
        } else {
            this.lista.removeFrist();
        }
    }

    front(){
        if (this.isEmpty()){
            return "Fila vazia"
        } else {
            return this.lista.frist();
        }
    }

    clear(){
        this.lista.clear();
    }

    size(){
        return this.lista.length();
    }

    isEmpty(){
        return this.lista.isEmpty();
    }

    toString(){
        return this.lista.toString();
    }

}