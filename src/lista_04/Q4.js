import Conjunto from "../Conjunto";

export default function Q4(conjVit, seqJog){
    let contQuina = 0, contSena = 0;
    for(let i = 0; i < seqJog.length; i++){
        let aux = new Conjunto;
        for(let j = 1; j < seqJog[i].length; j++ ){
            aux.add(seqJog[i][j]);
        }
        let result = conjVit.intersection(aux);
        if(result.length() === 5){
            console.log(seqJog[i][0] + ", quina"); //mostra nome do vencedor e o tipo de vitória
            contQuina += 1;

        }else if(result.length() === 6){
            console.log(seqJog[i][0] + ", sena"); //mostra nome do vencedor e o tipo de vitória
            contSena += 1;
        }
    }
    let result = "total de quinas: " + contQuina + ", total de senas: " + contSena + ".";
    return result;
}
