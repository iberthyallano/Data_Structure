import Fila from "../../src/Fila";
import Q4 from "../../src/lista_02/Q4";

let F1;
let F2;

beforeEach(() => {
    F1 = new Fila;
    F2 = new Fila;
});

test("auternar fila onde F1.size() === F2.size()", () => {
    F1.enqueue("A");
    F1.enqueue("B");
    F1.enqueue("C");
    F2.enqueue(1);
    F2.enqueue(2);
    F2.enqueue(3);
	expect(Q4(F1, F2)).toBe("[A] [1] [B] [2] [C] [3]");
});

test("auternar fila onde F1.size() > F2.size()", () => {
    F1.enqueue("A");
    F1.enqueue("B");
    F1.enqueue("C");
    F1.enqueue("D");
    F2.enqueue(1);
    F2.enqueue(2);
    F2.enqueue(3);
    F1.enqueue("E");
    F1.enqueue("F");
	expect(Q4(F1, F2)).toBe("[A] [1] [B] [2] [C] [3] [D] [E] [F]");
});

test("auternar fila onde F1.size() < F2.size()", () => {
    F2.enqueue("A");
    F2.enqueue("B");
    F2.enqueue("C");
    F2.enqueue("D");
    F2.enqueue("E");
    F1.enqueue(1);
    F1.enqueue(2);
    F1.enqueue(3);
	expect(Q4(F1, F2)).toBe("[1] [A] [2] [B] [3] [C] [D] [E]");
});