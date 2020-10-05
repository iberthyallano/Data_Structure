import FilaDePrioridade from "../src/FilaDePrioridade";

let p;

beforeEach(() => {
	p = new FilaDePrioridade();
});

test("instanciação", () => {
    expect(p.length()).toBe(0);
    expect(p.isEmpty()).toBe(true);
});

test("enqueue", () => {
	p.enqueue('A', 35);
	expect(p.asArray()).toStrictEqual([35]);
	p.enqueue('B', 33);
	expect(p.asArray()).toStrictEqual([35, 33]);
	p.enqueue('C', 42);
	expect(p.asArray()).toStrictEqual([42, 33, 35]);
	p.enqueue('D', 10);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10]);
	p.enqueue('E', 14);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10, 14]);
	p.enqueue('F', 19);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10, 14, 19]);
	p.enqueue('G', 27);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10, 14, 19, 27]);
	p.enqueue('H', 44);
	expect(p.asArray()).toStrictEqual([44, 42, 35, 33, 14, 19, 27, 10]);
	p.enqueue('I', 26);
	expect(p.asArray()).toStrictEqual([44, 42, 35, 33, 14, 19, 27, 10, 26]);
	p.enqueue('J', 31);
	expect(p.asArray()).toStrictEqual([44, 42, 35, 33, 31, 19, 27, 10, 26, 14]);

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
	expect(p.dequeue()).toBe(44);
	expect(p.dequeue()).toBe(42);
	expect(p.dequeue()).toBe(35);
	expect(p.dequeue()).toBe(33);
	expect(p.dequeue()).toBe(31);
	expect(p.dequeue()).toBe(27);
	expect(p.dequeue()).toBe(26);
	expect(p.dequeue()).toBe(19);
	expect(p.dequeue()).toBe(14);
	expect(p.dequeue()).toBe(10);
});

test("toString", () => {
	p.enqueue('A', 35);
	expect(p.asArray()).toStrictEqual([35]);
	p.enqueue('B', 33);
	expect(p.asArray()).toStrictEqual([35, 33]);
	p.enqueue('C', 42);
	expect(p.asArray()).toStrictEqual([42, 33, 35]);
	p.enqueue('D', 10);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10]);
	expect(p.toString()).toBe("C B A D");
});

test("testes variados", () => {
	p.enqueue('A', 35);
	p.enqueue('B', 33);
	p.enqueue('C', 42);
    p.enqueue('D', 10);
    expect(p.length()).toBe(4);
    expect(p.isEmpty()).toBe(false);
	expect(p.asArray()).toStrictEqual([42, 33, 35, 10]);
    expect(p.toString()).toBe("C B A D");
    p.clear();
    expect(p.length()).toBe(0);
    // expect(f.dequeue()).toThrowError("Fila vazia");
    expect(p.dequeue()).toBe("Fila vazia");
    p.enqueue('A', 35);
	p.enqueue('B', 33);
    p.enqueue('C', 42);
    expect(p.front()).toEqual({"data": "C", "priority": 42});
    expect(p.front().data).toBe("C");
    expect(p.front().priority).toBe(42);
    p.dequeue();
    expect(p.asArray()).toStrictEqual([35, 33]);
    expect(p.toString()).toBe("A B");
    expect(p.length()).toBe(2);
    expect(p.front()).toEqual({"data": "A", "priority": 35});
    expect(p.front().data).toBe("A");
    expect(p.front().priority).toBe(35);
});
