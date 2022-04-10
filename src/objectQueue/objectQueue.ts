/**
 * 链表实现栈
 * 注意需要  头出尾进
 * 需要length和 加个 tail指针指向 尾部
 */

 export interface LinkList {
  value: number
  next: LinkList | null
 }

 export class MyQueue {
  private len = 0
  private head: LinkList | null = null;
  private tail: LinkList | null = null;

  add(n: number) {
    let curNode = {
      value: n,
      next: null
    }

    if(!this.head){
      this.head = curNode;
    }

    const tail = this.tail
    if(tail){
      tail.next = curNode;
    }
    this.len++
    this.tail = curNode
    return this.head
  }

  delete() {
    const headNode = this.head
    if(this.len <= 0) return null;
    if(!headNode) return null;
    this.head = headNode.next;
    this.len--;
    return headNode.value
  }

  get length(): number {
    return this.len
  }
}