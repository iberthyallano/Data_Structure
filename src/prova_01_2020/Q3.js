export default class Q3{
    constructor(){
        this.maxSize = 4;
        this.dados = [];
        this.topo = -1;
    }

    size(){
        return this.topo + 1;
    }

    isFull(){
        return this.size() === this.maxSize;
    }

    search(dado){
        for (let i = 0; i <= this.topo; i++) {
            if(dado === this.dados[i]){
                return true;
            }
        }
        return false;
    }

    push(dado){
        if(this.isFull()){
            // throw new Error("Stack overflow");
            return "Stack overflow";

        }else if(!this.search(dado)){
            this.dados[++this.topo] = dado;

        }else{
            return "dado já existe";
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

    isEmpty(){
        return this.size() === 0;
    }

    print(){
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