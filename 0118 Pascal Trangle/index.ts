/**
 * Copy previous row to next and add current and next from index 1
 */


/**
 * 
 * @param numRows 
 * @returns 
 */
function generate(numRows: number): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        const temp: number[] | undefined = result[i - 1] || [];
        let current: number[] = [1, ...temp];
        for (let j = 1; j < temp.length; j++) {
            current[j] = current[j] + current[j+1];
        }
        result[i] = [...current];
    }

    return result;
};