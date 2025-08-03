function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const prerequisitesMap: Map<number, number[]> = new Map();
    for (let i = 0; i < numCourses; i++) prerequisitesMap.set(i, []);
    (prerequisites as [number, number][]).forEach(([a, b]) => {
        prerequisitesMap.get(a)!.push(b);
    })

    const seen: Set<number> = new Set();

    function dfs(course: number): boolean {
        if (seen.has(course)) return false;
        if (prerequisitesMap.get(course)!.length === 0) return true;

        seen.add(course);
        for (const prereq of prerequisitesMap.get(course)!) {
            if (!dfs(prereq)) return false;
        }
        seen.delete(course);
        prerequisitesMap.set(course, []);
        return true;
    }

    for (const course of prerequisitesMap.keys()) {
        if (!dfs(course)) return false;
    }
    return true;
};

console.log(canFinish(2, [[1,0]]));