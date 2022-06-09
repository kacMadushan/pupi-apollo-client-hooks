import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/themeSettings';
import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = () => {
  return (
    <Wrapper>
      <ClipLoader
        sizeUint={"px"}
        size={80}
        color={COLORS.secondary}
        loading={true}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;


export default Spinner;