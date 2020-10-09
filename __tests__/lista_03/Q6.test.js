import Q6 from "../../src/lista_03/Q6";

let q;

beforeEach(() => {
    q = new Q6("iberthy");
});

test("subString", () => {
    expect(q.subString(1, 4)).toBe("iber");
});