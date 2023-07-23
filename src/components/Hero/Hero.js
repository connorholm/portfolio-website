import React from 'react';
import TypeWritter from 'typewriter-effect';

import { Section, SectionText, SectionTitle, TypeTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { typewriter_list } from '../../constants/constants';
import { Img } from '../Projects/ProjectsStyles';
import { Avatar } from '@mui/material';

const Hero = () => {
  return (
  <Section row nopadding>
    <LeftSection>
        {/* <Avatar src="/images/square_pfp.jpg" alt='profile pic' sx={{ width:100, height:100 }} /> */}
        <SectionTitle main center>
        Hello, I'm Connor!<br />
        I work on 
        </SectionTitle>
        <TypeTitle>
          <TypeWritter
            options={{
              strings: typewriter_list, 
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </TypeTitle>
      <SectionText>
        Building to inspire! I create awesome applications that add value and entertainment to your daily life. Always learning to take my skill to the next level.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:connorjholm@gmail.com'}>
        Contact Me!
      </Button>
    </LeftSection>
  </Section>
)};

export default Hero;