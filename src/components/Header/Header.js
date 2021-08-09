import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { BiCodeCurly } from 'react-icons/bi'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


const Header = () =>  {
return (
  <Container>
    <Div1>
      <Link href="/" >
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
        <BiCodeCurly size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#current">
          <NavLink>Current</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/Resume-ConnorHolm.pdf">
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/connorholm">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/holm-connor/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/connor_holm/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)};

export default Header;
