import Q1 from "../../src/lista_03/Q1";

let p;

beforeEach(() => {
    p = new Q1;
});

test("Teste do constructor", () => {
    expect(p.size()).toBe(0);
});

test("Teste do Top", () => {
    p.push("A");
    p.push("B");
    p.push("C");
    p.pop();
    expect(p.size()).toBe(2);
    expect(p.top()).toBe("B");
    p.pop();
    expect(p.size()).toBe(1);
    expect(p.top()).toBe("A");
});

test("Teste do Clear", () => {
    p.push("A");
    p.push("B");
    p.push("C");
    p.clear();
    expect(p.size()).toBe(0);
});

test("Teste do isEmpty", () => {
    p.push("A");
    p.push("B");
    expect(p.isEmpty()).toBe(false);
    p.push("C");
    p.clear();
    expect(p.isEmpty()).toBe(true);
});

test("Teste de underflow", () => {
    expect(p.isEmpty()).toBe(true);
    // expect(p.pop()).toThrowError("Stack underflow");
    expect(p.pop()).toBe("Stack underflow");
});

test("Teste do toString", () => {
    p.push("A");
    p.push("B");
    expect(p.toString()).toBe("A->B");
});

