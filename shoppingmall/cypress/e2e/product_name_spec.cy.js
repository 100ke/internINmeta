describe('상품 이름 표시 테스트', () => {
  beforeEach(()=>{
    cy.visit('https://100ke.github.io/internINmeta');
  });

  it('상품 목록에 특정 상품명이 포함되어 있어야 한다.', () => {
    cy.contains('런닝화 blue').should('exist');
    cy.contains('High-Neck shoes').should('exist');
    cy.contains('나이키 러닝화 blue').should('exist');
  });

  it('상품 개수가 recoil 상태에 따라 표시되는지 확인', () => {
    cy.contains('현재 8개의 상품이 있습니다.').should('exist');
  });
})