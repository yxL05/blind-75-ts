function twoSum(nums: number[], target: number): number[] {
    const diffMapByIndex = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (diffMapByIndex.has(nums[i]!)) return [i, diffMapByIndex.get(nums[i]!)!];
        diffMapByIndex.set(target - nums[i]!, i);
    }

    return [0, 0];
};