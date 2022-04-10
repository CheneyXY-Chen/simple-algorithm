import { binarySearch, binarySearch2 } from "./binarySearch"

describe("二分查找", () => {
  it("循环法", () => {
    const arr = [1,2,3,4,5,8,10,122,132,142];
    const target = 122;
    const target1 = 123;
    const res = binarySearch(arr, target)
    const res1 = binarySearch(arr, target1)
    expect(res).toBe(7)
    expect(res1).toBe(-1)
  })
  it("循环法 空数组", () => {
    const arr: number[] = [];
    const target = 122;
    const target1 = 123;
    const res = binarySearch(arr, target)
    const res1 = binarySearch(arr, target1)
    expect(res).toBe(-1)
    expect(res1).toBe(-1)
  })
  it("递归", () => {
    const arr = [1,2,3,4,5,8,10,122,132,142];
    const target = 122;
    const target1 = 123;
    const res = binarySearch2(arr, target)
    const res1 = binarySearch(arr, target1)
    expect(res).toBe(7)
    expect(res1).toBe(-1)
  })
  it("递归 空数组", () => {
    const arr: number[] = [];
    const target = 122;
    const target1 = 123;
    const res = binarySearch2(arr, target)
    const res1 = binarySearch2(arr, target1)
    expect(res).toBe(-1)
    expect(res1).toBe(-1)
  })
})