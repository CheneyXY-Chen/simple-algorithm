/**
 * 二分查找 (有序数组查找 目标值)
 */

/**
 * 循环版
 */

export const binarySearch = (arr: number[], target: number): number => {
  if(!Array.isArray(arr) || !arr.length) return -1
  
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(startIndex <= endIndex){
    let middleIndex = Math.floor((endIndex + startIndex) / 2);
    let middleValue = arr[middleIndex];

    if (middleValue > target) {
      endIndex = middleIndex - 1;
    }else if (middleValue < target) {
      startIndex = middleIndex + 1;
    }else {
      return middleIndex
    }
  }
  return -1
}

export const binarySearch2 = (arr: number[], target: number, startIndex?: number, endIndex?: number): number => {
  if(!Array.isArray(arr) || !arr.length) return -1

  startIndex === undefined && (startIndex = 0)
  endIndex === undefined && (endIndex = arr.length - 1)

  if(startIndex > endIndex) return -1
  let middleIndex = Math.floor((endIndex + startIndex) / 2);
  let middleValue = arr[middleIndex];

  if (middleValue === target){ 
    return middleIndex
  }else if(middleValue > target){
    return binarySearch2(arr, target, startIndex, middleIndex - 1)
  }else {
    return binarySearch2(arr, target, middleIndex + 1, endIndex)
  }
}

