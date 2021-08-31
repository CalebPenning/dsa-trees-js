/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0
    let total = 0
    const toVisit = [this.root]
    while (toVisit.length) {
      let current = toVisit.pop()
      console.log(`CHILDREN OF CURRENT NODE ARE: ${current.left.val},${current.right.val} \n CURRENT VAL IS ${current.val}`)
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0

    const maxDepthHelper = node => {
      if (!node.left && !node.right) return 1
      if (!node.left) return maxDepthHelper(node.right) + 1
      if (!node.right) return maxDepthHelper(node.left) + 1
      console.log(`THIS IS WHAT WE ARE RETURNING IN THIS CALL ${Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1}`)
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      )
    }
    return maxDepthHelper(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0
    
    const maxSumHelper = node => {
      if (!node) return 0
      const leftSum = maxSumHelper(node.left)
      const rightSum = maxSumHelper(node.right)
      result = Math.max(result, node.val + leftSum + rightSum)
      return Math.max(0, leftSum + node.val, rightSum + node.val)
    }
    maxSumHelper(this.root)
    return result
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null

    let toVisit = [this.root]
    let closest = null

    while (toVisit.length) {
      let current = toVisit.shift()
      let currentVal = current.val
      let isHigherThanArg = currentVal > lowerBound
      let reassignClosest = currentVal < closest || closest === null

      if (isHigherThanArg && reassignClosest) 
        closest = currentVal
      
      if (current.left) toVisit.push(current.left)
      if (current.right) toVisit.push(current.right)
    }
    return closest
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
