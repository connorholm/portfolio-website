import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;
const AUTO_ROTATE_MS = 3500;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [paused, setPaused] = useState(false);
  const carouselRef = useRef();

  // Resolve the scroll track. Fall back to an id lookup because ref forwarding
  // through the styled `ul` is unreliable in this app.
  const getTrack = () =>
    carouselRef.current ||
    (typeof document !== 'undefined' && document.getElementById('timeline-carousel'));

  // Scroll a given item to the start of the (horizontally scrollable) track.
  const scrollToIndex = (i) => {
    const node = getTrack();
    if (!node || !node.children[i]) return;
    node.scrollTo({ left: node.children[i].offsetLeft, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();
    setActiveItem(i);
    scrollToIndex(i);
  };

  // Keep the active dot in sync while the user scrolls manually.
  const handleScroll = () => {
    const node = getTrack();
    if (!node) return;
    const sl = node.scrollLeft;
    let closest = 0;
    let min = Infinity;
    for (let i = 0; i < node.children.length; i++) {
      const d = Math.abs(node.children[i].offsetLeft - sl);
      if (d < min) {
        min = d;
        closest = i;
      }
    }
    setActiveItem(closest);
  };

  // Auto-rotate through the timeline; pauses while the user interacts.
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActiveItem((prev) => {
        const next = (prev + 1) % TOTAL_CAROUSEL_COUNT;
        scrollToIndex(next);
        return next;
      });
    }, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Snap back to the beginning on resize (avoids covered content bug).
  useEffect(() => {
    const handleResize = () => {
      const node = getTrack();
      if (node) node.scrollTo({ left: 0 });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const resumeSoon = () => setTimeout(() => setPaused(false), 4000);

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      The purpose of my work is to make an impact through coding. I am constantly learning and growing my skills to be able to build awesome applications for awesome people.
      </SectionText>
      <CarouselContainer
        id="timeline-carousel"
        ref={carouselRef}
        onScroll={handleScroll}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={resumeSoon}
      >
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index == TOTAL_CAROUSEL_COUNT -1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>
                  {item.text}
                </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
