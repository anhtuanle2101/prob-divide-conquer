function sortedFrequency(arr, val) {
    const firstIdx = findFirst(arr,val);
    if (firstIdx ===-1){
        return -1;
    }
    const lastIdx = findLast(arr,val);
    return lastIdx-firstIdx+1;
}

function findFirst(arr, val){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let middle = left+Math.floor((right-left)/2);
        if (arr[middle]===val){
            if (arr[middle-1]!==val||middle===0){
                return middle;
            }else{
                right = middle-1;
            }
        }else if (arr[middle] > val){
            right = middle-1;
        }else if (arr[middle] < val){
            left = middle+1;
        }
    }
    return -1;
}

function findLast(arr, val){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let middle = left+Math.floor((right-left)/2);
        if (arr[middle]===val){
            if (arr[middle+1]!==val||middle===arr.length){
                return middle;
            }else{
                left = middle + 1;
            }
        }else if (arr[middle] > val){
            right = middle-1;
        }else if (arr[middle] < val){
            left = middle+1;
        }
    }
    return -1;
}

module.exports = sortedFrequency