import styled from 'styled-components';

const ContainerIten = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: #151414ff;
  padding: 1rem;
  img {
    width: 50px;
    height: 75px;
  }
  border-radius: 30px;
`;

const ItenCart = () => {
    return (
      <ContainerIten>
          <img src="" alt="" />
          <p style={{fontSize:"12px", width:"120px", wordBreak:"break-all"}}>fdsafsafdsafdsafsdafdsafsdafdsafdsafdsafsadfsafsafsafdsa</p>
          <p style={{fontSize:"12px"}}>R$423</p>
          <div>
          <p style={{fontSize:"12px"}}>+</p>
          <p style={{fontSize:"12px"}}>9</p>
          <p style={{fontSize:"12px"}}>-</p>
        </div>
    </ContainerIten>
    );
}

export default ItenCart;