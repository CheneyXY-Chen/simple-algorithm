// 有序数组 双指针查询 两数之和

export const twoPoint = (arr: number[], target: number): number[] => {
  let i = 0;
  let j = arr.length - 1;
  let res: number[] = []
  while(i < j){
    if (arr[i] + arr[j] > target) {
      j--
    }else if(arr[i] + arr[j] < target){
      i++
    }else {
      res.push(arr[i], arr[j])
      return res
    }
  }
  return res
}