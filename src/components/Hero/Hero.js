import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  return (
  <Section row nopadding>
    <LeftSection>
        <SectionTitle main center>
        Welcome To <br />
        Connor's Porfolio
        </SectionTitle>
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