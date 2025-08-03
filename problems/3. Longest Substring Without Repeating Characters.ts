function lengthOfLongestSubstring(s: string): number {
    let maxLen = 0;
    let l = 0;
    let seen: Set<string> = new Set();
    for (let r = 0; r < s.length; r++) {
        while (seen.has(s[r]!)) {
            seen.delete(s[l]!);
            l++;
        }
        seen.add(s[r]!);
        const len = r - l + 1;
        maxLen = len > maxLen ? len : maxLen;
    }
    return maxLen;
};