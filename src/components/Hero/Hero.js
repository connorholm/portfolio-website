import React from 'react';
import TypeWritter from 'typewriter-effect';

import { Section, SectionText, SectionTitle, TypeTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Typefont } from './HeroStyles';
import { typewriter_list } from '../../constants/constants';

const Hero = () => {
  return (
  <Section row nopadding>
    <LeftSection>
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
        Building to inspire! I create awesome apps that add value and entertainment to your daily life. Always learning to take my skill to the next level.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:contact@cholmdev.com'}>
        Contact Me!
      </Button>
    </LeftSection>
  </Section>
)};

export default Hero;