import Q6 from "../../src/lista_01/Q6";

let A;
let sequencia;

beforeEach(() => {
    A =  new Q6;
    sequencia = "";
});

test("Teste de analiseSequencia", () => {
    expect(A.analiseSequencia(sequencia)).toBe("Não há sequencia");
    // expect(f.dequeue()).toThrowError("Não há sequencia");
});

test("Teste de analiseSequencia ERROR", () => {
    sequencia = "(()]";
    expect(A.analiseSequencia(sequencia)).toBe("Sequencia mal formada");
    sequencia = "{[()])";
    expect(A.analiseSequencia(sequencia)).toBe("Sequencia mal formada");
    sequencia = "{[()]}(";
    expect(A.analiseSequencia(sequencia)).toBe("Sequencia mal formada");
});

test("Teste de analiseSequencia SUCCESS", () => {
    sequencia = "{()[()]}()";
    expect(A.analiseSequencia(sequencia)).toBe("Sequencia bem formada");
    sequencia = "{[()][()]}[()]";
    expect(A.analiseSequencia(sequencia)).toBe("Sequencia bem formada");
});