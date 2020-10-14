export default class Q1_2_3{
    constructor(base, expoente){
        this.base = base;
        this.expoente = expoente;
    }

    resolvePotencia(){
        let result = (this.base ** this.expoente);
        return result;
    }

    multiplicaPotencia(potenciacao){
        if(this.base === potenciacao.base){
            let result = new Q1_2_3(this.base, (this.expoente + potenciacao.expoente));
            return result;
        }else{
            return "A questão só pediu potência de mesma base";
        }
    }

    dividePotencia(potenciacao){
        if(this.base === potenciacao.base){
            let result = new Q1_2_3(this.base, (this.expoente - potenciacao.expoente));
            return result;
        }else{
            return "A questão só pediu potência de mesma base";
        }
    }

    potenciaDePotencia(expoente2){
        let result = new Q1_2_3(this.base, (this.expoente * expoente2));
        return result;
    }
}