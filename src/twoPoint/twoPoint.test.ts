import { twoPoint } from './twoPotint';

describe("双指针求和有序数组",() => {
  it("正常", () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,31,41]
    const res = twoPoint(arr, 34);
    expect(res).toEqual([3,31])
  })
  it("失败大数", () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,31,41]
    const res = twoPoint(arr, 100);
    expect(res).toEqual([])
  })
  it("失败小数", () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,31,41]
    const res = twoPoint(arr, 24);
    expect(res).toEqual([])
  })
})