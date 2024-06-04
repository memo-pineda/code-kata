# 643. Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

## Notes

This one is a pretty good intro to using sliding windows because it highlights the need to keep a running count + also wanting to avoid having to recomputing values in an array slice.

We save on recomputing by keeping a sum of the current values in the window by first summing up the first k values as the starting point. From there we get the 0th index of the nums array (numToRemove) and the kth index of the nums array (numToadd), and iterate through the nums array from k to the end of the array. At each step, we compute the running count by subtracting numToRemove and adding numToAdd. We also compute the maxSoFar so far by comparing this new running count against the current maxSoFar. After we finish iterate, we return the maxSoFar divided by k.