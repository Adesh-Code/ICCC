import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PageContainer } from "../common";

const ListItem = ({ children }) => (
  <li className="dhig-typography-body-copy-medium">{children}</li>
);

ListItem.propTypes = {
  children: PropTypes.node
};

export const Menu = ({ theme }) => {
  return (
    <PageContainer additionalClassnames={theme.classname}>
      <h3
        className="dhig-typography-headline-medium"
        style={{
          margin: "0"
        }}
      >
        Menu
      </h3>
      <ul>
        <ListItem>
          <Link to="/ref-app/tokens">Examples of token usage</Link>
        </ListItem>
        <ListItem>
          <Link to="/ref-app/react-components">React component examples</Link>
          <ul>
            <ListItem>
              <Link to="/ref-app/back-to-top-button">Back to top button</Link>
            </ListItem>
          </ul>
        </ListItem>
        <ListItem>
          <Link to="/ref-app/html-components">HTML component examples</Link>
        </ListItem>
        <ListItem>
          <Link to="/ref-app/icons">Icons</Link>
        </ListItem>
        <ListItem>
          <Link to="/ref-app/favicon">Favicon</Link>
        </ListItem>
        <ListItem>
          <Link to="/ref-app/page-container">Page container</Link>
        </ListItem>
        <ListItem>
          <Link to="/ref-app/dotcom">Dotcom</Link>
        </ListItem>
        <ListItem>
          <Link to="/ref-app/grid-examples">Grid examples</Link>
        </ListItem>
        <ListItem>
          <Link to="/ref-app/global-font-size">Global font size</Link>
        </ListItem>
      </ul>
    </PageContainer>
  );
};

Menu.propTypes = {
  theme: PropTypes.any
};
