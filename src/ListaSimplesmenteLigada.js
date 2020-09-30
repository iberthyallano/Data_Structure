class Node{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

class ListaSimplesmenteLigada{

    constructor(){
        this.head = new Node();
    }

    add(dado){
        let novo_no = new Node(dado);
        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
    }

    append(dado){
        if(this.isEmpty()){
            this.add(dado);
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
        if (posicao >= this.length()) {
			this.append(dado);
		} else if (posicao <= 0) {
			this.add(dado);
        } else {
            let novo_no = new Node(dado);
            let i = 0;
            let anterior = this.head;
            let atual = this.head.proximo;
            while (i != posicao) {
                anterior = atual;
                atual = atual.proximo;
                i++;
            }
            anterior.proximo = novo_no;
            novo_no.proximo = atual;
        }

    }

    last(){
        if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
		}else{
            let aux = this.head.proximo;
        
            while(aux.proximo != null){
                aux = aux.proximo;
            }

            return aux.dado;
        }
    }

    frist(){
       if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
		}else{
            return this.head.proximo.dado;
        }
    }

    removeFrist(){
		if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
		} else {
            let aux = this.head.proximo;
            this.head.proximo = aux.proximo;
		}
    }

    removeLast(){
        if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
		} else {
            let anterior = this.head;
            let atual = this.head.proximo;
            while (atual.proximo != null) {
                anterior = atual;
                atual = atual.proximo;
            }
            atual = null;
            anterior.proximo = null;
        }
    } 

    removeAt(posicao){
        if (this.isEmpty()) {
            // throw new Error("Lista vazia");
			return "Lista vazia";
        } else if (posicao >= this.length()) {
			this.removeLast();
		} else if (posicao <= 0) {
			this.removeFrist();
        } else {
            let i = 1;
            let aux_a = this.head;
            let aux_b = this.head.proximo;
            while (i != posicao) {
                aux_a = aux_b;
                aux_b = aux_b.proximo;
                i++;
            }
            aux_a.proximo = aux_b.proximo;
        }
    }

    length(){
		let cont = 0;
		let atual = this.head.proximo;
		while (atual != null) {
			atual = atual.proximo;
			cont++;
		}
		return cont;
    }

    isEmpty(){
        return this.head.proximo === null;
    }

    search(dado){
        if (this.head.proximo == null) {
			return false;
		} else {
			let atual = this.head.proximo;
			while (atual != null) {
				if (atual.dado == dado) {
					return true;
				}
				atual = atual.proximo;
			}
			return false;
		}
    }

    clear(){
        this.head.proximo = null;
    }

    addInOrder(dado){
        if(this.isEmpty()){
            this.add(dado);
        }else{
            let novo_no = new Node(dado);
			let anterior = this.head;
			let atual = this.head.proximo;
			while (atual != null) {
				if (atual.dado > dado) {
					anterior.proximo = novo_no;
					novo_no.proximo = atual;
					return;
				}
				anterior = atual;
				atual = atual.proximo;
			}
			anterior.proximo = novo_no;
			novo_no.proximo = null;
			return;
		}
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
export default ListaSimplesmenteLigada;