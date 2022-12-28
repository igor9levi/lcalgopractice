//  Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function checkNodes (left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null && right === null) return true;
    if (left === null || right === null || left.val !== right.val) return false;
    return checkNodes(left.left, right.right) && checkNodes(left.right, right.left);
}

function isSymmetric(root: TreeNode | null): boolean {
   if (root === null) return true;

   return checkNodes(root.left, root.right);
};