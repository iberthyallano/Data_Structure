class Pilha{

    constructor(size = 10){
        this.maxSize = size;
        this.dados = [];
        this.topo = -1;
    }

    push(dado){
        if(this.isFull()){
            // throw new Error("Stack overflow");
            return "Stack overflow";
        }else{
            return this.dados[++this.topo] = dado;
        }
    }

    pop(){
        if(this.isEmpty()){
            // throw new Error("Stack underflow");
            return "Stack underflow";
        }else{
            return this.dados[this.topo--];
        }
    }

    top(){
        if(this.isEmpty()){
            //throw new Error("Pilha vazia");
            return "Pilha vazia";
        }else{
            return this.dados[this.topo];
        }
    }
    
    size(){
        return this.topo + 1;
    }

    clear(){
        this.topo = -1;
    }

    isFull(){
        return this.size() === this.maxSize;
    }

    isEmpty(){
        return this.size() === 0;
    }

    toString(){
        if(this.isEmpty()){
            // throw new Error("Stack underflow");
            return "Stack underflow";
        }else{
            let result = "";
            for (let i = 0; i <= this.topo; i++) {
                result += "[";
                result += `${this.dados[i]}`;
                if(i === this.topo){
                    result += "]";
                }else{
                    result += "] ";
                }
            }
            return result;
        }
    }

}
export default Pilha;