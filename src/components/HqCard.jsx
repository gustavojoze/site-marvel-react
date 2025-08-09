import styled from 'styled-components';

const Card = styled.div`
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
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    &:hover img {
    transform: scale(1.1);
  }
  }

 
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Cicle = styled.div`
  width: 20px;  
  height: 20px;
  border-radius: 50%;
  background-color: gold;
  position: absolute;
  top: 5px;  
  right: 5px;
`;

const Title = styled.h4`
  color: #ece4e4ff;
  font-weight: 500;
  font-family: 'Arial', sans-serif;
  margin-top: 10px;
`;

const HqCard = () => (
  <Card >
    <ImgWrapper>
      <StyledImg src="/logo_marvel.png" alt=" " />
    </ImgWrapper>
    <Title>dfsf</Title>
   <Cicle />
  </Card>
);

export default HqCard;
