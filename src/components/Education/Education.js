import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { education } from '../../constants/constants';
import { GridContainer, TitleContent, EducationCard, Img, HeaderThree, Hr, ClassList, Class } from '../Education/EducationStyles';

const Education = () => (
    <Section nopadding id="education">
        <SectionDivider />
        <br />
        <SectionTitle>Education</SectionTitle>
        <GridContainer>
            {education.map(({ school, degree, graducation, image, classes }) => (
                <EducationCard>
                    <Img src={image} /> 
                    <TitleContent>
                        <HeaderThree title>{school}</HeaderThree>
                        <Hr />
                    </TitleContent>
                    <TitleContent>{degree} - {graducation}</TitleContent>
                    <ClassList>
                        {classes.map((classItem) => (
                            <Class>{classItem}</Class>
                        ))}
                    </ClassList>
                </EducationCard>
            ))}
        </GridContainer>
    </Section>
);

export default Education;