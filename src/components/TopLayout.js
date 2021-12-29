import React from "react";
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

export default TopLayout;
