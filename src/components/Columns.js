import styled from 'styled-components';

export const Col = styled.div`
  width:100%;
`;

export const HalfCol = styled.div`
  width:49%;
  @media only screen and (max-width:600px) {
    ${(props) => (props.mobileFullWidth ? 'width: 100%' : '')};
    margin-bottom:15px;
    order: ${(props) => (props.mobileOrder ? props.mobileOrder : 'initial')};
  }
`;

export const QuarterCol = styled.div`
  width:24%;
  @media only screen and (max-width:600px) {
    ${(props) => (props.mobileFullWidth ? 'width: 100%' : '')};
    margin-bottom:15px;
    order: ${(props) => (props.mobileOrder ? props.mobileOrder : 'initial')};
  }
`;

export const VertCol = styled.div`
  height: 100%;
  @media only screen and (max-width:600px) { 
    height:initial;
  }
`;

export const VertHalfCol = styled.div`
  height:48%;
  @media only screen and (max-width:600px) {
    order: ${(props) => (props.mobileOrder ? props.mobileOrder : 'initial')}
    margin-bottom:15px;
  }
`;

export const VertOneThirdCol = styled.div`
  height:31%;
  @media only screen and (max-width:600px) { 
    height:initial;
    width:49%;
  }
`;

export const VertTwoThirdsCol = styled.div`
  height:64%;
  @media only screen and (max-width:600px) { 
    height:initial;
    width:49%;
  }
`;