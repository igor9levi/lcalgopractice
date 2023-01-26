function getCharactersAndNumbers(char: string): boolean {
    return char.match(/[a-z0-9]/ig) !== null;
}

function isPalindrome(s: string): boolean {
    const newstring = s.split('').filter(getCharactersAndNumbers).join('');
    const len = newstring.length;
    for (let i = 0; i < len; i++) {
        if (i >= len/2) return true;
        if (newstring[i].toLowerCase() !== newstring[len - 1 - i].toLowerCase())  {
            return false;
        }

    }
    return true;
};