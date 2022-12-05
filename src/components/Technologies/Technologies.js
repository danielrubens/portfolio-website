import React from 'react';
import { DiFirebase, DiReact, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Techonologies</SectionTitle>
    <SectionText>
      I've worked with MERN Stack, GIS Development, Python Bots and Clean Architecture.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>Experience with <br />
          React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>Experience with <br />
          Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size='3rem'/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>Experience with <br />
          Python and GIS Development
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
