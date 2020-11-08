import ListaSimplesmenteLigadaCircular from "../ListaSimplesmenteLigadaCircular";
export default class Q2{
    constructor() {
        this.lista_circular = new ListaSimplesmenteLigadaCircular;
    }

    enqueue(dado) {
        this.lista_circular.append(dado);
    }

    dequeue(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia"
        }
        return this.lista_circular.removeFrist();
    }

    front(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia"
        }
        return this.lista_circular.frist();
    }

    clear(){
       this.lista_circular.clear();
    }

    size(){
        return this.lista_circular.length();
    }

    isEmpty(){
        return this.lista_circular.isEmpty();
    }

    toString(){
        return this.lista_circular.toString();
    }

}