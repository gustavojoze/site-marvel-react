import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart, applyCoupon } from '../../redux/cartSlice';
import ItenCart from '../ItenCart';
import { selectProductsTotalPrice } from '../../redux/cart.select';
import { 
  Aside, ContainerItens, ButtonApplyCoupon, CloseIcon, 
  Title, Price, CouponInput 
} from './style';

const Cart = () => {
  const { isOpen, products } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const handleApplyCoupon = () => {
    if (input === 'DESCONTO10' || input === 'RARIDADE15') {
      dispatch(applyCoupon(input));
    } else {
      alert("Cupom inválido");
    }
  };

  return (
    <Aside open={isOpen}>
      <CloseIcon
        onClick={() => dispatch(closeCart())}
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width={27}
        height={25}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"></path>
      </CloseIcon>

      <Title>Carrinho</Title>

      <ContainerItens>
        {products.map(hq => <ItenCart key={hq.id} hq={hq} />)}
      </ContainerItens>

      <Price>R$: {productsTotalPrice.toFixed(2)}</Price>

      <CouponInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite o cupom"
      />
      <ButtonApplyCoupon onClick={handleApplyCoupon}>Aplicar</ButtonApplyCoupon>
    </Aside>
  );
};

export default Cart;
