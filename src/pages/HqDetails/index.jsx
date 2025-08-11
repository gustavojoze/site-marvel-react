import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/cartSlice';
import { getComicById } from '../../services/apiMarvel';
import Loading from '../../components/Loading';
import { DivContainer, Button, Title,Image, Description} from './style';

const HqDetails = () => {
  const [hq, setHq] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getComicById(id).then(comic => {
      setHq(comic);
      if (comic.isRare) {
        console.log(comic.title);
      }
    });
  }, [id]);

  if (!hq) {
    return <Loading />;
  }

  return (
    <DivContainer>
      <Title>{hq.title}</Title>
      <Image
        src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
        alt={hq.title}
        width="300px"
        height="400px"
      />
      <Description>{hq.description || 'Descrição não disponível'}</Description>
      <p>R$: {hq.price}</p>
      <Button onClick={() => dispatch(addProductToCart(hq))}>Comprar</Button>
    </DivContainer>
  );
};

export default HqDetails;
