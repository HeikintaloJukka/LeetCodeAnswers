/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    let lengths = []
    let length = 0
    let longest = 0

    //dfs?
    let tree = (length,root) => {
        if(root === null){
            lengths.push(length)
            if(longest < length) longest = length
        }
        else{
            length++
            tree(length, root.left)
            tree(length, root.right)
        }
    }

    tree(length,root)
    return longest
};