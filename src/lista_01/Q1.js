class Fracao{

    constructor(a, b){
        if(b === 0){
            // throw new Error("Denominador igual a 0, divisão impossível!");
            return "Denominador igual a 0, divisão impossível!";
        }else{
            this.numerador = a;
            this.denominador = b;
        }
    }

    multiplicacao(fracao){
        let result = new Fracao(this.numerador * fracao.numerador, this.denominador * fracao.denominador);
        return result;
    }

    divisao(fracao){
        let result = new Fracao(this.numerador * fracao.denominador , this.denominador * fracao.numerador);
        return result;
    }

    toString(){
        let result = "";
        result += this.numerador;
        result += "/";
        result += this.denominador;
        return result;
    }
}
export default Fracao;