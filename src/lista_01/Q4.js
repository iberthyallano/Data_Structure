import Pilha from "../Pilha";

class Q4{
    constructor(){
        this.aux = new Pilha;
        this.result = new Pilha;
    }

    inverteTopoBase(pilha){
        for(let i = 0; i <= pilha.size(); i++){
            if(i === 0){
                this.result.push(pilha.pop());
            }else{
                this.aux.push(pilha.pop());
            }
        }
        for(let j = 0; j <= this.aux.size(); j++){
            if(j === this.aux.size()){
                this.result.push(this.aux.pop());
                this.result.push(pilha.pop());
            }else{
                this.result.push(this.aux.pop());
            }
        }
        return this.result.toString();
    }
}

export default Q4;