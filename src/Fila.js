class Fila{

    constructor(size = 10){
        this.maxSize = size;
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(dado){
        if(this.isFull()){
            // throw new Error("Fila cheia");
            return "Fila cheia";
        }else{
            return this.dados[this.fim++] = dado;
        }
    }
    
    dequeue(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia";
        }else{
            return this.dados[this.inicio++];
        }
    } 

    top(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia";
        }else{
            return this.dados[this.inicio];
        }
    }

    size(){
        return this.fim - this.inicio;
    }

    clear(){
        this.inicio = 0;
        this.fim = 0;
    }

    isFull(){
        return this.size() === this.maxSize;
    }

    isEmpty(){
        return this.inicio === this.fim;
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