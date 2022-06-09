import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../components/GlobalStyles/GlobalStyles';
import { QUERIES, LIGHT, DARK } from '../constants/themeSettings';
import useTheme from '../hooks/useTheme';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PetsPage from '../pages/Pets/Pets';
import PetDetailsPage from '../pages/PetDetails/PetDetails';
import NotFound from '../pages/NotFound/NotFound';

import * as ROUTES from '../constants/routes';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useTheme();

  const handleChangeTheme = () => {
    setUseDarkTheme(!useDarkTheme)
  }
  return (
    <Router>
      <ThemeProvider theme={useDarkTheme ? DARK : LIGHT}>
        <MaxContainer>
          <Header mode={useDarkTheme} handleChangeTheme={handleChangeTheme} />
          <MainContent>
            <Switch>
              <Route exact path={ROUTES.PETS} component={PetsPage} />
              <Route path={ROUTES.PETDETAILS} component={PetDetailsPage} />
              <Route path='*' component={NotFound} />
            </Switch>
          </MainContent>
          <Footer />
        </MaxContainer>
        <GlobalStyles />
      </ThemeProvider>
    </Router>
  )
}

const MaxContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  margin: 0 auto;
  background-color: ${props => props.theme.secondaryColor};

  @media ${QUERIES.tabletAndUp} {
    margin: 5rem auto;
  }
`;

const MainContent = styled.main`
  flex: 1;
  min-height: 100vh;
  padding: 0 24px 24px;
`;

export default App;