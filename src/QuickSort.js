function QuickSort(data, low = 0, up = data.length-1){
    if((up-low) > 1){
        let pivot = (() => {
            let aux_pivot = data[low + ((up - low) >> 1)];
            let i = low;
            let j = up;
            while(true){
                while(data[i] < aux_pivot){
                    i++
                }
                while(data[j] > aux_pivot){
                    j--
                }
                if(i >= j){
                    return j;
                }else{
                    let aux = data[i];
                    data[i] = data[j];
                    data[j] = aux;
                }
            }
        })()
        QuickSort(data, low, pivot);
        QuickSort(data, pivot, up);
    }
    return data;
}
export default QuickSort;