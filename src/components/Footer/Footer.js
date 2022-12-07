import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMedium } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
     <SocialContainer>
    <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:5585981596937">+55 (85) 9-8159-6937</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:contact@danielrubens.com">contact@danielrubens.com</LinkItem>
      </LinkColumn>
    </LinkList>
      <SocialIcons href='https://github.com/danielrubens'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/danielrubenss/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.medium.com/@danielrubens'>
        <AiOutlineMedium size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com/danielrubenss'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
      </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
