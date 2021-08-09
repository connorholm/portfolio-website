import React from 'react';
import { DiReact, DiPython } from 'react-icons/di';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've learned a range of technologies in the programming world.
      From Mobile To Web Development
    </SectionText>
    <List>
      <ListItem>
        <AiFillApple size="3rem" />
        <ListContainer>
          <ListTitle>
            iOS
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Swift, SwiftUI and SceneKit
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillAndroid size="3rem" />
        <ListContainer>
          <ListTitle>
            Android
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Kotlin, Java and
            Retrofit
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>
            Web
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB, Express, React and Node
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>
            Python
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            BeautifulSoup, Flask and TKinter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
