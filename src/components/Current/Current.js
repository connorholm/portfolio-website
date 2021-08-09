import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

function Current() {
  return (
    <Section id="current">
      <SectionDivider />
      <br />
      <SectionTitle>Current Projects</SectionTitle>
      <SectionText>
         • Building a joke MERN application to allow user to post jokes for
          others to see.
          <br />
          • Working to develop two different Android applications for Jed
          Mahonis Group's clients. Features include Google Maps, API calls for Auth/Data, Payments, and Video Calls. . .
      </SectionText>
    </Section>
  );
}

export default Current;
