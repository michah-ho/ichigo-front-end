import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ColorBox = styled.div`
  display:flex;
  flex-flow: column;
  text-align:center;
  justify-content:center;
  background-color: var(--bg-color-${(props) => (props.index ? props.index : '1')});
  color:#fff;
  height:${(props) => (props.height ? props.height : '100%')};
  font-size:2rem;
  font-weight:bold;

  @media only screen and (max-width:600px) {
    height:100px;
  }
`;

function ContentBox(props) {
  const { index, height, handleClick } = props;
  return <ColorBox onClick={handleClick} index={index} height={height}> {props.children} </ColorBox>;
}

ContentBox.propTypes = {
  index: PropTypes.number,
  height: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node,
}

export default ContentBox;