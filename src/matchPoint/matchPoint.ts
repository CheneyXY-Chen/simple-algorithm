/**
 * 判断符号 是否对称 （“ () {} [] ”）
 * @param str: String
 * @returns: boolean
 */

const matchTop = (top: string, s: string): boolean => {
  if(typeof top !== "string" || typeof s !== "string") return false
  switch (s) {
    case "}":
      return top === "{";
    case ")":
      return top === "(";
    case "]":
      return top === "[";
  }
  return false
}

export const matchPoint = (str: string): boolean => {
  if( typeof str !== "string" ) return false
  const leftPoint = "({[";
  const rightPoint = "]})";
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if(leftPoint.includes(s)){
      stack.push(s)
    }else if(rightPoint.includes(s)){
      const top = stack[stack.length - 1]
      if(matchTop(top, s)) {
        stack.pop()
      }else {
        return false
      }
    }
  }
  return !stack.length
}
