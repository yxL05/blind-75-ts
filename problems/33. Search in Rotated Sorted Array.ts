function search(nums: number[], target: number): number {
    function findMin(): number {
        let l = 0, r = nums.length - 1;
        while (l < r) {
            const m = Math.floor((l + r) / 2);

            if (nums[m]! < nums[nums.length - 1]!) {
                r = m;
            }
            else {
                l = m + 1;
            }
        }

        return l;
    }

    let l = findMin(), r = (l - 1) + nums.length;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const realM = m % nums.length;

        if (nums[realM]! === target) {
            return realM;
        }
        else if (nums[realM]! < target) {
            l = m + 1;
        }
        else {
            r = m - 1;
        }
    }

    return -1;
};
