import Q9 from "../../src/prova_01/Q9";

let q;

beforeEach(() => {
    q = new Q9;
});

test("testes", () => {
     q.push(7);
     q.push(6) 
     q.push(8) 
     q.push(20)
     q.push(1)
     console.log(q.print()) 
     q.pop()
     q.pop()
     q.push(1)
     q.push(6)
     q.push(8)
     console.log(q.print()) 
     q.push(10)
     q.pop()
     q.pop()
     q.push(10)
     q.pop()
     q.pop()
     q.push(6)
     console.log(q.print()) 
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
     console.log(q.print()) 
     expect(q.isEmpty()).toBe(false);
});