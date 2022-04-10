/**
 * 反转单向链表
 */

 export interface LinkList {
  value: number
  next?: LinkList
 }

// 将链表反转
 export const reverseLink = (linkList: LinkList): LinkList => {
   let preLink: LinkList | undefined = undefined; 
   let curLink: LinkList | undefined = undefined; 
   let nextLink: LinkList | undefined = linkList; 
   
   while(nextLink) {
     if (curLink && !preLink) {
       delete curLink.next
     }
     if(curLink && preLink){
       curLink.next = preLink
     }
     preLink = curLink
     curLink = nextLink
     nextLink = nextLink.next
   }

   curLink!.next = preLink
   return curLink!
 }

 // 将数组 转为链表
 export const getLinkList = (arr: number[]): LinkList => {
  let len = arr.length
  if(!Array.isArray(arr) || !len) throw new Error("arr is empty");
  let curLink: LinkList = {
    value: arr[len - 1]
  }
  for (let i = len - 2; i >= 0; i--) {
    curLink = {
      value: arr[i],
      next: curLink
    }
  }
  return curLink
}