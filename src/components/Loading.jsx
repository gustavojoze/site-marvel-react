import styled from 'styled-components';

const DivContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 100vh;
`;

const GifIcon = () =>{
    return (
        <DivContainer style={{justifyContent:"center"}}><img src='/deadPool.gif' alt="" />...Carregando</DivContainer>
    );
}

export default GifIcon;