import BubbleSort from "../src/BubbleSort";

let bestCase = [];
let worstCase = [];

beforeEach(() => {
    bestCase = [1, 2, 3, 4, 5, 6, 7, 8];
    worstCase = [8, 7, 6, 5, 4, 3, 2, 1];
});

test("Best Case", () => {
    let limite = "Upper limit of the best case O(n²)";
    console.log(limite);
    expect(BubbleSort(bestCase)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("Worst Case", () => {
    let limite = "Upper limit of the worst case O(n²)";
    console.log(limite);
    expect(BubbleSort(worstCase)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});