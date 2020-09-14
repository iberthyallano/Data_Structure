import Q4 from "../../src/lista_01/Q4";
import Pilha from "../../src/Pilha";

let A;
let p;

beforeEach(() =>{
    A = new Q4;
    p = new Pilha;
});

test("teste do inverteTopoBase", () => {
    p.push("A");
    p.push("B");
    p.push("C");
    p.push("D");
    expect(A.inverteTopoBase(p)).toBe("[D] [B] [C] [A]");
});