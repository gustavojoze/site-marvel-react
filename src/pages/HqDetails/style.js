import styled from 'styled-components';

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;
export const Title = styled.h1`
    margin-bottom: 20px;
`
export const Image = styled.img`
    margin-bottom: 20px;
`
export const Description = styled.p`
    text-align: center;
    margin-bottom: 10px;
`

export const Button = styled.button`
  background-color: #212324ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3b4044ff;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

