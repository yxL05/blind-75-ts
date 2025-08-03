import { TreeNode } from "../classes/TreeNode.js";

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const [min, max] = [Math.min(p!.val, q!.val), Math.max(p!.val, q!.val)];

    while (root) {
        if (root.val < min) {
            root = root.right;
        }
        else if (root.val > max) {
            root = root.left;
        }
        else {
            break;
        }
    }

    return root;
};