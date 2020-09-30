import ListaSimplesmenteLigada from "../ListaSimplesmenteLigada";

export default class Q1{
    constructor(){
        this.lista = new ListaSimplesmenteLigada;
    }

    push(dado){
        this.lista.append(dado);
    }

    pop(){
        if(this.isEmpty()){
            // throw new Error("Stack underflow");
            return "Stack underflow";
        }else{
            this.lista.removeLast();
        }
    }

    top(){
        return this.lista.last();
    }
    
    size(){
        return this.lista.length();
    }

    clear(){
        this.lista.clear();
    }

    isEmpty(){
        return this.lista.isEmpty();
    }

    toString(){
        return this.lista.toString();
    }
}