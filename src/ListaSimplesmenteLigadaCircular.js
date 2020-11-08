class Node{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

class ListaSimplesmenteLigadaCircular{

    constructor(){
        this.fim = null;
    }

    add(dado){
        if(this.isEmpty()){
            this.fim = new Node(dado);
            this.fim.proximo = this.fim;
        }else{
            let novo_no = new Node(dado);
            novo_no.proximo = this.fim.proximo;
            this.fim.proximo = novo_no;
        }
    }

    append(dado){
        if(this.isEmpty()){
            this.add(dado);
        }else{
            let novo_no = new Node(dado);
            novo_no.proximo = this.fim.proximo;
            this.fim.proximo = novo_no;
            this.fim = novo_no;
        }
    }

    // addAt(dado, posicao){
    //     if(posicao <= 0){
    //         this.add(dado);
    //     }else if(posicao >= this.length()){
    //         this.append(dado);
    //     }
    // }

    last(){
        if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
		}else{
            return this.fim.dado;
        }
    }

    frist(){
       if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
		}else{
            return this.fim.proximo.dado;
        }
    }

    removeFrist(){
		if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
        }else if(this.length() == 1){
            let result = this.fim;
            this.clear();
            return result.dado;
        }else{
            let result = this.fim.proximo;
            this.fim.proximo = result.proximo;
            return result.dado;
        }
    }

    removeLast(){
        if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
        }else if(this.length() == 1){
            let result = this.fim;
            this.clear();
            return result.dado;
        }else{
            let result = this.fim.dado;
            let aux = this.fim.proximo;
            while(aux.proximo != this.fim){
                aux = aux.proximo
            }
            aux.proximo = this.fim.proximo;
            this.fim = aux;
            return result;
        }   
    } 

    // removeAt(posicao){
    //     if(posicao <= 0){
    //         this.removeFrist(dado);
    //     }else if(this.removeLast >= this.length()){
    //         this.append(dado);
    //     }
    // }

    length(){
        let cont = 0;
        if(!this.isEmpty()){
            cont++;
            let aux = this.fim.proximo;
            while(aux != this.fim){
                cont++;
                aux = aux.proximo;
            }
        }
        return cont;
    }

    isEmpty(){
        return this.fim === null;
    }

    search(dado){
        let i = this.length();
        if(i != 0){
            let aux = this.fim.proximo;
            while(i >= 0){
                if(aux.dado == dado){
                    return true;
                }
                aux = aux.proximo;
                i--
            }
        }
        return false;
    }

    clear(){
        this.fim = null;
    }

    toString(){
        if(this.isEmpty()){
            // throw new Error("Lista vazia");
			return "Lista vazia";
        }else{
            let result = "";
            let aux = this.fim.proximo;
            while(aux != this.fim){
                result += aux.dado + "-";
                aux = aux.proximo;
            }
            result += this.fim.dado;
            return result;
        }
    }

}
export default ListaSimplesmenteLigadaCircular;