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
		let novoNo = new Node(dado);
		if(this.isEmpty()){
			this.head = novoNo; 
			this.tail = novoNo;
		}else{
			novoNo.proximo = this.head;
			novoNo.anterior = null;
			this.head.anterior = novoNo;
			this.head = novoNo;
		}
    }

    append(dado){
        let novoNo = new Node(dado);
		if (this.isEmpty()) {
			this.head = novoNo; 
			this.tail = novoNo;
		} else {
			novoNo.proximo = null;
			novoNo.anterior = this.tail;
			this.tail.proximo = novoNo;
			this.tail = novoNo;
		}
    }

    addAt(dado, posicao){
        if (posicao >= this.length()) {
			this.append(dado);
		} else if (posicao <= 0) {
			this.add(dado);
		} else {
			let novoNo = new Node(dado);
			let i = 1;
			let auxA = this.head;
			let auxB = this.head.proximo;
			while (i != posicao) {
				auxA = auxB;
				auxB = auxB.proximo;
				i++;
			}
			auxB.anterior = novoNo;
			auxA.proximo = novoNo;
			novoNo.proximo = auxB;
			novoNo.anterior = auxA;
		}
	}

    last(){
        if (this.isEmpty()){
            // throw new Error("Lista vazia");
            return "Lista vazia";	
		}else{
            return this.tail.dado;   
        }
    }

    frist(){
		if (this.isEmpty()){
            // throw new Error("Lista vazia");
            return "Lista vazia";	
		}else{
            return this.head.dado;   
        }
    }

    removeFrist(){
        if (this.isEmpty()){
            // throw new Error("Lista vazia");
            return "Lista vazia";	
		}else if(this.length() === 1){
			this.clear();
		}else{
            this.head = this.head.proximo;
            this.head.anterior = null;   
        }
    }

    removeLast(){
        if (this.isEmpty()){
            // throw new Error("Lista vazia");
            return "Lista vazia";	
		}else if(this.length() === 1){
			this.clear();
		}else{
            this.tail = this.tail.anterior;
			this.tail.proximo = null;
        }
    } 

    removeAt(posicao){
        if (posicao >= this.size()) {
			this.removeLast();
		} else if (posicao <= 0) {
			this.removeFrist();
		} else {
			let i = 1;
			let auxA = this.head;
			let auxB = this.head.proximo;
			let auxC = auxB.proximo;
			while (i != posicao) {
				auxA = auxB;
				auxB = auxB.proximo;
				auxC = auxB.proximo;
				i++;
			}
			auxA.proximo = auxC;
			auxC.anterior = auxA;
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
        this.head = null;
        this.tail = null;
    }

    search(dado){
        if (this.isEmpty()) {
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
		let result = "";
		while (aux != null) {
			result += aux.dado + (aux.proximo ? "->" : "");
			aux = aux.proximo;
		}
		return result;
    }

}
export default ListaDuplamenteLigada;