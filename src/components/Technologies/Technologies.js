import React from 'react';
import { DiReact } from 'react-icons/di';
import { AiFillApple, AiFillAndroid, AiTwotoneApi, AiFillCloud } from 'react-icons/ai';
import { SiPytorch } from 'react-icons/si';
import { MdComputer, MdGroup } from 'react-icons/md';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've learned a range of technologies in the programming world.
      From Machine Learning To App Development
    </SectionText>
    <List>
      <ListItem>
        <SiPytorch size="3rem" />
        <ListContainer>
          <ListTitle>
            Machine Learning
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Pytorch, Neural Networks, Computer Vision, Genetic Algorithms, and AzureML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiTwotoneApi size="3rem" />
        <ListContainer>
          <ListTitle>
            APIs
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            managing data through APIs with Ruby on Rails, Node/Express, and Flask
          </ListParagraph>
        </ListContainer>
      </ListItem>
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
            libraries like Retrofit and Google Maps
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
            React, Node, Tailwind, MongoDB, and Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <MdComputer size="3rem" />
        <ListContainer>
          <ListTitle>
            Programming Langauges
          </ListTitle>
          <ListParagraph>
            Python, Java, C, Kotlin, Swift, Javascript, SQL, Ruby, Ocaml, and MiniLang.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillCloud size="3rem" />
        <ListContainer>
          <ListTitle>
            Cloud Services
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Heroku, Firebase, AzureML, Docker, and AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <MdGroup size="3rem" />
        <ListContainer>
          <ListTitle>
            Processes
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Agile, and Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
