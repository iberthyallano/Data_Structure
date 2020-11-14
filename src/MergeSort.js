function merge(esquerda, direita){
    let result = [], i_esquerda=0, i_direita=0;

    while(i_esquerda<esquerda.length && i_direita<direita.length){
        if(esquerda[i_esquerda]<direita[i_direita]){
            result.push(esquerda[i_esquerda]);
            i_esquerda++;
        }
        else{
            result.push(direita[i_direita])
            i_direita++;
        }
    }
    return result.concat(esquerda.slice(i_esquerda), direita.slice(i_direita));
}

function MergeSort(data){
    if(data.length<=1){
        return data;
      }

      let meio = data.length >> 1;

      let esquerda = data.slice(0, meio);
      let direita = data.slice(meio);
    
      return merge(MergeSort(esquerda), MergeSort(direita));
}
export default MergeSort;