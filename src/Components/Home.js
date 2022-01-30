import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';

function Home() {
  return <Container>
     <ImageSlider />
  </Container>
}
export default Home;

const Container = styled.main`
padding:0 calc(3.5vh + 5px);
min-height: calc(100vh - 70px);
overflow: hidden;
position:relative;

&:before{
  background:url("images/home-background.png") center center / cover no-repeat fixed;
  content:"";
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index:-1;
}
`
