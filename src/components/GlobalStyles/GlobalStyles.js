import { createGlobalStyle } from 'styled-components';
import { COLORS, WEIGHTS, FAMILYS } from '../../constants/themeSettings';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, ul,
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline
  }

  ul {
    list-style: none;
  }

  svg {
    vertical-align: middle;
  }

  section, header, nav, footer {
    display: block;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.5;
    font-family: ${FAMILYS.sansSerif};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  html, body {
    height: 100%;
  }

  body {
    font-size: 1rem;
    font-weight: ${WEIGHTS.normal};
    color: ${COLORS.text};
    background-color: ${props => props.theme.primaryColor};
  }
`;

export default GlobalStyles;