import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333539ff;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  position: relative;
  width: 200px;
  height: 100%;
  transition: transform 0.2s;
  color: #ece4e4ff;

  &:hover img {
    transform: scale(1.1);
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const Cicle = styled.div`
  width: 20px;  
  height: 20px;
  border-radius: 50%;
  background-color: gold;
  position: absolute;
  top: 5px;  
  right: 5px;
`;

export const Title = styled.h4`
  color: #ece4e4ff;
  font-weight: 500;
  font-family: 'Arial', sans-serif;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* quantidade de linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Price = styled.p`
  font-size: 14px;
`;
