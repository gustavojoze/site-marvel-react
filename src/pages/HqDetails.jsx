import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getComicById } from '../services/apiMarvel';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const HqDetails = () => {
  const [hq, setHq] = useState(null);

  useEffect(() => {
    getComicById(5813).then(comic => {
      setHq(comic.data.results[0]);
      console.log(comic.data.results[0]);
    });
  }, []);

  if (!hq) {
    return <div>Carregando...</div>;
  }

  return (
    <DivContainer>
      <h1>{hq.title}</h1>
      <img
        src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
        alt={hq.title}
        width="300px"
        height="400px"
      />
      <p>{hq.description || 'Descrição não disponível'}</p>
    </DivContainer>
  );
};

export default HqDetails;
