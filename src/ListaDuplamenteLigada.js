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
			let aux = this.head;
            this.head = aux.proximo;
			this.head.anterior = null; 
			return aux.dado;  
        }
    }

    removeLast(){
        if (this.isEmpty()){
            // throw new Error("Lista vazia");
            return "Lista vazia";	
		}else if(this.length() === 1){
			this.clear();
		}else{
			let aux = this.tail;
            this.tail = aux.anterior;
			this.tail.proximo = null;
			return aux.dado;
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

	remove(dado) {
		if (!this.isEmpty()) {
			let current = this.head;
			let next = this.head.proximo;
			let last = this.tail;

			if (current.dado === dado) {
				return this.removeFrist;
			} else if (last.dado === dado) {
				return this.removeLast();
			} else {
				while (next != null) {
					if (next.dado === dado) {
						let aux = next.proximo;
						current.proximo = next.proximo;
						aux.anterior = current;
						return true;
					}
					current = next;
					next = next.proximo;
				}
			}
		}
		return false;
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

    toString(){
		let aux = this.head;
		let result = "";
		while (aux != null) {
			result += aux.dado + (aux.proximo ? "->" : "");
			aux = aux.proximo;
		}
		return result;
	}
	
	asArray() {
		let current = this.head;
		let dados = [];
		while (current != null) {
			dados.push(current.dado);
			current = current.proximo;
		}
		return dados;
	}

}
export default ListaDuplamenteLigada;