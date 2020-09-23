import ListaLigada from "../src/ListaLigada";

let l;

beforeEach(() =>{
    l = new ListaLigada;
});

test("Teste do constructor", () => {
    expect(l.isEmpty()).toBe(true);
});

test("Adicionar em lugares variados", () => {
    l.add(1);
    l.add(2);
    l.append(3);
    l.append(4);
    expect(l.toString()).toBe("2->1->3->4");
});

test("Testando o clear", () => {
    l.add(1);
    l.append(3);
    expect(l.isEmpty()).toBe(false);
    l.clear();
    expect(l.isEmpty()).toBe(true);
});