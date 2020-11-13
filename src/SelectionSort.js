function SelectionSort(data){
    for(let i = 0; i < data.length; i++){
        let lowest_index = i;
        for(let j = i; j < data.length; j++){
            if(data[lowest_index] > data[j]){
                lowest_index = j
            }
        }
        if(i != lowest_index){
            let aux = data[lowest_index];
            data[lowest_index] = data[i];
            data[i] = aux;
        }
    }
    return data;
}
export default SelectionSort;