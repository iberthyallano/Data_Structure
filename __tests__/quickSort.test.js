import QuickSort from "../src/QuickSort";

let c4se = [];
let bestCase = [];
let worstCase = [];

beforeEach(() => {
    c4se = [1, 5, 2, 8, 10, 3, 7, 9];
    bestCase = [1, 2, 3, 4, 5, 6, 7, 8];
    worstCase = [8, 7, 6, 5, 4, 3, 2, 1];
});

test("case", () => {
    expect(QuickSort(c4se)).toStrictEqual([1, 2, 3, 5, 7, 8, 9, 10]);
});

test("Best Case", () => {
    expect(QuickSort(bestCase)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("Worst Case", () => {
    expect(QuickSort(worstCase)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});