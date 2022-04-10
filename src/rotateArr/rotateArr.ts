export const rotate = (array: number[], k: number): number[] => {
  const len = array.length;
  let step = Math.abs(k % len);
  if(Number.isNaN(step)) step = 0;
  for (let i = 0; i < step; i++) {
    const number = array.pop();
    if (number !== undefined) {
      array.unshift(number) // 数组是一个有序结构，unshift 操作非常慢！！！ O(n)
  }
  }
  return array
}

export const rotate2 = (array: number[], k: number): number[] => {
  const len = array.length;
  let step = Math.abs(k % len);
  if(Number.isNaN(step)) step = 0;
  const part1 = array.slice(-step) // O(1)
  const part2 = array.slice(0, length - step)
  const part3 = part1.concat(part2)
  return part3
}