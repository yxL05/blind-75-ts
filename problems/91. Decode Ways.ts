function numDecodings(s: string): number {
    // edge cases
    if (s.length === 0 || s[0] === '0') return 0;

    function valid(substr: string): boolean {
        if (substr[0] === '0') return false;
        switch (substr.length) {
            case 1:
                return true;
            case 2:
                return parseInt(substr) <= 26;
            default:
                return false;
        }
    }

    let [prev, curr] = [1, 1];

    function getNewFromI(i: number): number {
        if (i < 1) return (valid(s[i]!) ? curr : 0);
        return (valid(s[i]!) ? curr : 0) + (valid(s.slice(i-1, i+1)) ? prev : 0);
    }

    for (let i = 0; i < s.length; i++) {
        [prev, curr] = [curr, getNewFromI(i)];
    }

    return curr;
};