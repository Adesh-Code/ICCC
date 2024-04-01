import React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

export const PageContainer = ({ additionalClassnames = "", children }) => (
  <div className={additionalClassnames}>
    <div className="page-container-wrapper">
      <div className="page-container">
        <div className="dhig-py-4">{children}</div>
      </div>
    </div>
  </div>
);

PageContainer.propTypes = {
  additionalClassnames: PropTypes.string,
  children: PropTypes.node
};

export const Paragraph = ({
  className = "dhig-typography-body-copy-medium",
  children
}) => <p className={className}>{children}</p>;

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export const CodeSnippet = ({ code, language = "javascript" }) => {
  return (
    <SyntaxHighlighter language={language} style={prism}>
      {code}
    </SyntaxHighlighter>
  );
};

CodeSnippet.propTypes = {
  code: PropTypes.node,
  language: PropTypes.string
};
