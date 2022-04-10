// 二叉树深度
interface Tree {
  left: Tree | null,
  right: Tree | null,
}

const deepCount = (tree: Tree | null): number => {
  if(!tree) return 0
  let left: number= deepCount(tree.left)
  let right: number = deepCount(tree.right)
  return Math.max(left, right) + 1
}