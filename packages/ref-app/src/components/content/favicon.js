import React from "react";
import PropTypes from "prop-types";
import { PageContainer, Paragraph } from "../common";

export const Favicon = ({ theme }) => (
  <PageContainer additionalClassnames={theme.classname}>
    <h3 className="dhig-typography-headline-medium dhig-mt-0">Favicon</h3>
    <Paragraph>
      View page source to inspect the favicon implementation, based on{" "}
      <a href="https://git.autodesk.com/t-craiw/favicon-example">
        this article
      </a>
      .
    </Paragraph>
  </PageContainer>
);

Favicon.propTypes = {
  theme: PropTypes.any
};
