import React from 'react';
import { Button as ButtonComponent, CircularProgress } from "@mui/material";
import { LoadingButton as MuiLoadingButton } from '@mui/lab';
import { Title, Description, Story, Canvas, ArgTypes, Subtitle } from '@storybook/addon-docs';
import { VariantRangeNotice } from '../../../docs/src/partials'
import Grid2 from "@mui/material/Unstable_Grid2";
import { componentArgs } from '../../../button-group/src/constants';

export const Button = (ButtonProps) => (
  <div style={{ padding: "8px 0" }}>
    <ButtonComponent {...ButtonProps} />
  </div>
);

export const LoadingButton = (ButtonProps) => (
  <Grid2 container>
    <MuiLoadingButton {...ButtonProps} loading> Loading Button </MuiLoadingButton>
    <MuiLoadingButton {...ButtonProps} loading variant='link-button'> Loading Button </MuiLoadingButton>
    <MuiLoadingButton {...ButtonProps} loading variant='text'> Loading Button </MuiLoadingButton>
    <MuiLoadingButton {...ButtonProps} loading variant='outlined'> Loading Button </MuiLoadingButton></Grid2>
);

/** The Button component is the out-of-the-box MUI [`<Button>`](https://mui.com/material-ui/react-button/), with ICCC defaults.
 */
const buttonStoryMeta = {
  args: {
    children: "Button label",
    disabled: false,
    fullWidth: false,
    size: "medium",
    variant: "contained",
  },
  argTypes: componentArgs,
  title: "ICCC/Components/Button",
  tags: ['autodocs'],
  component: ButtonComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Title> API </Title>
          <h6>
            - For all supported MUI Button props, see https://mui.com/api/button/.
          </h6>
          <h6>
            - For all supported MUI LoadingButton props, see [`LoadingButton API`](https://mui.com/material-ui/api/loading-button/).
          </h6>
          <Canvas of={api} />
          <ArgTypes />
          <Title>Button Variants</Title>
          <h6>{VariantRangeNotice}</h6><br /><br />

          <Subtitle>Layout options</Subtitle>
          <h6>MUI's `fullWidth` prop can be used for full-width buttons.</h6>
          <Canvas of={layout} />

          <Subtitle>Space between icon</Subtitle>
          <Canvas of={space} />
          <Subtitle>Size options</Subtitle>
          <h6>Accepts `medium` (default) or `small`.</h6>
          <Canvas of={smallSize} />
          <Canvas of={mediumSize} />
          <Title>Variants</Title>
          <h6>Accepted variants are `contained` (default), `outlined`, `text` or `link-button`.</h6><br/>
          <Subtitle>Outlined</Subtitle>
          <Canvas of={outlinedButton} />
          <Subtitle>Contained</Subtitle>
          <Canvas of={Button} />
          <Subtitle>Link</Subtitle>
          <Canvas of={linkButton} />
          <Subtitle>Text</Subtitle>
          <Canvas of={textButton} />

          <Title>Loading</Title>
          <Story of={LoadingButton} /><br /><br />
          <Title>Disabled state</Title>
          <Canvas of={disabled} />
          <Title>Render link as button</Title>
          <h6>Per Material-UI: The URL to link to when the button is clicked. If defined, an a element will be used as the root node.</h6>
          <Canvas of={buttonWithHref} />

          {/* <Title>Dark theme</Title>
          <h6>
            {DarkThemeNotice}
            </h6>
          <Story of={darkTheme}/> */}

        </>
      ),
    }
  }
}

export default buttonStoryMeta;

export const api = {
  title: 'API',
  args: {
    ...buttonStoryMeta.args,
    variant: 'link-button',
    href: '#',
    children: 'Link button',
  }
}

export const layout = { title: "Layout options", args: { fullWidth: true, children: "Full-width" } }

export const space = {
  title: "Space between icon",
  args: {
    ...buttonStoryMeta.args,
    sx: {
      justifyContent: "space-between",
      textAlign: "left"
    },
    fullWidth: true,
    children: "Space between layout",

  },
}

export const smallSize = {
  title: "Size options",
  args: {
    ...buttonStoryMeta.args,
    size: "small",
    children: "Small button"
  }
}

export const mediumSize = {
  title: "Size options",
  args: {
    ...buttonStoryMeta.args,
    size: "medium",
    children: "Medium button"
  }
}

export const outlinedButton = {
  title: "Outlined button",
  args: {
    ...buttonStoryMeta.args,
    variant: 'outlined',
    children: 'Outlined button'
  }
}

export const linkButton = {
  title: "Link button",
  args: {
    ...buttonStoryMeta.args,
    variant: 'link-button',
    children: 'Link button'
  }
}

export const textButton = {
  title: "Text button",
  args: {
    ...buttonStoryMeta.args,
    variant: 'text',
    children: 'Text button'
  }
}

export const disabled = {
  title: 'disabled',
  args: {
    ...buttonStoryMeta.args,
    disabled: true,
    children: 'Disabled'
  }
}

export const buttonWithHref = {
  title: 'Button With Href',
  args: {
    ...buttonStoryMeta.args,
    href: '#',
    children: 'Link'
  }
}

const darkTheme = () => (
  <>
    <Button>Contained button</Button>
    <Button variant="outlined">Outlined button</Button>
    <Button variant="text">Text button</Button>
    <Button
      variant="link-button"
      href="#"

    >
      Link button
    </Button>
    <Button disabled>Disabled contained button</Button>
    <Button disabled variant="outlined">
      Disabled outlined button
    </Button>
    <Button disabled variant="text">
      Disabled text button
    </Button>
    <Button
      disabled
      variant="link-button"
      href="#"

    >
      Disabled link button
    </Button>
    <MuiLoadingButton
      loading
      loadingIndicator={<CircularProgress size="x-small" role="progressbar" />}
    >
      Loading
    </MuiLoadingButton>
    <MuiLoadingButton
      variant="outlined"
      loading
      loadingIndicator={<CircularProgress size="x-small" role="progressbar" />}
    >
      Loading
    </MuiLoadingButton>
    <MuiLoadingButton
      variant="text"
      loading
      loadingIndicator={<CircularProgress size="x-small" role="progressbar" />}
    >
      Loading
    </MuiLoadingButton>
    <MuiLoadingButton
      variant="link-button"
      loading
      loadingIndicator={<CircularProgress size="x-small" role="progressbar" />}
    >
      Loading
    </MuiLoadingButton>
  </>
)