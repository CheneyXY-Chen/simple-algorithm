export class myQueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  /**
   *  add
   *  入队
   *  n: number
   */
  add(n: number): number {
    this.stack1.push(n);
    return this.stack1.length;
  }

  get length() {
    return this.stack1.length;
  }

  delete(): number | null{
    let res : number | undefined = 0;
    let {stack1, stack2} = this

    while(stack1.length) {
      const n = stack1.pop()
      if(n) {
        stack2.push(n);
      }
    }

    res = stack2.pop();

    while(stack2.length) {
      const n = stack2.pop();
      if(n) {
        stack1.push(n);
      }
    }

    return res || null
  }
}