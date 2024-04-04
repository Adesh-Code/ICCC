import React from 'react';
import { ArgTypes, Title, Description, Canvas, Subtitle, Story } from "@storybook/addon-docs";
import { componentArgs } from "../constants";
import {
  VariantRangeNotice,
} from "../../../docs/src/partials";
import IconButtonComponent from "../icon-button";
import SvgIcon from "@mui/material/SvgIcon";
import SyncIcon from "@iccc/icon/lib/build/icons/sync";

export const IconButton = ({ ...otherProps }) => (
  <div style={{ padding: "8px 0" }}>
    <IconButtonComponent {...otherProps} />
  </div>
);

/**
 * The IconButton component is a thin wrapper around MUI [`<IconButton>`](https://mui.com/material-ui/api/icon-button/).
 */
const meta = {
  args: IconButtonComponent.defaultProps,
  argTypes: componentArgs,
  component: IconButtonComponent,
  title:"ICCC/Components/Icon button",
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title/>
          <Description/>
          <Title>API</Title>
          <h6>See the <a href='https://mui.com/material-ui/api/icon-button/'>Material UI icon button API</a> for all supported props.</h6>
          <Canvas of={api}/>
          <ArgTypes/>
          <Title>Icon button variants</Title>
          <Subtitle>Size options</Subtitle>
          <h6>Accepts `medium` (default) or `small`, which renders a slightly smaller button.</h6>
          <Story of={sizes} /><br/>
          <Subtitle>Variants</Subtitle>
          <h6>Accepted variants are `contained` (default), `outlined` or `text`.</h6>
          <Story of={variants} /><br/>
          <Title>Disabled state</Title>
          <Canvas of={disabled} />
          <Subtitle>Render link as a button</Subtitle>
          <h6>Per Material-UI: The URL to link to when the button is clicked. If defined, an a element will be used as the root node.</h6>
          <Canvas of={link}/>
          <Title>Accessibility</Title>
          <h6>Use `titleAccess` on the embedded icon component. Refer to <a href='/docs/components-svg-icon--accessibility'>SvgIcon component accessibility</a> for more information.</h6>
          <Canvas of={accessibility}/>
        </>
      )
    }
  }
}

export default meta;

export const api = {
  args: {
    children: <SvgIcon>
    <SyncIcon />
  </SvgIcon>
  }
}

export const sizes = () => (
  <>
      <IconButton>
        <SvgIcon>
          <SyncIcon />
        </SvgIcon>
      </IconButton>
      <IconButton size="small">
        <SvgIcon>
          <SyncIcon />
        </SvgIcon>
      </IconButton>
    </>
)

export const variants = () => (
  <>
  <IconButton>
    <SvgIcon>
      <SyncIcon />
    </SvgIcon>
  </IconButton>
  <IconButton variant="outlined">
    <SvgIcon>
      <SyncIcon />
    </SvgIcon>
  </IconButton>
  <IconButton variant="text">
    <SvgIcon>
      <SyncIcon />
    </SvgIcon>
  </IconButton>
</>
)

export const disabled = {
  args: {
    disabled: true,
    children: <SvgIcon>
    <SyncIcon />
  </SvgIcon>
  }
}

export const link = {
  args: {
    href: '#',
    children: <SvgIcon>
    <SyncIcon />
  </SvgIcon>
  }
}

export const accessibility = {
  args: {
    href: '#',
    children: <SvgIcon titleAccess="Click to sync">
    <SyncIcon />
  </SvgIcon>
  }
}
