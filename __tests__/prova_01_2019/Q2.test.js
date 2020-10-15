import Q2 from "../../src/prova_01_2019/Q2";

let q;

beforeEach(() => {
    q = new Q2(5);
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