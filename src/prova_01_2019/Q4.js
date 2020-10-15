
class Q4{

    constructor(tam = 10){
        this.tamanho = tam;
        this.dados = [];
        this.topoA = -1;
        this.topoB = tam; 
    }

    isEmptyA(){
        return this.topoA === -1;
    }

    isEmptyB(){
        return this.topoB === this.tamanho;
    }

    isFull(){
        if(this.topoA + 1 === this.topoB || this.topoB === this.topoA){
            return true;
        }else{
            return false;
        }
    }

    clear(){
        this.topoA = -1;
        this.topoB = this.tamanho;
    }

    pushA(dado){
        if(this.isFull()){
            // throw new Error("Stack overflow");
            return "Stack overflow";
        }else{
            this.dados[++this.topoA] = dado;
        }
    }

    pushB(dado){
        if(this.isFull()){
            // throw new Error("Stack overflow");
            return "Stack overflow";
        }else{
            this.dados[--this.topoB] = dado;
        }
    }

    popA(){
        if(this.isEmptyA()){
            // throw new Error("Stack underflow");
            return "Stack underflow";
        }else{
            return this.dados[this.topoA--];
        }
    }

    popB(){
        if(this.isEmptyA()){
            // throw new Error("Stack underflow");
            return "Stack underflow";
        }else{
            return this.dados[this.topoB++];
        }
    }

}

export default Q4;