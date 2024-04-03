import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const PlaceholderContent = () => (
  <>
    <AlertTitle>This is a component placeholder.</AlertTitle>
    This component implementation is not yet available in the Digital HIG library.
    Consuming teams may use the related MUI component and apply Digital HIG styles
    per the design specs. If specs are not available, please engage VisD for guidance.
  </>
);

export const DeprecationContent = ({ oldPackage, newPackages }) => (
  <>
    <AlertTitle>This component has been deprecated.</AlertTitle>
    The <code>{oldPackage}</code> package is no longer maintained. {typeof newPackages ===
      "string" && newPackages.includes("@mui") ? (
      <p>
        Import from <code>{newPackages}</code> instead.
      </p>
    ) : (
      <p sx={{ marginBottom: "0" }}>
        Please install and import from{" "}
        {Object.keys(newPackages).map((key) => (
          <code key={key}>
            <a href={`${newPackages[key]}`}>{`${
              key.includes("@mui") ? key : "@digital-hig/" + key
            }`}</a>
          </code>
        ))}{" "}
        instead.
      </p>
    )}
  </>
);

const display = () => {
  return (

  <Alert
    severity="warning"
    variant="outlined"
  >
    {props.deprecation ? (
      <DeprecationContent {...props} />
    ) : (
      <PlaceholderContent />
    )}
  </Alert>

  )
}

export default display;
