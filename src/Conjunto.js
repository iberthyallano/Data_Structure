import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada"

class Conjunto{

    constructor(){
        this.dados = new ListaDuplamenteLigada();
    }

    add(dado){
        if(!this.has(dado)){
            this.dados.add(dado);
            return true;
        }else{
            return false;
        }
    }

    delete(dado){
        return this.dados.remove(dado);
    }

    has(dado){
        return this.dados.search(dado);
    }   

    clear(){
        this.dados.clear();
    }

    length(){
        return this.dados.length();
    }

    isEmpty(){
        return this.dados.isEmpty();
    }

    values(){
        return this.dados.asArray();
    }

    union(conj){
        let result = new Conjunto;
        let valuesA = this.values();
        let valuesB = conj.values();

        for(const i of valuesA){
            result.add(i);
        }
        for(const j of valuesB){
            result.add(j);
        }
        return result;
    }

    intersection(conj){
        let result = new Conjunto;
        let valuesB = conj.values();
        for(const i of valuesB){
            if(this.has(i)){
                result.add(i)
            }
        }
        return result
    }

    difference(conj){
        let result = new Conjunto;
        let valuesA = this.values();
        let valuesB = conj.values();
        
        for(const i of valuesA){
            result.add(i);
        }

        for(const j of valuesB){
            if(this.has(j)){
                result.delete(j)
            }
        }
        return result
    }

    contains(conj){
        let valuesB = conj.values();
        for(const i of valuesB){
            if(!this.has(i)){
                return false;
            }
        }
        return true;
    }

    isEqual(conj){
        return (this.contains(conj)) && (conj.contains(this));
    }


}
export default Conjunto;