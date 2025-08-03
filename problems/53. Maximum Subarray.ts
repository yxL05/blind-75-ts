function maxSubArray(nums: number[]): number {
    let maxSum = nums[0]!;
    let currSum = nums[0]!;
    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) currSum = 0;
        currSum += nums[i]!;
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};