import ListaSimplesmenteLigada from "../ListaSimplesmenteLigada";

export default function Q4(lista){
    let result = new ListaSimplesmenteLigada;
    let i = lista.length();
    let min = 0;
    let max = lista.length();
    while(i != 0){
        let posicao =  Math.floor(Math.random() * (max - min + 1)) + min;
        result.addAt(lista.removeLast(), posicao);
        i--;
    }
    return result;
}
