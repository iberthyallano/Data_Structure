import ListaSimplesmenteLigada from "../ListaSimplesmenteLigada";

export default function Q4(lista){
    let result = new ListaSimplesmenteLigada;
    while(lista.length() != 0){
       result.append(lista.removeLast());
    }
    return result;
}
