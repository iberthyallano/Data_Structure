class FilaCircular {

    constructor(size = 10){
        this.capacidade = size;
        this.dados = [];
        this.inicio = 1;
        this.fim = 1;
    }

    enqueue(dado){
        if(this.isFull()){
            // throw new Error("Fila cheia");
            return "Fila cheia";
        }else{
            this.dados[this.fim] = dado;
            if(this.fim === this.capacidade){
                this.fim = 0;
            }else{
                this.fim += 1;
            }
        }
    }
    
    dequeue(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia";
        }else{
            let result = this.dados[this.inicio];
            if(this.inicio === this.capacidade){
                this.inicio = 0;
            }else{
                this.inicio += 1;
            }
            return result;
        }
    } 

    front(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia";
        }else{
            return this.dados[this.inicio];
        }
    }

    length(){
        if(this.isEmpty()){
            return 0;
        }else if(this.inicio < this.fim){
            return this.fim - this.inicio;
        }else{
            return this.capacidade + this.inicio - this.fim + 1;
        }
    }

    clear(){
        this.inicio = 1;
        this.fim = 1;
    }

    isFull(){
       return this.inicio === this.fim + 1
    }

    isEmpty(){
       return this.inicio === this.fim;
    }

    toString(){
        let result = "";
		if (this.inicio <= this.fim) {
			for (let i = this.inicio; i < this.fim; i++) {
				result += "[";
                result += `${this.dados[i]}`;
                if(i === this.fim - 1){
                    result += "]";
                }else{
                    result += "] ";
                }
			}
		} else {
			for (let i = this.inicio; i <= this.capacidade; i++) {
				result += "[";
                result += `${this.dados[i]}`;
                if(i === this.fim -1){
                    result += "]";
                }else{
                    result += "] ";
                }
			}
			for (let i = 0; i < this.fim; i++) {
				result += "[";
                result += `${this.dados[i]}`;
                if(i === this.fim -1){
                    result += "]";
                }else{
                    result += "] ";
                }
			}
		}
		return result;
    }

}
export default FilaCircular;