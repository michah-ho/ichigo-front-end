import React from "react";
import PropTypes from 'prop-types';
import Row from "./Row";
import { HalfCol, VertHalfCol } from "./Columns";
import ContentBox from "./ContentBox";

function TopLayout({ colorIndexArr, handleClick }) {
  return (
    <Row marginBottom="30px">
      <HalfCol mobileFullWidth>
        <ContentBox index={colorIndexArr[0]} handleClick={handleClick} height="400px">
          1
        </ContentBox>
      </HalfCol>
      <HalfCol mobileFullWidth>
        <Row flexFlow="column">
          <VertHalfCol mobileOrder={2}>
            <ContentBox index={colorIndexArr[1]} handleClick={handleClick}>2</ContentBox>
          </VertHalfCol>
          <VertHalfCol mobileOrder={1}>
            <Row>
              <HalfCol>
                <ContentBox index={colorIndexArr[2]} handleClick={handleClick}>3</ContentBox>
              </HalfCol>
              <HalfCol>
                <ContentBox index={colorIndexArr[3]} handleClick={handleClick}>4</ContentBox>
              </HalfCol>
            </Row>
          </VertHalfCol>
        </Row>
      </HalfCol>
    </Row>
  );
};

TopLayout.propTypes = {
  colorIndexArr: PropTypes.array,
  handleClick: PropTypes.func
}

TopLayout.defaultProps = {
  colorIndexArr: [1,2,3,4],
}

export default TopLayout;
