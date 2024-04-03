
export const PackageInstall = ({ name, peerDependencies }) => (
  <>
    {name && (
      <p>
        To install the package, run <code>yarn add {name}</code>.
      </p>
    )}
    <p>
      The component needs to be wrapped in{" "}
      <a href="https://mui.com/material-ui/customization/theming/" target="_blank">
        MUI Theming
      </a>
      . Refer to {" "}
      <a href="/docs/components-mui-theme--light-theme">ICCC Theme Mui</a> to apply the
      correct ICCC styles. Run <code>
      </code> to install a compatible version.
    </p>
  </>
);

export const PackageImport = ({ componentImport, name }) =>
  componentImport ? (
    <>
      <p>Once installed, you can import the component:</p>
      <code>
        import {componentImport} from &quot;
        {name ? name : `@mui/material/${componentImport}`}&quot;;
      </code>
    </>
  ) : (
    ""
  );

const display = (props) => {
    return (
      <>
      
<PackageInstall name={props.name} peerDependencies={props.peerDependencies} />

<PackageImport componentImport={props.componentImport} name={props.name} /></>
    )
}

export default display;

