import Q5 from "../../src/lista_01/Q5";

let A;

beforeEach(() => {
    A = new Q5;
});

test("Teste do conversor", () => {
    expect(A.conversor(10)).toBe("1010");
    expect(A.conversor(23)).toBe("10111");
    expect(A.conversor(44)).toBe("101100");
});