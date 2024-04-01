import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  CodeSnippet,
  PageContainer as PageContainerComponent,
  Paragraph
} from "../common";

export const PageContainer = ({ theme }) => {
  const gridTokens = theme.themeBase.tokens.grid;

  let currentScreen = gridTokens.sm;
  if (useMediaQuery(`@media (min-width:${gridTokens.md.breakpoint})`)) {
    currentScreen = gridTokens.md;
  }
  if (useMediaQuery(`@media (min-width:${gridTokens.lg.breakpoint})`)) {
    currentScreen = gridTokens.lg;
  }
  if (useMediaQuery(`@media (min-width:${gridTokens.xl.breakpoint})`)) {
    currentScreen = gridTokens.xl;
  }

  return (
    <PageContainerComponent additionalClassnames={theme.classname}>
      <h3 className="dhig-typography-headline-medium dhig-mt-0">
        Page container
      </h3>
      <Paragraph>
        Resize your browser window to check the behavior of the responsive page
        container. Inspect the closest <code>.page-container</code> element to
        see the media queries:
      </Paragraph>
      <Paragraph>
        Currently displaying the <strong>{currentScreen.name}</strong>{" "}
        breakpoint
      </Paragraph>
      <CodeSnippet
        language="css"
        code={`:root {
  --primitives--grid--max-width: calc({primitives.grid.max-width} / 0.9); // resolves to 1440px
  --tokens--grid--sm--margin: {tokens.grid.sm.margin}; // resolves to 16px
  --tokens--grid--md--margin: {tokens.grid.md.margin}; // resolves to 24px
  --tokens--grid--lg--margin: {tokens.grid.lg.margin}; // resolves to 5%
}
        
.page-container-wrapper {
  margin: 0 auto; // container remains horizontally centered
  max-width: var(--primitives--grid--max-width);
}

.page-container {
  margin: 0 var(--tokens--grid--sm--margin);
}

// medium breakpoint (560px)
@media only screen and (min-width: {tokens.grid.md.breakpoint}) {
  .page-container {
    margin: 0 var(--tokens--grid--md--margin);
  }
}

// large breakpoint (1040px)
@media only screen and (min-width: {tokens.grid.lg.breakpoint}) {
  .page-container {
    margin: 0 var(--tokens--grid--lg--margin);
  }
}`}
      />
    </PageContainerComponent>
  );
};

PageContainer.propTypes = {
  theme: PropTypes.any
};
