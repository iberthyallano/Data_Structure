export default class Q2{

    constructor(maxsize){
        this.dados = [];
        this.maxsize = maxsize;
        this.inicio = -1;
        this.fim = 0;
    }

    isEmpty(){
        return this.inicio === -1;
    }

    isFull(){
        return (this.inicio===0&&this.fim === this.maxsize-1) || this.inicio === this.fim + 1;
    }

    inserirInicio(dado){
        if(this.isFull()){
            //throw new Error("Deque cheio");
            return "Deque cheio";
        }else if(this.isEmpty()){
            this.inicio = 0;
        }else if(this.inicio === 0){
            this.inicio = this.maxsize - 1;
        }else{
            this.inicio--;
        }
        this.dados[this.inicio] = dado;
    }

    inserirFim(dado){
        if(this.isFull()){
            //throw new Error("Deque cheio");
            return "Deque cheio";
        }else if(this.isEmpty()){
            this.inicio = 0;
        }else if(this.fim === this.maxsize - 1){
            this.fim = 0;
        }else{
            this.fim--;
        }
        this.dados[this.fim] = dado;
    }

    removeInicio(){
        if(this.isEmpty()){
            //throw new Error("Deque vazio");
            return "Deque vazio";
        }
        let result = this.dados[this.inicio];

        if(this.inicio === this.fim){
            this.inicio = - 1;
            this.fim = 0;
        }else if(this.inicio === this.maxsize - 1){
            this.inicio = 0;
        }else{
            this.inicio++;
        }

        return result;
    }

    removeFim(){
        if(this.isEmpty()){
            //throw new Error("Deque vazio");
            return "Deque vazio";
        }

        let result = this.dados[this.fim];


        if(this.inicio === this.fim){
            this.inicio = - 1;
            this.fim = 0;
        }else if(this.fim === 0){
            this.fim = this.maxsize - 1;
        }else{
            this.fim--;
        }
        return result;
    }

}