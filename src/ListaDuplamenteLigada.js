class Node{
    constructor(dado){
        this.dado = dado;
		this.anterior = null;
		this.proximo = null;
    }
}

class ListaDuplamenteLigada{

    constructor(){
        this.head = null;
		this.tail = null;
    }

    add(dado){
		let novo_no = new Node(dado);
		if(this.isEmpty()){
			this.head = novo_no; 
			this.tail = novo_no;
			novo_no.anterior = null;
			novo_no.proximo = null;
		}else{
			novo_no.proximo = this.head;
			novo_no.anterior = null;
			this.head.anterior = novo_no;
			this.head = novo_no;
		}
    }

    append(dado){
        let novo_no = new Node(dado);
		if (this.isEmpty()) {
			this.head = novo_no; 
			this.tail = novo_no;
			novo_no.anterior = null;
			novo_no.proximo = null;
		} else {
			novo_no.proximo = null;
			novo_no.anterior = this.tail;
			this.tail.proximo = novo_no;
			this.tail = novo_no;
		}
    }

    addAt(dado, posicao){
        if (posicao >= this.length()) {
			this.append(dado);
		} else {
			if (posicao <= 0) {
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 0;
				let aux_a = this.head;
				let aux_b = this.head.proximo;
				while (i != posicao) {
					aux_a = aux_b;
					aux_b = aux_b.proximo;
					i++;
				}
				aux_a.proximo = novo_no;
				novo_no.proximo = aux_b;
				novo_no.anterior = aux_a;
				aux_b.anterior = novo_no;
			}
		}

    }

    // last(){
        
    // }

    // frist(){

    // }

    removeFrist(){
        if (this.isEmpty()){
            // throw new Error("Lista vazia");
            return "Lista vazia";	
		}else{
            let aux = this.head.proximo;
            this.head = aux;
            this.head.anterior = null;   
        }
    }

    removeLast(){
        if (this.isEmpty()){
            // throw new Error("Lista vazia");
            return "Lista vazia";	
		}else{
            let aux = this.tail.anterior;
			this.tail = aux;
			this.tail.proximo = null;
        }
    } 

    removeAt(posicao){
        if (posicao >= this.size()) {
			this.removeLast();
		} else {
			if (posicao <= 0) {
				this.removeFrist();
			} else {
				let i = 0;
				let aux_a = this.head;
				let aux_b = this.head.proximo;
				let aux_c = aux_b.proximo;
				while (i != posicao) {
					aux_a = aux_b;
					aux_b = aux_b.proximo;
					aux_c = aux_b.proximo;
					i++;
				}
				aux_a.proximo = aux_c;
				aux_c.anterior = aux_a;
			}
		}
    }

    length(){
		let cont = 0;
		let aux = this.head;
		while (aux != null) {
			aux = aux.proximo;
			cont++;
		}
		return cont;
    }

    isEmpty(){
        if(this.head === null && this.tail === null){
            return true;
        }else{
            return false;
        }
    }

    clear(){
        this.head === null;
        this.tail === null;
    }

    search(dado){
        if (isEmpty()) {
			return false;
		} else {
			let aux = this.head;
			while (aux !== null) {
				if (aux.dado == dado) {
					return true;
				}
				aux = aux.proximo;
			}
			return false;
		}
    }

    // addInOrder(dado){
       
    // }

    toString(){
		let aux = this.head;
		let texto = "";
		while (aux != null) {
			texto += aux.dado + (aux.proximo ? "->" : "");
			aux = aux.proximo;
		}
		return texto;
    }

}
export default ListaDuplamenteLigada;