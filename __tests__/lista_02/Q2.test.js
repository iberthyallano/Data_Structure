import Q2 from "../../src/lista_02/Q2";

let f;

beforeEach(() => {
    f = new Q2;
});

test("Teste do constructor", () => {
    expect(f.size()).toBe(0);
});

test("Teste do top", () => {
    expect(f.front()).toBe("Fila vazia");
    f.enqueue("A");
    f.enqueue("B");
    expect(f.front()).toBe("A");
    f.dequeue();
    expect(f.front()).toBe("B");
});

test("Teste do isFull", () => {
    expect(f.isFull()).toBe(false);
    f.enqueue("A"); 
    f.enqueue("B");
    f.enqueue("C");
    expect(f.size()).toBe(3);
    expect(f.front()).toBe("A")
    f.enqueue("D");
    f.enqueue("E");
    f.enqueue("F");
    f.enqueue("G");
    f.enqueue("H");
    f.enqueue("I");
    f.enqueue("J");
    expect(f.size()).toBe(10);
    expect(f.isFull()).toBe(true);
});

test("Teste do clear", () => {
    f.enqueue("A"); 
    f.enqueue("B");
    f.enqueue("C");
    expect(f.size()).toBe(3);
    f.clear();
    expect(f.size()).toBe(0);
});

test("Teste do isEmpty", () => {
    expect(f.isEmpty()).toBe(true);
    f.enqueue("A"); 
    f.enqueue("B");
    f.enqueue("C");
    expect(f.size()).toBe(3);
    expect(f.isEmpty()).toBe(false);
    f.clear();
    expect(f.isEmpty()).toBe(true);
});

test("Teste de underflow", () => {
    expect(f.isEmpty()).toBe(true);
    // expect(f.dequeue()).toThrowError("Fila vazia");
    expect(f.dequeue()).toBe("Fila vazia");
});

test("Teste de overflow", () => {
    expect(f.isEmpty()).toBe(true);
    f.enqueue("A");
    f.enqueue("B");
    f.enqueue("C");
    f.enqueue("D");
    f.enqueue("E");
    f.enqueue("F");
    f.enqueue("G");
    f.enqueue("H");
    f.enqueue("I");
    f.enqueue("J");
    // expect(f.enqueue("Y")).toThrowError("Fila cheia");
    expect(f.enqueue("Y")).toBe("Fila cheia");
});

test("Teste do toString", () => {
    f.enqueue("A"); 
    f.enqueue("B");
    f.enqueue("C");
    expect(f.toString()).toBe("[C] [B] [A]");
    f.enqueue("D"); 
    f.enqueue("E");
    f.enqueue("F");
    f.enqueue("G"); 
    f.enqueue("H");
    f.enqueue("I");
    f.enqueue("J"); 
    expect(f.toString()).toBe("[J] [I] [H] [G] [F] [E] [D] [C] [B] [A]");
    f.dequeue();
    expect(f.toString()).toBe("[J] [I] [H] [G] [F] [E] [D] [C] [B]");
});