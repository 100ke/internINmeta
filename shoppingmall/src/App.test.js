import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

// 모든 테스트 끝난 뒤 DOM 초기화
afterEach(()=>{
  cleanup();
});

// 공통 렌더링을 beforeEach에서 처리
beforeEach(()=>{
  render(<App />);
});

test('상품 목록 제목이 나타난다', () => {
  // const linkElement = screen.getByText(/신발 상품 목록/i);
  // expect(linkElement).toBeInTheDocument();
  expect(screen.getByText(/신발 상품 목록/i)).toBeInTheDocument();
});

// 담기 버튼으로 인한 장바구니 갯수 변경 테스트
test('담기 버튼 클릭 시 장바구니 담은 갯수가 표시된다', async()=>{
  const button = screen.getAllByRole('button', {name:'담기'})[0];
  fireEvent.click(button);
  fireEvent.click(button); // 2번 클릭

  // 비동기 처리 기다리기
  await waitFor(()=>{
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});