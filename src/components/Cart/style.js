import styled from 'styled-components';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-300px')};
  width: 300px;
  height: 100vh;
  background: #20232a;
  color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.3);
  transition: right 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background: #333539ff;
  height: 75%;
  overflow-y: auto;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonApplyCoupon = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background: #3b8c3eff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #48b54dff;
  }

  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  margin-top: 10px;
`;

export const CloseIcon = styled.svg`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Title = styled.h2`
  margin: 10px;
  font-weight: 200;
  margin-top: 30px;
`;

export const Price = styled.h3`
  font-weight: 200;
  margin: 10px;
`;

export const CouponInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  border: none;
  border-radius: 4px;
`;
