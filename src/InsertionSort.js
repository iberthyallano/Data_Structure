function InsertionSort(data){
    for(let i = 1; i < data.length; i++){
        let chosen = data[i];
        let j = i-1;
        while(j >= 0 && data[j] > chosen){
            data[j+1] = data[j];
            j = j-1;
        }
        data[j+1] = chosen;
    }
    return data;
}
export default InsertionSort;