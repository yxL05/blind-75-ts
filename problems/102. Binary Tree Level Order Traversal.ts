import { TreeNode } from "../classes/TreeNode.js";
import { Queue } from "@datastructures-js/queue";

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

function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];

    const queue = new Queue<TreeNode | null>([root]);

    while (!queue.isEmpty()) {
        const level: number[] = [];

        const levelLength = queue.size();
        for (let i = 0; i < levelLength; i++) {
            const curr = queue.dequeue();
            if (curr) {
                level.push(curr.val);
                queue.enqueue(curr.left).enqueue(curr.right);
            }
        }

        if (level.length > 0) res.push(level);
    }  

    return res;
};