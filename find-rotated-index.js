function findRotatedIndex(arr, val) {
    const peakIdx = findPeak(arr);
    let result=-1;
    if (val>=arr[0] && val<=arr[peakIdx]){
        result = binarySearch(arr,0,peakIdx,val);
    }else
    if (val>=arr[peakIdx+1] && val<=arr[arr.length-1]){
        result = binarySearch(arr,peakIdx+1, arr.length-1,val);
    }else{
        result = -1;
    }
    return result;
}

function binarySearch(arr, l, r, val){
    let left=l;
    let right=r;
    while (left<=right){
        let mid = left+Math.floor((right-left)/2);
        if (arr[mid]===val){
            return mid;
        }else if (arr[mid]<val){
            left = mid+1;
        }else if (arr[mid]>val){
            right = mid-1;
        }
    }
    return -1;
}

function findPeak(arr){
    let left=0;
    let right=arr.length-1;
    while (left<=right){
        let mid = left+Math.floor((right-left)/2);
        if (mid===0 && mid===arr.length-1){
            return -1;
        }
        if (arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
            return mid;
        }else if (arr[mid] > arr[left] && arr[mid]>arr[right]){
            left = mid+1;
        }else if (arr[mid] < arr[left] && arr[mid]<arr[right]){
            right = mid-1;
        }
    }
    return -1;
}

module.exports = findRotatedIndex