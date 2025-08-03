function isValid(s: string): boolean {
    const closeToOpen: Map<string, string> = new Map([
        [")", "("], ["]", "["], ["}", "{"]
    ]);

    const stack: string[] = [];

    for (const bracket of s) {
        if (closeToOpen.has(bracket)) {
            if (stack.pop() !== closeToOpen.get(bracket)) return false;
        }
        else {
            stack.push(bracket);
        }
    }

    return stack.length === 0;
};