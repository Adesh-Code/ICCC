import React from "react";
import { PageContainer, Paragraph, CodeSnippet } from "../common";

export const BackToTopButtonContent = () => (
  <PageContainer additionalClassnames="dhig-theme--light">
    <h3 className="dhig-typography-headline-medium dhig-mt-0">
      Back to top button (BTTB)
    </h3>
    <Paragraph>
      BTTB is a reference component built using DHIG parts. The goal of this
      page is to offer as much transparency as possible to whomever might wish
      to re-purpose BTTB.
    </Paragraph>
    <Paragraph>
      The look & feel were created by Andrew Diec, and approved by Gavin Wu.{" "}
      <a
        href="https://www.figma.com/file/6lKLrG2WJ3ZugWAweXVGZl/Community-%7C-Profile---VisD?type=design&node-id=898-62688&mode=design&t=kUHrNruopGZmR3Oc-11"
        target="_blank"
        rel="noreferrer"
      >
        Original Figma source for the BTTB.
      </a>
    </Paragraph>
    <h4>Behavior</h4>
    <Paragraph>
      BTTB appears at the bottom-left of pages in order to not intersect with
      the Autodesk Assistant <abbr title="Floating action button">FAB</abbr>. If
      you don&apos;t see it yet, keep scrolling. BTTB appears when the black
      Hero banner is scrolled away on all pages of the Digital HIG Reference
      App.
    </Paragraph>
    <h4>Source</h4>
    <Paragraph>
      <a href="https://git.autodesk.com/dpe/iccc/blob/master/packages/ref-app/src/components/app/back-to-top-button.js">
        Source code for the BTTB component
      </a>{" "}
      is available the repository for the Digital HIG Reference App. It is
      distributed thusly to account for the possibility it may be desired in
      non-React environments.
    </Paragraph>
    <h4>Implementation decisions</h4>
    <Paragraph>
      BTTB resembles a DHIG light-mode outlined button but forces a dark theme
      wrapper due to the outlined button having no background-color, wrapping
      BTTB in a dark theme reduces the total amount of required overrides to
      achieve the desired look &amp; feel.
      <br />
      BTTB supports a <code>prefers-reduced-motion</code> configuration.
    </Paragraph>
    <h5>Style overrides</h5>
    <CodeSnippet
      language="json"
      code={`
      boxShadow: "0px 3px 0px 0px rgba(0,0,0,.05) !important",
      border: (theme) =>
        \`solid \${theme.primitives.colors.tint["slate-175"]} 1px\`, //using slate-175 because we're locally in Dark Mode
      position: "fixed",
      left: 24,
      zIndex: 999,
      transitionDuration: (theme) => theme.primitives.transitions.duration[3],
      transitionProperty: "opacity, box-shadow, transform",
      opacity: shouldShow ? 1.0 : 0.0,
      bottom: 24,
      ":hover:focus, :hover": {
        backgroundColor: (theme) => theme.primitives.colors.primary["white"],
        boxShadow: "0px 8px 0px -3px rgba(0,0,0,.05) !important",
        border: (theme) =>
          \`solid \${theme.primitives.colors.tint["slate-175"]} 1px\`,
        transform: "translate(0, -1px)"
      },
      ":active:focus, :focus": {
        boxShadow: "0px 2px 0px 0px rgba(0,0,0,.05) !important",
        border: (theme) =>
          \`solid \${theme.primitives.colors.tint["slate-175"]} 1px\`,
        transform: "translate(0, 1px)"
      },
      "@media (prefers-reduced-motion: no-preference)": {
        transitionProperty: "bottom, box-shadow, transform",
        bottom: shouldShow ? 24 : -60,
        opacity: 1.0
      }

    `}
    />
    <h5>Show / hide behavior</h5>
    <Paragraph>
      Showing BTTB is handled by a javascript intersection observer, as to not
      require a React environment.{" "}
    </Paragraph>{" "}
    <Paragraph>
      The React component offers 2 modes:
      <br />
      <strong>into view</strong> causes BTTB to appear when the reference
      element comes into the viewport.
      <br />
      <strong>out of view</strong> causes BTTB to appear when the reference
      element disappears from viewport and stays visible for as long as the
      reference element is out of view above the viewport.
    </Paragraph>
    <CodeSnippet
      language="javascript"
      code={`
    const [shouldShow, setShouldShow] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (mode === "into view") {
                setShouldShow(
                entry.isIntersecting || entry.boundingClientRect.top < 0
                );}
            if (mode === "out of view") {
                setShouldShow(!entry.isIntersecting);
            }
        },
        { rootMargin: "0px" });
    observer.observe(ref.current);

    return () => observer.disconnect();
    }, [shouldShow, mode, ref]);
`}
    />
    <h5>Responsiveness</h5>
    <Paragraph>
      BTTB shows as an IconButton when on mobile. Resize your browser to try it!
    </Paragraph>
    <CodeSnippet
      language="jsx"
      code={`
      const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down("md"));
      
      return (
        <ThemeProvider theme={createTheme(themeDark)}>
          {isMobile ? (
            <IconButton sx={styles} onClick={onClick}>
              {icon}
            </IconButton>
          ) : (
            <Button sx={styles} startIcon={icon} onClick={onClick}>
              {children}
            </Button>
          )}
        </ThemeProvider>
      );
      `}
    />
  </PageContainer>
);
