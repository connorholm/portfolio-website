import React from 'react';
import { FaRocket, FaRobot, FaCloud, FaEye, FaAndroid, FaBriefcase } from 'react-icons/fa';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { experience } from '../../constants/constants';
import {
  GridContainer,
  ExperienceCard,
  IconWrap,
  Company,
  Role,
  Meta,
  Hr,
  CardInfo,
  TagList,
  Tag,
  ExternalLinks,
} from './ExperienceStyles';

// Roles have no logos, so we fall back to an icon that fits the work.
const iconFor = (key) => {
  switch (key) {
    case 'rocket':
      return <FaRocket size="2.6rem" />;
    case 'robot':
      return <FaRobot size="2.6rem" />;
    case 'cloud':
      return <FaCloud size="2.6rem" />;
    case 'eye':
      return <FaEye size="2.6rem" />;
    case 'android':
      return <FaAndroid size="2.6rem" />;
    default:
      return <FaBriefcase size="2.6rem" />;
  }
};

const Experience = () => (
  <Section nopadding id="experience">
    <SectionDivider />
    <br />
    <SectionTitle>Experience</SectionTitle>
    <GridContainer>
      {experience.map(({ company, role, date, location, icon, description, tags, visit }, index) => (
        <ExperienceCard key={index}>
          <IconWrap>{iconFor(icon)}</IconWrap>
          <Company>{company}</Company>
          <Role>{role}</Role>
          <Meta>{date}{location ? ` · ${location}` : ''}</Meta>
          <Hr />
          <CardInfo>{description}</CardInfo>
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
          {visit ? <ExternalLinks href={visit}>Visit</ExternalLinks> : null}
        </ExperienceCard>
      ))}
    </GridContainer>
  </Section>
);

export default Experience;
