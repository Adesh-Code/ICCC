import React from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PageContainer, Paragraph } from "../common";
import Grid from "@mui/material/Grid";
import Grid2 from "@mui/material/Unstable_Grid2";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const CellContent = ({ children = "Grid cell" }) => (
  <div className="dhig-p-4" style={{ border: "1px dashed #666" }}>
    {children}
  </div>
);

CellContent.propTypes = {
  children: PropTypes.any
};

export const GridExamples = ({ theme }) => {
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
    <PageContainer additionalClassnames={theme.classname}>
      <h3 className="dhig-typography-headline-medium dhig-mt-0">
        Grid examples
      </h3>
      <Paragraph>
        Currently displaying the <strong>{currentScreen.name}</strong>{" "}
        breakpoint
      </Paragraph>

      <h4 className="dhig-typography-headline-smaller">MUI Grid</h4>
      <Paragraph>
        Four rows in small, two rows in medium, one row in large
      </Paragraph>

      <ThemeProvider theme={createTheme(theme.themeBase)}>
        <Grid container>
          <Grid item sm={12} md={6} lg={3}>
            <CellContent>01</CellContent>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <CellContent>02</CellContent>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <CellContent>03</CellContent>
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <CellContent>04</CellContent>
          </Grid>
        </Grid>
      </ThemeProvider>

      <h4 className="dhig-typography-headline-smaller">MUI Grid2</h4>
      <Paragraph>
        Four rows in small, two rows in medium, one row in large
      </Paragraph>

      <ThemeProvider theme={createTheme(theme.themeBase)}>
        <Grid2 container>
          <Grid2 sm={12} md={6} lg={3}>
            <CellContent>01</CellContent>
          </Grid2>
          <Grid2 sm={12} md={6} lg={3}>
            <CellContent>02</CellContent>
          </Grid2>
          <Grid2 sm={12} md={6} lg={3}>
            <CellContent>03</CellContent>
          </Grid2>
          <Grid2 sm={12} md={6} lg={3}>
            <CellContent>04</CellContent>
          </Grid2>
        </Grid2>
      </ThemeProvider>

      <h4 className="dhig-typography-headline-smaller">CSS grid</h4>
      <Paragraph>
        Two-dimensional grid system. Grids can be used to lay out major page
        areas or small user interface elements.
      </Paragraph>

      <div className="dhig-grid dhig-grid-cols-1 md:dhig-grid-cols-2 lg:dhig-grid-cols-3 dhig-gap-1">
        <CellContent>Grid cell 1</CellContent>
        <CellContent>Grid cell 2</CellContent>
        <CellContent>Grid cell 3</CellContent>
        <CellContent>Grid cell 4</CellContent>
        <CellContent>Grid cell 5</CellContent>
        <CellContent>Grid cell 6</CellContent>
      </div>

      <h4 className="dhig-typography-headline-smaller">Flexbox</h4>
      <Paragraph>
        One-dimensional layout method to arrange items in rows or columns. Items
        flex (expand) to fill additional space or shrink to fit into smaller
        spaces.
      </Paragraph>

      <div className="dhig-flex dhig-gap-1">
        <div className="dhig-flex-grow">
          <CellContent>Grid cell 1</CellContent>
        </div>
        <CellContent>Grid cell 2</CellContent>
        <CellContent>Grid cell 3</CellContent>
        <CellContent>Grid cell 4</CellContent>
        <CellContent>Grid cell 5</CellContent>
        <CellContent>Grid cell 6</CellContent>
      </div>

      <h4 className="dhig-typography-headline-smaller">
        Limiting content width
      </h4>
      <div className="dhig-flex">
        <div className="dhig-flex-grow">
          <div className="lg:dhig-w-2/3">
            <CellContent>
              <h4 className="dhig-typography-headline-small dhig-my-0">
                Two thirds
              </h4>
              <Paragraph className="dhig-typography-body-copy-medium dhig-my-0">
                Morbi bibendum imperdiet leo consequat congue. Nullam in ex
                felis. Cras a nisl nunc. Nam nec magna porttitor enim
                scelerisque vestibulum id at enim. Vestibulum rhoncus vel ipsum
                sed viverra. Vestibulum dui magna, rhoncus in pharetra ut,
                semper nec magna. Mauris quis sodales sapien. Integer convallis
                iaculis orci, vitae commodo diam tincidunt vel. Proin sit amet
                lacus vel ipsum gravida pulvinar. Donec vitae iaculis ex, in
                condimentum nisl. Nunc auctor accumsan eros ut tincidunt. Nam id
                placerat purus, id porta metus. Nulla lacus dui, congue non
                tortor eget, cursus condimentum lorem. Cras placerat justo ac
                metus feugiat fermentum.
              </Paragraph>
            </CellContent>
          </div>
          <div className="">
            <CellContent>
              <Paragraph className="dhig-typography-body-copy-medium dhig-my-0">
                Suspendisse a dignissim felis. Pellentesque ac sollicitudin
                augue. Suspendisse gravida in orci vitae pellentesque. Duis
                purus nibh, luctus mollis placerat et, feugiat vel quam.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Duis augue ex, dapibus lobortis hendrerit rutrum, eleifend in
                augue. Donec eget aliquam ex. Nulla eleifend auctor turpis eget
                finibus. Proin id libero imperdiet, faucibus urna in,
                consectetur dolor. Nulla faucibus facilisis augue id rhoncus.
                Suspendisse laoreet ligula in commodo dapibus. Sed fringilla
                erat vel sapien interdum, non elementum elit rutrum. Sed orci
                ante, pretium et orci ut, ornare faucibus mi. Curabitur egestas
                ullamcorper placerat. Suspendisse tempus risus non neque sodales
                feugiat. Duis quis velit aliquam, lobortis ligula non, tincidunt
                risus.
              </Paragraph>
            </CellContent>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

GridExamples.propTypes = {
  theme: PropTypes.any
};
