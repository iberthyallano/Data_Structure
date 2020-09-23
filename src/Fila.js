class Fila{

    constructor(size = 10) {
        this.dados = []; 
        this.fim = 0; 
        this.inicio = 0; 
        this.maxSize = size; 
    }

    enqueue(dado) {
        if (this.isFull()) {
           return "Fila cheia";
        } else {
            this.dados[this.fim++] = dado;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Fila vazia"
        } else {
            return this.dados[this.inicio++];
        }
    }

    front() {
        if (this.isEmpty()) {
            return "Fila vazia"
        } else {
            return this.dados[this.inicio];
        }
    }

    clear() {
        this.inicio = 0;
        this.fim = 0;
    }

    size() {
        return this.fim - this.inicio;
    }

    isEmpty() {
        return this.inicio === this.fim;
    }

    isFull() {
        return this.size() === this.maxSize
    }

    toString(){
        let result = "";
        for (let i = this.inicio; i < this.fim; i++) {
            result += "[";
            result += `${this.dados[i]}`;
            if(i === this.fim - 1){
                result += "]";
            }else{
                result += "] ";
            }
        }
        return result;
    }

}
export default Fila;