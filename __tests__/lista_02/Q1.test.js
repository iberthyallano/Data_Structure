import Q1 from "../../src/lista_02/Q1";

let p;

beforeEach(() => {
    p = new Q1;
});

test("Teste do constructor", () => {
    expect(p.size()).toBe(0);
    expect(p.isEmpty()).toBe(true);
    expect(p.isFull()).toBe(false);
});

test("Teste do isFull", () => {
    expect(p.isFull()).toBe(false);
    p.push("A");
    p.push("B");
    expect(p.size()).toBe(2);
    expect(p.top()).toBe("B");
    p.push("C");
    p.push("D");
    p.push("E");
    p.push("F");
    p.push("G");
    p.push("H");
    p.push("I");
    expect(p.size()).toBe(9);
    expect(p.top()).toBe("I");
    p.push("J");
    expect(p.isFull()).toBe(true);
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

test("Teste de overflow", () => {
    expect(p.isEmpty()).toBe(true);
    p.push("A");
    p.push("B");
    p.push("C");
    p.push("D");
    p.push("E");
    p.push("F");
    p.push("G");
    p.push("H");
    p.push("I");
    p.push("J");
    // expect(p.push("Y")).toThrowError("Stack overflow");
    expect(p.push("Y")).toBe("Stack overflow");
});

test("Teste do toString", () => {
    p.push("A");
    p.push("B");
    expect(p.toString()).toBe("[B] [A]");
});