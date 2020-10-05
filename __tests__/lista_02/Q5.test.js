import Q5 from "../../src/lista_02/Q5";

let q;

beforeEach(() => {
    q = new Q5(5);
});

test("inserindo e removendo no inicio", () => {
    q.inserirInicio(10);
    q.inserirInicio(15);
    expect(q.removeInicio()).toBe(15);
});

test("inserindo e removendo no fim", () => {
    q.inserirFim(10);
    q.inserirFim(15);
    expect(q.removeFim()).toBe(15);
});