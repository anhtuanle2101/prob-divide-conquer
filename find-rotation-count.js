function findRotationCount(arr) {
    if (arr[0]<=arr[arr.length-1]){
        return 0;
    }
    const peakIdx = findPeak(arr);
    return peakIdx+1;
}

function findPeak(arr){
    let left=0;
    let right=arr.length-1;
    while (left<=right){
        const mid = left + Math.floor((right-left)/2);
        if (arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
            return mid;
        }else if (arr[mid] > arr[left] && arr[mid]>arr[right]){
            left = mid+1;
        }else if (arr[mid] < arr[left] && arr[mid]<arr[right]){
            right = mid-1;
        }
        if (mid===0){
            left=mid+1;
        }
        if (mid===arr.length-1){
            right=mid-1;
        }
    }
    return -1;
}

findRotationCount([7, 9, 11, 12, 15])
module.exports = findRotationCount