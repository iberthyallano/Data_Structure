import Q2 from "../../src/prova_01_2018/Q2";

let q;

beforeEach( () => {
    q = new Q2;
});

test("Verificar se está cheio ou vazio", () => {
    expect(q.aguardo()).toBe(true);
    expect(q.carregamentoAtingido()).toBe(false);
});

test("inserindo um caminhão", () => {
    q.chegada("A");
    expect(q.aguardo()).toBe(false);
});

test("removendo um caminhão", () => {
    q.chegada("B");
    q.chegada("C");
    expect(q.aguardo()).toBe(false);
    q.saida();
    q.saida();
    expect(q.aguardo()).toBe(true);
});

test("Limite atingido", () => {
    q.chegada("A");
    q.chegada("B");
    q.chegada("C");
    q.chegada("D");
    q.chegada("E");
    q.chegada("F");
    q.chegada("G");
    q.chegada("H");
    q.chegada("I");
    q.chegada("J");
    expect(q.carregamentoAtingido()).toBe(true);
    q.saida();
    expect(q.carregamentoAtingido()).toBe(false);
});

test("Listando", () => {
    q.chegada("A");
    q.chegada("B");
    q.chegada("C");
    q.chegada("D");
    expect(q.listagem()).toBe("[A] [B] [C] [D]");
});