import React from 'react';
import { ArgTypes, Canvas, Description, Story, Title, Subtitle } from "@storybook/addon-docs";
import { componentArgs } from "../constants";
import Box from "@mui/material/Box";
import LinearProgress, { LinearProgressLabel } from "../linear-progress";

/**
 * The linear progress component is a thin wrapper around MUI [`<LinearProgress>`](https://mui.com/material-ui/react-progress/#linear)
 */
const meta = {
  args:{
    ...LinearProgress.defaultProps,
    value: 0,
    variant: "indeterminate",
    size: 'small',
  },
  argTypes:{componentArgs},
  component:LinearProgress,
  title:"ICCC/Components/Linear progress",
  tags: ['autodocs'],
  parameters:{
    docs: {
      page: () => (
        <>
          <Title/>
          <Description />
          <Title>API</Title>
          <h6>- For all supported MUI LinearProgress props, see <a href='https://mui.com/material-ui/api/linear-progress/'>LinearProgress API</a>.</h6>
          <Canvas of={api} />
          <ArgTypes/>
          <Title>Linear progress variants</Title>
          <Subtitle>Sizes</Subtitle>
          <h6>The linear progress component is available in sizes `small` and `medium`.</h6>
          <Canvas of={api}/>
          <Canvas of={mediumSize}/>
          <Title>Variants</Title>
          <Subtitle>Indeterminate</Subtitle>
          <h6>The indeterminate variant shows that the wait time is unspecified. Linear progress is `indeterminate` by default.</h6>
          
          <h6>The linear progress component can optionally display a label which appears beneath the component. Import `LinearProgressLabel` from `@mui/material/LinearProgress` and provide a string to the `label` prop to display a label.</h6>
          <Canvas of={indeterminate}/>
          <Subtitle>Determinate</Subtitle>
          <h6>The linear progress component may also be `determinate`, with the `variant` and `value` prop provided.</h6>
          <h6>For the `determinate` linear progress variant, the percentage value will also be displayed with `variant="determinate"` on the `LinearProgressLabel` component. The `value` prop must be provided to display the percentage value.</h6>
          <Canvas of={determinate}/>
       
       
        </>
      )
    },
  }
}

export default meta;

export const api = {
  title: 'API',
  args: {
    ...meta.args,
  },
}

  export const mediumSize = {
      args: {
        size: "medium",
      }
  }

  export const indeterminate = {
    args: {
      children: <LinearProgressLabel label="Indeterminate label" />
    }
  }

  export const determinate = {
    args: {
      variant: 'determinate',
      children: <LinearProgressLabel
              variant="determinate"
              label="Determinate label"
              value={0}
            />
    }
  }

// ### Dark theme

// <Canvas>
//   <Story name="Dark theme" parameters={{ theme: "dark" }}>
//     <LinearProgress>
//       <LinearProgressLabel label="Indeterminate label" />
//     </LinearProgress>
//     <Box py={3} />
//     <LinearProgress size="medium">
//       <LinearProgressLabel label="Indeterminate label" size="medium" />
//     </LinearProgress>
//     <Box py={3} />
//     <LinearProgress variant="determinate" value={64}>
//       <LinearProgressLabel
//         variant="determinate"
//         label="Determinate label"
//         value={0}
//       />
//     </LinearProgress>
//     <Box py={3} />
//     <LinearProgress variant="determinate" size="medium" value={64}>
//       <LinearProgressLabel
//         variant="determinate"
//         label="Determinate label"
//         size="medium"
//         value={64}
//       />
//     </LinearProgress>
//   </Story>
// </Canvas>
