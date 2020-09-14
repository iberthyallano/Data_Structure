import Pilha from "../Pilha";

class Q5{

    constructor(){
        this.pilha = new Pilha;
    }

    conversor(decimal){
        this.pilha.clear();
        let result = "";
        for (this.pilha; decimal > 0; decimal = Math.floor(decimal / 2)){
            this.pilha.push(decimal % 2);
        }
        while (this.pilha.size() > 0){
            result += `${this.pilha.pop()}`;
        }
        return result;
    }

}

export default Q5;