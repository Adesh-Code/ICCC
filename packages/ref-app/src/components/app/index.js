import React from "react";
import "./app.css";

// Libraries
import { HashRouter, Route, Switch } from "react-router-dom";

// Theme data
import { themeDark, themeLight } from "@iccc/mui/dist/theme-mui";

// App components
import { Hero } from "./hero";
import { Menu } from "./menu";

// Content
import {
  Dotcom,
  Favicon,
  GlobalFontSize,
  GridExamples,
  HtmlComponents,
  Icons,
  PageContainer,
  ReactComponents,
  BackToTopButtonContent,
  Tokens
} from "./../content";

export const themes = {
  light: {
    classname: "dhig-theme--light",
    name: "light",
    themeBase: themeLight
  },
  dark: {
    classname: "dhig-theme--dark",
    name: "dark",
    themeBase: themeDark
  }
};

const App = () => (
  <HashRouter>
    <Hero theme={themes.dark} />
    <Menu theme={themes.light} />
    <Switch>
      <Route exact path="/ref-app/tokens">
        <Tokens theme={themes.dark} />
        <Tokens theme={themes.light} />
      </Route>
      <Route exact path="/ref-app/react-components">
        <ReactComponents theme={themes.dark} />
        <ReactComponents theme={themes.light} />
      </Route>
      <Route exact path="/ref-app/back-to-top-button">
        <BackToTopButtonContent />
      </Route>
      <Route exact path="/ref-app/html-components">
        <HtmlComponents theme={themes.dark} />
        <HtmlComponents theme={themes.light} />
      </Route>
      <Route exact path="/ref-app/icons">
        <Icons theme={themes.light} />
      </Route>
      <Route exact path="/ref-app/favicon">
        <Favicon theme={themes.dark} />
      </Route>
      <Route exact path="/ref-app/page-container">
        <PageContainer theme={themes.dark} />
      </Route>
      <Route exact path="/ref-app/dotcom">
        <Dotcom />
      </Route>
      <Route exact path="/ref-app/grid-examples">
        <GridExamples theme={themes.dark} />
      </Route>
      <Route exact path="/ref-app/global-font-size">
        <GlobalFontSize theme={themes.light} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
