import ListaSimplesmenteLigada from "../../src/ListaSimplesmenteLigada";
import Q4 from "../../src/lista_03/Q4";


let l;

beforeEach(() =>{
    l = new ListaSimplesmenteLigada; 
    l.add(1);
	l.add(2);
	l.add(3);
    l.add(4);
});

test("Inverte", () => {
    expect(l.length()).toBe(4);
    expect(l.toString()).toBe("4->3->2->1");
    l = Q4(l);
    expect(l.toString()).toBe("1->2->3->4");
});