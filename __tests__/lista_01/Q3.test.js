import Q3 from "../../src/lista_01/Q3";

let q;

beforeEach(() => {
    q = new Q3(5);
});

test("Teste Geral", () => {
    expect(q.isEmptyA()).toBe(true);
    expect(q.isEmptyB()).toBe(true);
    q.pushA("1");
    q.pushA("2");
    q.pushA("3");
    q.pushB("4");
    q.pushB("5");
    expect(q.isFull()).toBe(true);
    q.clear();
    expect(q.isFull()).toBe(false);
    expect(q.isEmptyA()).toBe(true);
    expect(q.isEmptyB()).toBe(true);
});