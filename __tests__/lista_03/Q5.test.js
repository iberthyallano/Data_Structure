import ListaSimplesmenteLigada from "../../src/ListaSimplesmenteLigada";
import Q5 from "../../src/lista_03/Q5";


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
    l = Q5(l);
    console.log(l.toString());
});