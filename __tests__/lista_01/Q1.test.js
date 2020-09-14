import Q1 from "../../src/lista_01/Q1";

let f;

beforeEach(() => {
    f = new Q1(10, 2);
});

test("Teste do toString", () => {
    expect(f.toString()).toBe("10/2");
});

test("Teste da Multipicação", () => {
    let fracao = new Q1(2, 2);
    let result = f.multiplicacao(fracao);
    expect(result.toString()).toBe("20/4");
});

test("Teste da divisão", () => {
    let fracao = new Q1(5, 3);
    let result = f.divisao(fracao);
    expect(result.toString()).toBe("30/10");
});