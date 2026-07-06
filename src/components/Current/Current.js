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
      <SectionTitle>What I'm Working On</SectionTitle>
      <SectionText>
         • Running Vantix Strategies, a team of Forward Deployed Engineers who embed with clients and ship
         production AI systems — RAG pipelines, agents, and data platforms — in under six weeks.
         <br />
         • Building an AI observability platform and a natural-language benefits API at UnitedHealthcare,
         powered by MCP servers for agentic capabilities.
      </SectionText>
    </Section>
  );
}

export default Current;
