import Fila from "../Fila";

export default class Q1{

    constructor(size = 10){
        this.fila1 = new Fila(size);
        this.fila2 = new Fila(size);
    }

    push(dado) {
		if (this.isFull()) {
            // throw new Error("Stack overflow");
            return "Stack overflow";
		} else {
			for(let i = this.size(); i > 0; i--){
				this.fila2.enqueue(this.fila1.dequeue());
			}
			this.fila1.enqueue(dado);
			for(let j = this.fila2.size(); j > 0; j--){
				this.fila1.enqueue(this.fila2.dequeue());
			}
		}
	}

	pop() {
        if(this.isEmpty()){
            // throw new Error("Stack underflow");
            return "Stack underflow";
        }else{
            return this.fila1.dequeue();
        }
	}

	top() {
		return this.fila1.front();
    }

	isEmpty() {
		return this.fila1.isEmpty();
	}

	isFull() {
		return this.fila1.isFull();
	}

	size() {
        return this.fila1.size();
	}

	clear(){
        this.fila1.clear();
    }

	toString() {
		return this.fila1.toString();
	}
}
