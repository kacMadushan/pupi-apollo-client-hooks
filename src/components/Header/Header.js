import React from 'react';
import styled from 'styled-components';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { PrimaryButton } from '../Buttons/Buttons';
import AppLogo from '../../assets/Logo.png';

const Header = ({ mode, handleChangeTheme }) => {
  const buttonElement = mode
    ? `Dark`
    : `Light`
  return (
    <MainHeader>
      <Logo src={AppLogo} alt="Pets" />
      <PrimaryButton onClick={handleChangeTheme}>
        {mode ? <MdNightlight /> : <MdLightMode />} {buttonElement}
      </PrimaryButton>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding-left: 24px;
  padding-right: 24px;
  border-bottom: 1px solid ${props => props.theme.themeBorderColor};
`;

const Logo = styled.img`
  width: 108px;
  height: 34px;
  margin-right: 0;
`;

export default Header;