import React from "react";
import PropTypes from "prop-types";
import { CodeSnippet, PageContainer } from "../common";
import Typography from "@iccc/mui/dist/typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

export const GlobalFontSize = ({ theme }) => {
  return (
    <PageContainer>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      html { font-size: 10px }
    `
        }}
      />
      <ThemeProvider theme={createTheme(theme.themeBase)}>
        <Typography variant="headline-medium">
          Not resetting global font size renders tiny text
        </Typography>
        <Typography>
          Digital HIG assumes a default global font size of 16px, but
          applications built with Digital HIG can&apos;t always control the
          global font size of the webpage where they run. For this reason, in
          some cases it may be necessary to reset the font size of the
          application, so that typography tokens are adjusted on the fly.
        </Typography>
      </ThemeProvider>
      <div className="dhig-mt-8" />
      <ThemeProvider
        theme={createTheme(theme.themeBase, {
          typography: {
            htmlFontSize: 10
          }
        })}
      >
        <Typography variant="headline-medium">
          Resetting global font size
        </Typography>
        <Typography>
          Digital HIG assumes a default global font size of 16px, but
          applications built with Digital HIG can&apos;t always control the
          global font size of the webpage where they run. For this reason, in
          some cases it may be necessary to reset the font size of the
          application, so that typography tokens are adjusted on the fly.
          Here&apos;s an example of how you can reset global font size:
        </Typography>
        <CodeSnippet
          style={{
            fontSize: "16px"
          }}
          language="javascript"
          code={`
import { themeLight } from '@iccc/theme-mui';
import { createTheme, ThemeProvider } from '@mui/material/styles';

<ThemeProvider theme={createTheme(themeLight, {
    typography: {
      htmlFontSize: 10
    }
  })}
>
  // app content here
</ThemeProvider>`}
        />
      </ThemeProvider>
    </PageContainer>
  );
};

GlobalFontSize.propTypes = {
  theme: PropTypes.any
};
