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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return helper(nums,0,nums.length-1)
};

function helper(nums,left,right){
    if(left>right) return null

    let p = Math.floor((left+right)/2)
    let root = new TreeNode(nums[p],null,null)
    root.left = helper(nums,left,p-1)
    root.right = helper(nums,p+1,right)
    return root
}