import Pilha from "../Pilha";

export default class Q2{

    constructor(size = 10){
        this.pilha1 = new Pilha(size);
        this.pilha2 = new Pilha(size);
    }

    enqueue(dado){
        if (this.isFull()) {
            // throw new Error("Fila cheia");
            return "Fila cheia";
		} else {
			for(let i = this.size(); i > 0; i--){
				this.pilha2.push(this.pilha1.pop());
			}
			this.pilha1.push(dado);
			for(let j = this.pilha2.size(); j > 0; j--){
				this.pilha1.push(this.pilha2.pop());
			}
		}
    }

    dequeue(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia";
        }else{
            return this.pilha1.pop();
        }
    }

    front(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia";
        }else{
            return this.pilha1.top();
        }
       
    }

    clear(){
        this.pilha1.clear();
    }

    size(){
        return this.pilha1.size();
    }

    isEmpty(){
        return this.pilha1.isEmpty();
    }

    isFull(){
        return this.pilha1.isFull();
    }

    toString(){
        return this.pilha1.toString();
    }

}