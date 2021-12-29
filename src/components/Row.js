import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
  display:flex;
  flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : 'row')};
  flex-wrap: wrap;
  justify-content: space-between;
  width:100%;
  height: ${(props) => (props.height ? props.height : '100%')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0')};

  @media only screen and (max-width:600px) { 
    margin-bottom:0;
    ${(props) => (props.mobileFlexFlow ? `flex-flow:${props.mobileFlexFlow}` : '')};
  }
`;

Row.propTypes = {
  flexFlow: PropTypes.string,
  height: PropTypes.string,
  marginBottom: PropTypes.string,
  mobileFlexFlow: PropTypes.string,
}

export default Row;