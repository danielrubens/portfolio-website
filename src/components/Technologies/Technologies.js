import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Techonologies</SectionTitle>
    <SectionText>
      I've worked with MERN Stack, GIS Development, Python Bots and Clean Architecture.
    </SectionText>
  </Section>
);

export default Technologies;
