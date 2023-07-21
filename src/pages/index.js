import React, { useEffect} from "react";
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Current from '../components/Current/Current'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Education from "../components/Education/Education";

const Home = () => {
  useEffect(() => {
    document.title = "Connor Holm";
  }, []);
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Education />
      <Current />
    </Layout>
  );
};

export default Home;
