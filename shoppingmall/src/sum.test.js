const sum = require('./sum');

test('adds 1+2 to equal 3', ()=>{
    expect(sum(1,2)).toBe(3);
});

// test("테스트에 대한 설명", ()=>{
//     expect("검증 대상").to테스트매쳐("기대 결과");
// });