import Q1 from "../../src/lista_04/Q1";

let p;

beforeEach(() => {
	p = new Q1;
});

test("instanciação", () => {
    expect(p.length()).toBe(0);
    expect(p.isEmpty()).toBe(true);
});

test("enqueue", () => {
	p.enqueue('A', 35);
	expect(p.asArray()).toStrictEqual([35]);
	p.enqueue('B', 33);
	expect(p.asArray()).toStrictEqual([33, 35]);
	p.enqueue('C', 42);
	expect(p.asArray()).toStrictEqual([33, 35, 42]);
	p.enqueue('D', 10);
	expect(p.asArray()).toStrictEqual([10, 33, 42, 35]);
	p.enqueue('E', 14);
	expect(p.asArray()).toStrictEqual([10, 14, 42, 35, 33]);
	p.enqueue('F', 19);
	expect(p.asArray()).toStrictEqual([10, 14, 19, 35, 33, 42]);
	p.enqueue('G', 27);
	expect(p.asArray()).toStrictEqual([10, 14, 19, 35, 33, 42, 27]);
	p.enqueue('H', 44);
	expect(p.asArray()).toStrictEqual([10, 14, 19, 35,33, 42, 27, 44]);
	p.enqueue('I', 26);
	expect(p.asArray()).toStrictEqual([10, 14, 19, 26, 33, 42, 27, 44, 35]);
	p.enqueue('J', 31);
	expect(p.asArray()).toStrictEqual([10, 14, 19, 26, 31, 42, 27, 44, 35, 33]);

});

test("dequeue", () => {
	p.enqueue('A', 35);
	p.enqueue('B', 33);
	p.enqueue('C', 42);
	p.enqueue('D', 10);
	p.enqueue('E', 14);
	p.enqueue('F', 19);
	p.enqueue('G', 27);
	p.enqueue('H', 44);
	p.enqueue('I', 26);
	p.enqueue('J', 31);
    expect(p.dequeue()).toBe(10);
    expect(p.dequeue()).toBe(14);
    expect(p.dequeue()).toBe(19);
    expect(p.dequeue()).toBe(26);
	expect(p.dequeue()).toBe(27);
	expect(p.dequeue()).toBe(31);
	expect(p.dequeue()).toBe(33);
	expect(p.dequeue()).toBe(35);
    expect(p.dequeue()).toBe(42);
	expect(p.dequeue()).toBe(44);
});

test("toString", () => {
	p.enqueue('A', 35);
	expect(p.asArray()).toStrictEqual([35]);
	p.enqueue('B', 33);
	expect(p.asArray()).toStrictEqual([33, 35]);
	p.enqueue('C', 42);
	expect(p.asArray()).toStrictEqual([33, 35, 42]);
	p.enqueue('D', 10);
	expect(p.asArray()).toStrictEqual([10, 33, 42, 35]);
	expect(p.toString()).toBe("D B C A");
});

test("testes variados", () => {
	p.enqueue('A', 35);
	p.enqueue('B', 33);
	p.enqueue('C', 42);
    p.enqueue('D', 10);
    expect(p.length()).toBe(4);
    expect(p.isEmpty()).toBe(false);
	expect(p.asArray()).toStrictEqual([10, 33, 42, 35]);
	expect(p.toString()).toBe("D B C A");
    p.clear();
    expect(p.length()).toBe(0);
    // expect(f.dequeue()).toThrowError("Fila vazia");
    expect(p.dequeue()).toBe("Fila vazia");
    p.enqueue('A', 35);
	p.enqueue('B', 33);
    p.enqueue('C', 42);
    expect(p.front()).toEqual({"data": "B", "priority": 33});
    expect(p.front().data).toBe("B");
    expect(p.front().priority).toBe(33);
    p.dequeue();
    expect(p.asArray()).toStrictEqual([35, 42]);
    expect(p.toString()).toBe("A C");
    expect(p.length()).toBe(2);
    expect(p.front()).toEqual({"data": "A", "priority": 35});
    expect(p.front().data).toBe("A");
    expect(p.front().priority).toBe(35);
});