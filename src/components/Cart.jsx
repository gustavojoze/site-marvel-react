import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../redux/cartSlice';
import ItenCart from './ItenCart';

const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-300px')}; /* animação lateral */
  width: 300px;
  height: 100vh;
  background: #20232a;
  color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.3);
  transition: right 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
  positon: realative;
`;

const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background: #333539ff;
  height: 75%;
  overflow-y: auto;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const Cart = ( ) => {
  const {isOpen } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <Aside open={isOpen}>
      <svg onClick={()=>{dispatch(closeCart())}} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={27} height={25} style={{ cursor: 'pointer', position:"absolute", top:"10px", right:"10px" }}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
      </svg>
      <h2 style={{margin:"10px", fontWeight:"200", marginTop:"30px"}}>Carrinho</h2>
      <ContainerItens>
        <ItenCart />
        <ItenCart />
      </ContainerItens>
      <h3 style={{fontWeight:"200", margin:"10px"}}>Preço total: R$423</h3>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite o cupom"
        style={{marginLeft: '10px' }}
      />
      <button style={{marginLeft: "10px", padding: "5px 10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }} >Aplicar</button>
      <p  style={{marginLeft: '10px'}}>Cupom aplicado:fdsfds</p>
    </Aside>
  );
};

export default Cart;
