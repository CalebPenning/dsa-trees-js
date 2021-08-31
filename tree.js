/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0
    let total = 0
    const toVisit = [this.root]
    while (toVisit.length) {
      let current = toVisit.shift()
      total += current.val
      if (current.children.length) 
        for (let child of current.children) toVisit.push(child)
    }
    return total
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0
    let total = 0
    const toVisit = [this.root]
    while (toVisit.length) {
      let current = toVisit.shift()
      if (current.val % 2 && !!current.val) total++
      if (current.children.length)
        for (let child of current.children) toVisit.push(child)
    }
    return total
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0
    let total = 0
    const toVisit = [this.root]
    while (toVisit.length) {
      let current = toVisit.shift()
      if (current.val > lowerBound) total++
      if (current.children.length)
        for (let child of current.children) toVisit.push(child)
    }
    return total
  }
}

module.exports = { Tree, TreeNode };
