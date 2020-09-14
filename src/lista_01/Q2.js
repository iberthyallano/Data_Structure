import Pilha from "../Pilha";

class Q2{
    constructor(){
        this.pilha = new Pilha;
    }

    inverter(palavra){
        this.pilha.clear();
        let piaux = new Pilha;
        for(let i = 0; i < palavra.length; i++){
            piaux.push(palavra[i]);
        }
        for(let j = 0; j < palavra.length; j++){
            this.pilha.push(piaux.pop());
        }
        return this.toString();
    }

    toString(){
        let result = "";
        for(let i = 0; i < this.pilha.size(); i++){
            result += this.pilha.dados[i]; 
        }
        return result;
    }
}
export default Q2;