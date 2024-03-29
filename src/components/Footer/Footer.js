import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  AvatarContainer,
} from "./FooterStyles";
import { Avatar } from "@mui/material";

const Footer = () => {

  return (
    <FooterWrapper>
      <AvatarContainer>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:612-254-5870">(612)-254-5870</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:connorjholm@gmail.com">
            connorjholm@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <Avatar src="/images/square_pfp.jpg" alt="profile picture" sx={{ width: 100, height: 100 }} />
        </LinkColumn>
      </LinkList>
      </AvatarContainer>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Redefining the Future Through Coding</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/connorholm">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/holm-connor/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/connor_holm/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
