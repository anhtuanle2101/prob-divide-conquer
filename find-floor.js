function findFloor(arr, val) {
    return binarySearch(arr,val);
}

function binarySearch(arr, val){
    let left=0;
    let right=arr.length-1;
    while (left<=right){
        let mid = left+Math.floor((right-left)/2);
        if (arr[mid]<=val){
            if (arr[mid+1]<=val){
                left = mid+1;
            }else{
                return arr[mid];
            }
        }else if (arr[mid]<val){
            left = mid+1;
        }else if (arr[mid]>val){
            right = mid-1;
        }
    }
    return -1;
}

module.exports = findFloor