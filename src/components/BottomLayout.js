import React from 'react';
import PropTypes from 'prop-types';
import { VertOneThirdCol, VertTwoThirdsCol, HalfCol, QuarterCol} from './Columns';
import ContentBox from './ContentBox';
import Row from './Row';

function BottomLayout({ colorIndexArr, handleClick }) {
  return (
    <Row>
      <QuarterCol mobileOrder={2}>
        <Row flexFlow="column">
          <VertOneThirdCol>
            <ContentBox index={colorIndexArr[0]} handleClick={handleClick}>5</ContentBox>
          </VertOneThirdCol>
          <VertTwoThirdsCol>
            <ContentBox index={colorIndexArr[1]} handleClick={handleClick}>6</ContentBox>
          </VertTwoThirdsCol>
        </Row>
      </QuarterCol>
      <HalfCol mobileFullWidth mobileOrder={1}>
        <ContentBox index={colorIndexArr[2]} handleClick={handleClick} height="350px">7</ContentBox>
      </HalfCol>
      <QuarterCol mobileOrder={3}>
        <Row flexFlow="column">
          <VertTwoThirdsCol>
            <ContentBox index={colorIndexArr[3]} handleClick={handleClick}>8</ContentBox>
          </VertTwoThirdsCol>
          <VertOneThirdCol>
            <ContentBox index={colorIndexArr[4]} handleClick={handleClick}>9</ContentBox>
          </VertOneThirdCol>
        </Row>
      </QuarterCol>
    </Row>
  )
}

BottomLayout.propTypes = {
  colorIndexArr: PropTypes.array,
  handleClick: PropTypes.func
}

BottomLayout.defaultProps = {
  colorIndexArr: [5,6,7,8,9],
}

export default BottomLayout;