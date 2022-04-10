import { matchPoint } from "./matchPoint"
describe("测试符号对称", () => {
  it("正常情况下", () => {
    const str = "a(b[c{d}e]f)g"
    const res = matchPoint(str)
    expect(res).toBe(true)
  })
  it("错误情况下", () => {
    const str = "a(b[c】]{d}e]f)g"
    const res = matchPoint(str)
    expect(res).toBe(false)
  })
  it("空串", () => {
    const str = ""
    const res = matchPoint(str)
    expect(res).toBe(true)
  })
  it("非字符串", () => {
    const str = {}
    // @ts-ignore
    const res = matchPoint(str)
    expect(res).toBe(false)
  })
})