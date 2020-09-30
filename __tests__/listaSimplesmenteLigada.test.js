import ListaSimplesmenteLigada from "../src/ListaSimplesmenteLigada";

let l;

beforeEach(() =>{
    l = new ListaSimplesmenteLigada;
});

test("Teste do constructor", () => {
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
});

test("Testando o clear", () => {
    l.add(1);
    l.append(3);
    expect(l.isEmpty()).toBe(false);
    l.clear();
    expect(l.isEmpty()).toBe(true);
});

test("Adicionar em ordem + teste do Last", () => {
	l.addInOrder(30);
	l.addInOrder(10);
	l.addInOrder(40);
    l.addInOrder(20);
	expect(l.last()).toBe(40);
	expect(l.frist()).toBe(10);
	expect(l.toString()).toBe("10->20->30->40");

});
