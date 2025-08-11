import styled from 'styled-components';

export const ContainerIten = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: #151414ff;
  padding: 1rem;
  border-radius: 30px;

  img {
    width: 50px;
    height: 75px;
    border-radius: 10px;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  width: 120px;
  word-break: break-all;
`;

export const Price = styled.p`
  font-size: 12px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 12px;
    cursor: pointer;
    user-select: none;
  }

  p {
    font-size: 12px;
    margin: 0;
  }
`;
