# 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## Notes

This is dfs problem, because we are looking for the max depth of a tree. As we go down the tree, we first check the root node and if the root node is not undefined, then we at least know the tree has a depth of 1. In order to find the max depth, we need to find the depth of the left side and right side of the root node, compare them and return the max, hence why we return `Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right))`, where `1` is the root node. At every level, we get the max height of the subtree until there are no levels left (we reach a leaf node). Once we get to the leaf, we compute all the subtrees up, only taking the max of each subtree to compute the max depth.