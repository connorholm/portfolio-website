import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { BiCodeCurly } from 'react-icons/bi'
import { Avatar } from '@mui/material';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';


const Header = () =>  {
return (
  <Container>
    <Div1>
      <Link href="/" >
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
          {/* <Avatar src="/images/square_pfp.jpg" alt='profile pic' sx={{ width:75, height:75 }} /> */}
          <BiCodeCurly size="3rem" />
          <Span>&nbsp;Connor Holm</Span>
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
        <Link href="#education">
          <NavLink>Education</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#current">
          <NavLink>Current</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="/Resume-ConnorHolm.pdf">
          <NavLink>Resumé</NavLink>
        </Link>
      </li> */}
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
