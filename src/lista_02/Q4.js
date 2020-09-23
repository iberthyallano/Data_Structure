import Fila from "../Fila";
export default function Q4 (F1, F2){
    let result = new Fila;
    let sair = true;
    while(sair){
        if(F1.isEmpty() && F2.isEmpty()){
            sair = false;
        }else if(F1.isEmpty() === false && F2.isEmpty() === true){
            result.enqueue(F1.dequeue());

        }else if(F2.isEmpty() === false && F1.isEmpty() === true){
            result.enqueue(F2.dequeue());
        }else{
            result.enqueue(F1.dequeue());
            result.enqueue(F2.dequeue());
        }
    }
    return result.toString();
}