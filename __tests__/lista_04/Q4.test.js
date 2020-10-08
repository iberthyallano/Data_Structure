import Conjunto from "../../src/Conjunto";
import Q4 from "../../src/lista_04/Q4";

let conjVit;
let seqJog = [];

beforeEach(() => {
    conjVit = new Conjunto;
    conjVit.add(2);
    conjVit.add(21);
    conjVit.add(34);
    conjVit.add(9);
    conjVit.add(10);
    conjVit.add(55);

    seqJog = [["Julia", 2, 34, 48, 5, 60, 57], 
              ["Francisca", 2, 34, 48, 5, 43, 21], 
              ["Roberto", 34, 48, 5, 43, 17, 2], 
              ["Taniro", 2, 21, 34, 9, 10], //esse é o vencedor da quina
              ["Iberthy", 2, 21, 34, 9, 10, 55], //esse é o vencedor da sena 
              ["Renata", 21, 34, 9, 10, 55], //esse é o vencedor da quina
              ["Paloma", 21, 34, 5, 43, 17], 
              ["Algusto", 2, 5, 4, 33, 45, 60], 
              ["Felipe", 3, 5, 25, 55, 35, 4], 
              ["Leticia", 2, 21, 34, 9, 10, 55]] //esse é o vencedor da sena 
});

test("Total de vencedores", () => {
    expect(Q4(conjVit, seqJog)).toBe("total de quinas: 2, total de senas: 2.");
});