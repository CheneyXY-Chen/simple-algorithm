import { myQueue } from "./myQueue";
describe("两个栈设置队列", () => {
  it("add or length",() => {
    let q = new myQueue;
    expect(q.length).toBe(0)
    q.add(100)
    q.add(200)
    q.add(300)
    expect(q.length).toBe(3)
  })
  it("delete",() => {
    let q = new myQueue;
    expect(q.delete()).toBeNull()
    q.add(100)
    q.add(200)
    q.add(300)
    q.delete()
    expect(q.length).toBe(2)
    expect(q.delete()).toBe(200)
  })
})