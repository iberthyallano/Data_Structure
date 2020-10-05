class Node{
    constructor(data,priority){
        this.data = data;
        this.priority = priority;
    }
}

class FilaDePrioridade{

    constructor(){
        this.tree = [];
        this.size = 0;

        this.tree[0] = new Node(0,-999999999999);
    }

    enqueue(dado, prioridade){
        let novo_no = new Node(dado, prioridade);

        this.tree[++this.size] = novo_no;

        let pos_filho = this.size;
        let pos_pai = Math.trunc(pos_filho / 2);

        while(novo_no.priority < this.tree[pos_pai].priority){
            this.tree[pos_filho] = this.tree[pos_pai];
			pos_filho = pos_pai;
			pos_pai = Math.trunc(pos_filho / 2);
        }
        this.tree[pos_filho] = novo_no;
    }
    
    dequeue(){
        if(this.isEmpty()){
            // throw new Error("Fila vazia");
            return "Fila vazia";
        }else{
            let menor, ultimo, pos_filho, pos_pai;

            menor = this.tree[1];
            ultimo = this.tree[this.size];

            this.size--;
            this.tree[1] = ultimo;

            for (pos_pai = 1; pos_pai * 2 <= this.size; pos_pai = pos_filho) {
                pos_filho = pos_pai * 2;

                if ((pos_filho != this.size) && (this.tree[pos_filho + 1].priority < this.tree[pos_filho].priority)) {
                    pos_filho++;
                }
                if (this.tree[pos_filho].priority < ultimo.priority) {
                    this.tree[pos_pai] = this.tree[pos_filho];
                } else {
                    break;
                }
            }
            this.tree[pos_pai] = ultimo;
            return menor.priority;
        } 
    }

    front(){
        return this.tree[1];
    }

    length(){
        return this.size;
    }

    clear(){
        this.size = 0;
    }

    isEmpty(){
        return this.length() === 0;
    }

    toString(){
		let texto = '';
		for(let i = 1; i <= this.size; i++){
			texto += this.tree[i].data;
			if(i < this.size){
				texto += " ";
			}
		}
		return texto;
    }
    
    asArray(){
        let dados = [];
		for(let i = 1; i <= this.size; i++){
			dados.push(this.tree[i].priority);
		}
		return dados;
	}

}
export default FilaDePrioridade;