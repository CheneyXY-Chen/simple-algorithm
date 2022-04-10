import { MyQueue } from './objectQueue';
describe("链表实现栈",() => {
  it("add", () => {
    let q = new MyQueue();
    q.add(100);
    q.add(200);
    const res = q.add(300);
    expect(res).toEqual({ value: 100, next: { value: 200, next: { value: 300, next: null } } })
  })
  it("length", () => {
    let q = new MyQueue();
    q.add(100);
    q.add(200);
    expect(q.length).toBe(2)
  })
  it("delete", () => {
    let q = new MyQueue();
    q.add(100);
    q.add(200);
    const res = q.delete();
    expect(res).toBe(100)
  })
})