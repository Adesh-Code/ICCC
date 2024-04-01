import React, { useRef } from "react";
import PropTypes from "prop-types";
import { BackToTopButton } from "./back-to-top-button";
import { GridOverlay } from "./grid-overlay";
import { PageContainer, Paragraph } from "../common";

export const Hero = ({ theme }) => {
  const heroRef = useRef(null);

  return (
    <PageContainer additionalClassnames={theme.classname}>
      <h1 className="dhig-typography-headline-largest dhig-m-0" ref={heroRef}>
        Digital HIG Reference App
      </h1>

      <Paragraph>
        Digital HIG (DHIG) is a comprehensive system of reusable code
        components, together with standards, guidelines, documentation, and
        toolkits. (
        <a href="https://wiki.autodesk.com/display/DPEE/Digital+HIG+Engineering">
          More info
        </a>
        )
      </Paragraph>
      <Paragraph>
        Find more details in our{" "}
        <a href="https://wiki.autodesk.com/display/DPEE/Quick+Start+Guide+Articles">
          Quick Start Guides
        </a>
        .
      </Paragraph>
      <GridOverlay />
      <BackToTopButton
        ref={heroRef}
        mode="out of view"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        Back to top
      </BackToTopButton>
    </PageContainer>
  );
};

Hero.propTypes = {
  theme: PropTypes.any
};
