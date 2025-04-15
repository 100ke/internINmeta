import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/신발 상품 목록/i);
  expect(linkElement).toBeInTheDocument();
});

// 담기 버튼으로 인한 장바구니 갯수 변경 테스트
test('상품 담기 버튼 클릭 시 장바구니 담은 갯수가 표시된다', async()=>{
  render(<App/>);

  const button = screen.getAllByText('담기')[0];
  fireEvent.click(button);

  // 비동기 처리 기다리기
  await waitFor(()=>{
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});