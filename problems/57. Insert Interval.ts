interface IInsertPos {
    index: number,
    pos: 'before' | 'in' | 'after'
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    // Edge case
    if (intervals.length === 0) return [newInterval];

    function findInsertPos(search: number): IInsertPos | undefined {
        let l = 0, r = intervals.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (search >= intervals[m]![0]! && search <= intervals[m]![1]!) {
                return { index: m, pos: 'in' };
            }
            else if (search < intervals[m]![0]!) {
                if (m === 0 || search > intervals[m-1]![1]!) {
                    return { index: m, pos: 'before' };
                }
                r = m - 1;
            }
            else {
                if (m === intervals.length - 1 || search < intervals[m+1]![0]!) {
                    return { index: m, pos: 'after' };
                }
                l = m + 1;
            }
        }

        return undefined;
    }

    const [leftInsertPos, rightInsertPos] = [findInsertPos(newInterval[0]!)!, findInsertPos(newInterval[1]!)!];

    const merged: number[] = [];
    const ret: number[][] = [];
    for (let i = 0; i < intervals.length; i++) {
        if (i < leftInsertPos.index || i > rightInsertPos.index) {
            ret.push(intervals[i]!);
            continue;
        }

        if (i === leftInsertPos.index) {
            switch (leftInsertPos.pos) {
                case "before":
                    merged.push(newInterval[0]!);
                    break;
                case "in":
                    merged.push(intervals[i]![0]!);
                    break;
                case "after":
                    ret.push(intervals[i]!);
                    merged.push(newInterval[0]!);
                    break;
            }
        }
        if (i === rightInsertPos.index) {
            switch (rightInsertPos.pos) {
                case "before":
                    merged.push(newInterval[1]!);
                    ret.push(merged);
                    ret.push(intervals[i]!);
                    break;
                case "in":
                    merged.push(intervals[i]![1]!);
                    ret.push(merged);
                    break;
                case "after":
                    merged.push(newInterval[1]!);
                    ret.push(merged);
                    break;
            }
        }
    }

    return ret;
};