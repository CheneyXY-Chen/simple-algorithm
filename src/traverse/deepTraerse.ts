interface Tree {
  children: Tree[],
}

// 深度优先
const deepTraerse = (tree: Tree) =>  {
  
  let trees = [];
  if(tree){
    trees.push(tree)
    let children = tree.children;
    if(Array.isArray(children)){
      children.forEach(item => trees.push(item))
    } 
  } 
  return trees
}


// 广度优先
// const wildTraerse = (tree: Tree) =>  {
//   let trees = [], i = 0;
//   if(tree){
//     trees.push(tree)
//     wildTraerse(tree.nextElementSibling);
//     tree=trees[i++];
//     wildTraerse(tree.firstElementChild);
//   } 
//   return trees
// }