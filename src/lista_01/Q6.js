import Pilha from "../Pilha";

class Q6{

    constructor(){
        this.aux = null;
        this.pilha = new Pilha;
    }

    texto(result){
        // result ? "sequencia bem formada" : "sequencia mal formada";
        if(result === true){
            return "Sequencia bem formada";
        }else{
            // throw new Error("Sequencia mal formada");
            return "Sequencia mal formada";
        }
    }

    analiseSequencia(sequencia){
        this.pilha.clear();
        if(sequencia === ""){
            // throw new Error("Não há sequencia");
            return "Não há sequencia";
        }else{
            for (let i = 0; i < sequencia.length; i++) {
                if (sequencia[i] === '[' || sequencia[i] === '(' || sequencia[i] === '{') {
                    this.pilha.push(sequencia[i]);
                } else if (sequencia[i] === ']' || sequencia[i] === ')' || sequencia[i] === '}') {
         
                    this.aux = this.pilha.top();

                    if ((this.aux === '(' && sequencia[i] !== ')') || 
                        (this.aux === '[' && sequencia[i] !== ']') || 
                        (this.aux === '{' && sequencia[i] !== '}'))
                    {
                        return this.texto(this.pilha.isEmpty());
                    }else{
                        this.pilha.pop();
                    }
                    
                }
            }
            return this.texto(this.pilha.isEmpty());
        }
    }
}

export default Q6;