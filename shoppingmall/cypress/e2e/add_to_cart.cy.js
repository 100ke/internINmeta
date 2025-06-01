describe('사용자가 상품을 장바구니에 담는 전체 프로세스', () => {
  it('사용자가 상품을 장바구니에 담고 장바구니 페이지로 이동할 수 있다.', () => {
    // 1. 메인 페이지 접속
    cy.visit('https://100ke.github.io/internINmeta');

    // 2. 상품 목록이 로드 되었는지 확인
    cy.get('.card', { timeout: 10000 }).should('have.length.at.least',1);

    // 3. 첫 번째 상품을 "담기"버튼 클릭
    cy.get('.card').first().within(()=>{
      cy.get('button').contains('담기').click();
    });

    // 4. 헤더에 장바구니 아이콘 클릭하여 장바구니 페이지로 이동
    cy.get('button.cart').click();

    // 5. 장바구니 페이지에서 상품이 담겨 있는지 확인
    cy.url().should('include', '/internINmeta/cart');
    cy.get('.cart-item', { timeout: 5000 }).should('have.length.at.least', 1);
  })
})