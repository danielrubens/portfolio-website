import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (project) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Here you have some of my projects, approaching Python Bots, Geographic Information System, Node and React.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/danielrubens'}>More Projects</Button>
    </LeftSection>
  </Section>
);

export default Hero;