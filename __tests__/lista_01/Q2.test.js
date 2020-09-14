import Q2 from "../../src/lista_01/Q2";

let A;

beforeEach(() => {
    A = new Q2;
}); 

test("Teste da inverter", () => {
    expect(A.inverter("ABACAXI")).toBe("IXACABA");
    expect(A.inverter("OVO")).toBe("OVO");
    expect(A.inverter("BORBOLETA")).toBe("ATELOBROB");
});