function containsDuplicate(nums: number[]): boolean {
    const sorted: number[] = nums.sort();

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i-1]) return true;
    }
    
    return false;
};