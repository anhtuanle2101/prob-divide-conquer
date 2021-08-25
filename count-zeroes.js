function countZeroes(arr) {
    const lastOneIdx = find(arr);
    if (lastOneIdx ===-1){
        return arr.length;
    }else{
        return arr.length-lastOneIdx-1;
    }
}

function find(arr){
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    while (leftIdx <= rightIdx){
        const middleIdx = leftIdx+Math.floor((rightIdx-leftIdx)/2);
        if (arr[middleIdx] === 1){
            if (arr[middleIdx+1]===0 || middleIdx === arr.length-1){
                return middleIdx;
            }else{
                leftIdx = middleIdx + 1;
            }
        }
        if (arr[middleIdx] === 0){
            if (arr[middleIdx-1]===1){
                return middleIdx-1;
            }else{
                rightIdx = middleIdx - 1;
            }
        }
    }
    return -1;
}

module.exports = countZeroes