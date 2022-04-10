import { reverseLink, getLinkList, LinkList } from "./reverseList";

describe("单向链表反转",() => {
  it("单个元素", () => {
    const link = { value: 100 }
    const res: LinkList = reverseLink(link)
    expect(res).toEqual({ value: 100 })
  })
  it("多个节点", () => {
    const linkArr = [100, 200, 300, 400]
    const res: LinkList = getLinkList(linkArr)
    expect(res).toEqual(
      { 
        value: 100,
        next: { 
          value: 200, 
          next: { 
            value: 300,
             next: { value: 400 } 
            } 
        } 
      }
    )
    const res2: LinkList = reverseLink(res)
    expect(res2).toEqual(
      { 
        value: 400,
        next: { 
          value: 300, 
          next: { 
            value: 200,
             next: { value: 100 } 
            } 
        } 
      }
    )
  })
})