import React from 'react';
import Banner from '../banner/banner';
import MainView from '../main-view/main-view';
import Tags from '../tags/tags';
import {
  Section, Container, Main, Sidebar,
} from './styled-home';

const Home = (props) => (
  <>
    <Banner token={props.token} appName={props.appName} />
    <Section>
      <Container>
        <Main>
          <MainView />
        </Main>
        <Sidebar>
          <Tags />
        </Sidebar>
      </Container>
    </Section>
  </>
);

export default Home;
