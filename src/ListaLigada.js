class Node{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

class ListaLigada{

    constructor(){
        this.head = new Node();
    }

    add(dado){
        let novo_no = new Node(dado);

        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;

        // if(this.isEmpty()){
        //     this.head.proximo = novo_no;
        // }else{
        //     novo_no.proximo = this.head.proximo;
        //     this.head.proximo = novo_no;
        // }
    }

    append(dado){

        if(this.isEmpty()){
            this.add(dado);
            // this.head.proximo = novo_no;
        }else{
            let novo_no = new Node(dado);
            let aux = this.head.proximo;
            
            while(aux.proximo != null){
                aux = aux.proximo;
            }

            aux.proximo = novo_no;
        }

    }

    addAt(dado, posicao){

    }

    removeFrist(){

    }

    last(){

    }

    removeLast(){

    }

    removeAt(dado, posica){

    }

    length(){

    }

    isEmpty(){
        return this.head.proximo === null;
    }

    search(dado){

    }

    clear(){
        this.head.proximo = null;
    }

    addInOrder(dado){

    }

    toString(){
        let aux = this.head.proximo;
        let result = "";

        while(aux != null){
            result += aux.dado + (aux.proximo ? "->" : "");
            aux = aux.proximo;
        }

        return result;
    }

}
export default ListaLigada;