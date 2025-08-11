import { LinkStyle, Card, ImgWrapper, StyledImg, Cicle, Title, Price } from './style';

const HqCard = ({ hq }) => (
  <LinkStyle to={`/hq/${hq.id}`}>
    <Card>
      <ImgWrapper>
        <StyledImg src={`${hq.thumbnail.path}.jpg`} alt={hq.title} />
      </ImgWrapper>
      <Title>{hq.title}</Title>
      <Price>R$: {hq.price}</Price>
      {hq.isRare && <Cicle />}
    </Card>
  </LinkStyle>
);

export default HqCard;
