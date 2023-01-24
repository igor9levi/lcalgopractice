function twoSum(numbers: number[], target: number): number[] {
    let i = 0, j = numbers.length - 1;

    while (i < j) {
        const result = numbers[i] + numbers[j];
        if (result === target) return [i + 1, j + 1];
        if (result > target) {
            j--;
        } else {
            i++
        }
    }

    return [];
};