import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada";

let l;

beforeEach(() => {
	l = new ListaDuplamenteLigada();
});

test("Instanciacao", () => {
	expect(l.length()).toBe(0);
	expect(l.isEmpty()).toBe(true);
});

test("Adicionar em lugares variados", () => {
	l.add(1);
	l.add(2);
	l.add(3);
	l.add(4);
	expect(l.length()).toBe(4);
	expect(l.toString()).toBe("4->3->2->1");
	l.append(5);
	expect(l.toString()).toBe("4->3->2->1->5");

	l.removeFrist();
	expect(l.toString()).toBe("3->2->1->5");
	l.removeLast();
	expect(l.toString()).toBe("3->2->1");
	expect(l.length()).toBe(3);

	l.addAt(6, 1);
	expect(l.toString()).toBe("3->6->2->1");
	expect(l.search(5)).toBe(false);
	expect(l.search(6)).toBe(true);
	l.addAt(7, 3);
	expect(l.toString()).toBe("3->6->2->7->1");
	l.addAt(2, 0);
	expect(l.toString()).toBe("2->3->6->2->7->1");
	expect(l.frist()).toBe(2);
	expect(l.last()).toBe(1);
	l.clear();
	expect(l.length()).toBe(0);
	expect(l.isEmpty()).toBe(true);
});