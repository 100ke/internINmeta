import CartPayButton from './CartPayButton';

export default {
  title: 'Cart/CartPayButton',
  component: CartPayButton,
};

export const Default = () => <CartPayButton onClick={() => alert('결제 클릭')} />;