import ListaSimplesmenteLigadaCircular from "../src/ListaSimplesmenteLigadaCircular";

let l;

beforeEach(() =>{
    l = new ListaSimplesmenteLigadaCircular;
});

test("Teste do constructor", () => {
    expect(l.isEmpty()).toBe(true);
});

test("Teste do add, clear, search, length e append", () => {
    expect(l.length()).toBe(0);
    l.add(20);
    l.add(30);
    l.add(50);
    l.add(10);
    l.add(40);
    expect(l.search(15)).toBe(false);
    expect(l.search(30)).toBe(true);
    expect(l.length()).toBe(5);
    expect(l.isEmpty()).toBe(false);
    l.clear();
    expect(l.length()).toBe(0);
    expect(l.isEmpty()).toBe(true);
    expect(l.search(25)).toBe(false);
    l.append(10);
    l.append(5);
    l.append(30);
    expect(l.length()).toBe(3);
    expect(l.search(15)).toBe(false);
    expect(l.search(30)).toBe(true);
});

test("Teste do removeFrist, removeLast, last, frist", () => {
    expect(l.frist()).toEqual("Lista vazia");
    expect(l.last()).toEqual("Lista vazia");
    l.append(20);
    l.append(30);
    l.append(50);
    expect(l.length()).toBe(3);
    expect(l.frist()).toEqual(20);
    expect(l.last()).toEqual(50);
    l.clear();

    expect(l.removeFrist()).toEqual("Lista vazia");
    l.append(50);
    expect(l.length()).toBe(1);
    expect(l.removeFrist()).toEqual(50);
    expect(l.isEmpty()).toBe(true);    
    l.append(20);
    l.append(30);
    expect(l.length()).toBe(2);
    expect(l.removeFrist()).toEqual(20);
    expect(l.length()).toBe(1);
    l.clear();
    l.add(20);
    l.add(30);
    l.add(50);
    l.add(10);
    l.add(40);
    expect(l.length()).toBe(5);
    expect(l.removeFrist()).toEqual(40);
    expect(l.length()).toBe(4);
    l.clear();

    expect(l.isEmpty()).toBe(true);
    expect(l.removeLast()).toEqual("Lista vazia");
    l.append(50);
    expect(l.length()).toBe(1);
    expect(l.removeLast()).toEqual(50);
    l.clear();
    expect(l.isEmpty()).toBe(true);
    l.append(20);
    l.append(30);
    l.append(40);
    l.append(50);
    l.append(60);
    expect(l.length()).toBe(5);
    expect(l.removeLast()).toEqual(60);
    expect(l.last()).toEqual(50);
    expect(l.length()).toBe(4);
});

test("Teste do toString", () => {
    expect(l.toString()).toBe("Lista vazia");
    l.append(20);
    l.append(30);
    l.append(40);
    l.append(50);
    l.append(60);
    expect(l.toString()).toBe("20-30-40-50-60");
});