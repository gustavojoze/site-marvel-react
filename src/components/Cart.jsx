import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../redux/cartSlice';

const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-300px')}; /* animação lateral */
  width: 300px;
  height: 100%;
  background: #20232a;
  color: white;
  padding: 1rem;
  box-shadow: -2px 0 5px rgba(0,0,0,0.3);
  transition: right 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
`;

const Cart = ( ) => {
  const {isOpen } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <Aside open={isOpen}>
      <h2>Carrinho</h2>
      <button onClick={ () => dispatch(closeCart())} style={{ marginBottom: '1rem' }}>Fechar</button>
        <div >
          <p>fds</p>
        </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite o cupom"
      />
      <button >Aplicar cupom</button>
      <p>Cupom aplicado:fdsfds</p>
    </Aside>
  );
};

export default Cart;
