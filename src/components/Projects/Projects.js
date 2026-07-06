import React from 'react';
import { FaUsers, FaCode } from 'react-icons/fa';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, IconWrap } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// Icon fallback for projects that don't have a good picture.
const iconFor = (key) => {
  switch (key) {
    case 'users':
      return <FaUsers size="5rem" />;
    default:
      return <FaCode size="5rem" />;
  }
};

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <br />
    <SectionTitle >Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, icon, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          {image ? <Img src={image} /> : <IconWrap>{iconFor(icon)}</IconWrap>}
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <Hr />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          {(source || visit) && (
            <UtilityList>
              {visit && <ExternalLinks href={visit}>Visit</ExternalLinks>}
              {source && <ExternalLinks href={source}>Source</ExternalLinks>}
            </UtilityList>
          )}
        </BlogCard>
      ))}
    </GridContainer>

  </Section>
);

export default Projects;
