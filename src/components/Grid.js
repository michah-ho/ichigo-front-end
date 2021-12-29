import React, { useState } from 'react';
import styled from 'styled-components';
import TopLayout from './TopLayout';
import BottomLayout from './BottomLayout';
import { shuffleArray } from '../utils/arrayHelpers';

const Container = styled.div`
  margin: 30px;
`;

function Grid() {
  const [colorIndexArr, setColorIndex] = useState([1,2,3,4,5,6,7,8,9]); //default state;

  const handleClick = () => {
    const newArr = shuffleArray(colorIndexArr);
    setColorIndex(newArr);
  }

  return (
    <Container>
      <TopLayout colorIndexArr={colorIndexArr.slice(0, 4)} handleClick={handleClick}/>
      <BottomLayout colorIndexArr={colorIndexArr.slice(4)} handleClick={handleClick}/>
    </Container>
  );
}

export default Grid;