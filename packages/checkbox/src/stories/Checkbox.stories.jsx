import React from "react";
import { ArgTypes, Canvas, Title, Description, Subtitle, Story } from "@storybook/addon-docs";
import { componentArgs } from "../constants";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";

import prettier from "prettier/standalone";

/**
 * The checkbox component applies ICCC styles to MUI [Checkbox](https://mui.com/components/checkboxes/)
 */
const meta = {
  args:{
    checked: false,
    disabled: false,
    indeterminate: false,
    size: "medium"
  },
  argTypes:componentArgs,
  component:Checkbox,
  title:"ICCC/Components/Checkbox",
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title/>
          <Description />
          <Title>API</Title>
          <h6>See the <a href='https://mui.com/material-ui/api/checkbox/'>checkbox API</a> for all supported MUI props.</h6>
          <h6>Please note: This sample checkbox will not change state on click, because it is a controlled component (i.e., it receives a `checked` prop value). Please use the checked prop toggle to see the change in checked state.</h6>
          <Canvas of={api}/>
          <ArgTypes/>
          <Title>Checkbox wrapped in form control label</Title>
          <h6>For most practical applications, checkboxes will be rendered inside a MUI <a href='https://mui.com/api/form-control-label/'>FormControlLabel</a> component that provides a label and other properties. All the examples below display usage of checkbox instances using this pattern. Use the following to import `FormControlLabel`.</h6><br/>
          <Title>Checkbox states</Title>
          <Subtitle>Checked</Subtitle>
          <h6>Default state of checkbox is unchecked.</h6>
          <Story of={unchecked}/><br/><br/>
          <Subtitle>Disabled</Subtitle>
          <h6>A checkbox can be rendered in a disabled state. Notice the disabled state is applied to FormControlLabel to enable rendering the label itself in a disabled state. The checkbox component inherits the disabled state automatically.</h6>
          <Story of={disabled}/><br/><br/>
          <Subtitle>Checked</Subtitle>
          <h6>A <a href='https://reactjs.org/docs/forms.html#controlled-components'>controlled checkbox</a> can be rendered in a checked state using the `checked` prop. An <a href='https://reactjs.org/docs/uncontrolled-components.html'>uncontrolled checkbox</a> can be rendered in a checked state using the `defaultChecked` prop.</h6>
          <Story of={checked}/><br/><br/>
          <Subtitle>Checked and disabled</Subtitle>
          <h6>Props can be mixed</h6>
          <Story of={checkedDisabled}/><br/>
          <Subtitle>Indeterminate</Subtitle>
          <h6>If an indeterminate state is desired it must be set on the checkbox component itself.</h6>
          <Story of={indeterminate} /><br/>
          <Subtitle>Error</Subtitle>
          <h6>A standalone checkbox can be rendered in error state using `error` prop on the FormControlLabel component.</h6>
          <Story of={error}/><br/>
          <Subtitle>Checkbox Group</Subtitle>
          <h6>In many situations, checkboxes will appear as part of a group. For this use case it is recommended to use a combination of:

- MUI FormControl  to wrap the group and pass other contextual props
- MUI FormLabel  to pass the group label
- MUI FormGroup to group all the checkboxes in a single group
</h6>
<Story of={checkboxGroup}/><br/>
<Subtitle>Multi-line label</Subtitle>
<Story of={multiline}/>
        </>
      )
    }
  }
}

export default meta;

export const api = {
}

export const unchecked = () => (
  <FormControlLabel control={<Checkbox />} label="Unchecked" />
)

export const disabled = () => (
    <FormControlLabel control={<Checkbox />} label="Disabled" disabled />
)

export const checked = () => {
  const [state, setState] = React.useState(true);
      const handleChange = (event) => {
        setState(!state);
      };
      return (
        <FormGroup>
          <FormControlLabel
            checked={state}
            control={<Checkbox />}
            label="Controlled checkbox"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Uncontrolled checkbox"
          />
        </FormGroup>
      );
    }

export const checkedDisabled = () => (
  <FormControlLabel
      checked
      control={<Checkbox />}
      disabled
      label="Checked and disabled"
    />
)

export const indeterminate = () => (
    <FormControlLabel
      control={<Checkbox indeterminate />}
      label="Indeterminate"
    />
)

export const error = () => (
  <FormControlLabel control={<Checkbox />} error label="Error" />
)

export const checkboxGroup = () => (
  <FormControl component="fieldset">
       <FormLabel component="legend">Checkbox group</FormLabel>
       <FormGroup>
         <FormControlLabel control={<Checkbox />} label="One" />
         <FormControlLabel control={<Checkbox />} label="Two" />
         <FormControlLabel control={<Checkbox />} label="Three" />
       </FormGroup>
     </FormControl>
)

export const multiline = () => (
<FormControlLabel
      control={<Checkbox defaultChecked style={{ marginTop: "0" }} />}
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      style={{ alignItems: "flex-start" }}
    />
)
