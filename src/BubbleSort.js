function BubbleSort(data){
    for (var i = 0; i < data.length; i++) { 
        for (var j = 0; j < data.length; j++) { 
            if(data[j] > data[j+1]) {
                var aux = data[j];  
                data[j] = data[j+1]; 
                data[j+1] = aux; 
            }
        }        
    }
    return data;
}
export default BubbleSort;