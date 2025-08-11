import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../redux/cartSlice';
import { ContainerIten, Title, Price, QuantityWrapper } from './style';

const ItenCart = ({ hq }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(hq.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(hq.id));
  };

  return (
    <ContainerIten>
      <img src={`${hq.thumbnail.path}.jpg`} alt={hq.title} />
      <Title>{hq.title}</Title>
      <Price>R$: {hq.price}</Price>
      <QuantityWrapper>
        <span onClick={handleIncrease}>+</span>
        <p>{hq.quantity}</p>
        <span onClick={handleDecrease}>-</span>
      </QuantityWrapper>
    </ContainerIten>
  );
};

export default ItenCart;
