import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #20232a;
  color: white;
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 40px;
`;

export const ContainerCartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const CartIcon = styled.svg`
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: relative;
  color: white;
`;

export const IconCount = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 0.3rem 0.4rem;
  font-size: 0.5rem;
`;
