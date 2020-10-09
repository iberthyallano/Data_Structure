import ListaSimplesmenteLigada from "../ListaSimplesmenteLigada";

export default class Q6{
    constructor(palavra){
        this.lista = new ListaSimplesmenteLigada;
        for(let i = 0; i < palavra.length; i++){
            this.lista.append(palavra[i]);
        }
    }

    subString(inico, fim){
        let aux = this.lista.head.proximo;
        let i = 0;
        let result = "";
        while(aux.proximo != null){
            if(i >= inico-1 && i <= fim-1){
                result += aux.dado;
            }
            i++;
            aux = aux.proximo;
        }
        return result;
    }
}