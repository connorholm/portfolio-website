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
         • Working in the medical space to better navigate documents using various forms of machine learning 
         (optical character recognition, object detection models, NLP, etc).
         <br />
         • Deploying and launching a web application of the machine learning model that can remove watermarks from videos. 
      </SectionText>
    </Section>
  );
}

export default Current;
