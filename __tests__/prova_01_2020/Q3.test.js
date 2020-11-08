import Q3 from "../../src/prova_01_2020/Q3";

let q;

beforeEach(() => {
    q = new Q3;
});

test("testes", () => {
     q.push(7);
     q.push(6) 
     q.push(8) 
     q.push(20)
     q.push(1)
     expect(q.print()).toEqual("[7] [6] [8] [20]");
     q.pop()
     q.pop()
     q.push(1)
     q.push(6)
     q.push(8)
     expect(q.print()).toEqual("[7] [6] [1] [8]");
     q.push(10)
     q.pop()
     q.pop()
     q.push(10)
     q.pop()
     q.pop()
     q.push(6)
     expect(q.print()).toEqual("[7] [6]");
     q.push(7)
     q.pop()
     q.push(8)
     q.pop()
     q.pop()
     q.push(7)
     q.pop()
     q.pop()
     q.push(8)
     q.push(6)
     q.push(7)
     expect(q.print()).toEqual("[8] [6] [7]");
     expect(q.isEmpty()).toBe(false);
});