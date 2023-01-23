function twoSum(nums: number[], target: number): number[] {
    const diffs: { [key: number]: number; } = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const diff = target - currentNumber;

        if (currentNumber in diffs) {
            return [diffs[currentNumber], i];
        }
        diffs[diff] = i;
    }
    return [];
};