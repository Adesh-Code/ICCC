import React from 'react';
import { ArgTypes, Canvas, Subtitle, Title, Description, Story } from "@storybook/addon-docs";
import { useStorybookState } from '@storybook/manager-api';
import {
  VariantRangeNotice
} from "../../../docs/src/partials";
import {componentArgs} from '../constants'
import ArchiveIcon from "@iccc/icon/lib/build/icons/archive";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import CopyIcon from "@iccc/icon/lib/build/icons/copy";
import DeleteIcon from "@iccc/icon/lib/build/icons/trash";
import EditIcon from "@iccc/icon/lib/build/icons/edit";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import NavMore from "@iccc/icon/lib/build/icons/more";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import SvgIcon from "@mui/material/SvgIcon";


/**
The button group component is the out-of-the-box MUI [`<ButtonGroup>`](https://mui.com/material-ui/react-button-group/), with Digital HIG defaults.
 */
const meta = {
  args: {
    size: 'medium',
    variant: 'contained',
    children: <>
    <Button>One</Button>
       <Button>Two</Button>
       <Button>Three</Button></>
  },
  argTypes: componentArgs,
  component: ButtonGroup,
  title:"ICCC/Components/Button Group",
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title/>
          <Description/>
          <Title>API</Title>
          <Canvas of={api} />
          <ArgTypes />s
          <Title>Button group variants</Title>
          <h6>{VariantRangeNotice}</h6><br/>
          <Subtitle>Contained</Subtitle>
          <h6>
Contained buttons provide a strong visual indicator to help guide the customer on their journey. Use only one contained/primary call to action per page or clearly defined area of the UI.
          </h6>
          <Canvas of={contained}/>
          <Subtitle>Outlined</Subtitle>
          <h6>Outlined buttons do not command as much attention as contained buttons. They are used to provide a secondary action.</h6>
          <Canvas of={outlined}/>
          <Subtitle>Small</Subtitle>
          <h6>For contexts with large amounts of information, a small variant is provided.</h6>
          <Canvas of={small}/>
          <Title>Icons</Title>
          <Subtitle>Leading</Subtitle>
          <h6>Use the `startIcon` Button prop to achieve this.</h6><br/><br/>
          <Story of={leadingIcon} /><br/><br/>
          <Subtitle>Standalone</Subtitle>
          <h6>For standalone icons, pass the icon as a child to the desired button, and apply the `size="small"` prop to the same button if the `<ButtonGroup/>` is size medium.</h6><br/><br/>
          <Story of={standaloneIcon} />
          
        </>
      )
    }
  }
}

export default meta;

export const api = {
  title:'API',
  args: {
    ...meta.args,
  },
}

export const contained = {
  title: 'Contained',
  args: {
    ...meta.args,
  },
}

export const outlined = {
  title:"Outlined",
  args: {
    ...meta.args,
    variant: 'outlined',
  }
}

export const small = {
  title: "Small",
  args: {
    ...meta.args,
    size: 'small'
  }
}

export const leadingIcon = () => (
  <>
      <ButtonGroup>
        <Button
          startIcon={
            <SvgIcon>
              <EditIcon />
            </SvgIcon>
          }
        >
          One
        </Button>
        <Button>Two</Button>
      </ButtonGroup>
      <Box py={1} />
      <ButtonGroup size="small">
        <Button
          startIcon={
            <SvgIcon>
              <EditIcon />
            </SvgIcon>
          }
        >
          One
        </Button>
        <Button>Two</Button>
      </ButtonGroup>
      <Box py={1} />
      <ButtonGroup variant="outlined">
        <Button
          startIcon={
            <SvgIcon>
              <EditIcon />
            </SvgIcon>
          }
        >
          One
        </Button>
        <Button>Two</Button>
      </ButtonGroup>
      <Box py={1} />
      <ButtonGroup variant="outlined" size="small">
        <Button
          startIcon={
            <SvgIcon>
              <EditIcon />
            </SvgIcon>
          }
        >
          One
        </Button>
        <Button>Two</Button>
      </ButtonGroup></>
)

export const standaloneIcon = () => (
  <>
      <ButtonGroup>
        <Button size="small">
          <SvgIcon>
            <EditIcon />
          </SvgIcon>
        </Button>
        <Button>Two</Button>
      </ButtonGroup>
      <Box py={1} />
      <ButtonGroup size="small">
        <Button>
          <SvgIcon>
            <EditIcon />
          </SvgIcon>
        </Button>
        <Button>Two</Button>
      </ButtonGroup>
      <Box py={1} />
      <ButtonGroup variant="outlined">
        <Button size="small">
          <SvgIcon>
            <EditIcon />
          </SvgIcon>
        </Button>
        <Button>Two</Button>
      </ButtonGroup>
      <Box py={1} />
      <ButtonGroup variant="outlined" size="small">
        <Button>
          <SvgIcon>
            <EditIcon />
          </SvgIcon>
        </Button>
        <Button>Two</Button>
      </ButtonGroup>
    </>
)

const splitButton = () => {
    () => {
            const options = [
              { name: "Edit", icon: <EditIcon /> },
              { name: "Delete", icon: <DeleteIcon /> },
              { name: "Copy", icon: <CopyIcon />, disabled: true },
              { name: "Archive", icon: <ArchiveIcon /> }
            ];
            const [open, setOpen] = useStorybookState(false);
            const [selectedIndex, setSelectedIndex] = useStorybookState(0);
            const anchorRef = React.useRef(null);
            const handleClick = () => {
              console.info(`You clicked ${options[selectedIndex].name}`);
            };
            const handleMenuItemClick = (index) => {
              setSelectedIndex(index);
              setOpen(false);
            };
            const handleToggle = () => {
              setOpen((prevOpen) => !prevOpen);
            };
            const handleClose = (event) => {
              if (anchorRef.current?.contains(event.target)) {
                return;
              }
              setOpen(false);
            };
            return (
              <>
                <ButtonGroup
                  variant="contained"
                  ref={anchorRef}
                  aria-label="split button"
                >
                  <Button
                    onClick={handleClick}
                    startIcon={<SvgIcon>{options[selectedIndex].icon}</SvgIcon>}
                  >
                    {options[selectedIndex].name}
                  </Button>
                  <Button
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <SvgIcon>
                      <NavMore />
                    </SvgIcon>
                  </Button>
                </ButtonGroup>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin: "0 0 0",
                        transition: "all 130ms ease-in-out 0s"
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu" autoFocusItem>
                            {options
                              ?.filter((option, index) => !(index === selectedIndex))
                              .map((option, index) => (
                                <MenuItem
                                  tabIndex={0}
                                  disabled={option.disabled}
                                  key={option.name}
                                  selected={
                                    option.name === options[selectedIndex]?.name
                                  }
                                  onClick={() =>
                                    handleMenuItemClick(
                                      options.findIndex(
                                        (element) => element?.name === option.name
                                      )
                                    )
                                  }
                                >
                                  <SvgIcon>{option.icon}</SvgIcon>
                                  <h3>
                                    {option.name}
                                  </h3>
                                </MenuItem>
                              ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </>
            );
          }
}

 const darkTheme = () => (
<>
  <ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup>
  <Button
    startIcon={
      <SvgIcon>
        <EditIcon />
      </SvgIcon>
    }
  >
    One
  </Button>
  <Button>Two</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup>
  <Button size="small">
    <SvgIcon>
      <EditIcon />
    </SvgIcon>
  </Button>
  <Button>Two</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup size="small">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup size="small">
  <Button
    startIcon={
      <SvgIcon>
        <EditIcon />
      </SvgIcon>
    }
  >
    One
  </Button>
  <Button>Two</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup size="small">
  <Button>
    <SvgIcon>
      <EditIcon />
    </SvgIcon>
  </Button>
  <Button>Two</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup variant="outlined">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup variant="outlined">
  <Button
    startIcon={
      <SvgIcon>
        <EditIcon />
      </SvgIcon>
    }
  >
    One
  </Button>
  <Button>Two</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup variant="outlined">
  <Button size="small">
    <SvgIcon>
      <EditIcon />
    </SvgIcon>
  </Button>
  <Button>Two</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup variant="outlined" size="small">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup variant="outlined" size="small">
  <Button
    startIcon={
      <SvgIcon>
        <EditIcon />
      </SvgIcon>
    }
  >
    One
  </Button>
  <Button>Two</Button>
</ButtonGroup>
<Box py={1} />
<ButtonGroup variant="outlined" size="small">
  <Button>
    <SvgIcon>
      <EditIcon />
    </SvgIcon>
  </Button>
  <Button>Two</Button>
</ButtonGroup>
</>
)

 const darkThemeSplitButton = () => {
  const options = [
            { name: "Edit", icon: <EditIcon /> },
            { name: "Delete", icon: <DeleteIcon /> },
            { name: "Copy", icon: <CopyIcon />, disabled: true },
            { name: "Archive", icon: <ArchiveIcon /> }
          ];
          const [open, setOpen] = useStorybookState(false);
          const anchorRef = React.useRef(null);
          const [selectedIndex, setSelectedIndex] = useStorybookStatee(1);
          const handleClick = () => {
            console.info(`You clicked ${options[selectedIndex].name}`);
          };
          const handleMenuItemClick = (event, index) => {
            setSelectedIndex(index);
            setOpen(false);
          };
          const handleToggle = () => {
            setOpen((prevOpen) => !prevOpen);
          };
          const handleClose = (event) => {
            if (anchorRef.current && anchorRef.current.contains(event.target)) {
              return;
            }
            setOpen(false);
          };
          return (
            <>
              <ButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="split button"
              >
                <Button
                  onClick={handleClick}
                  startIcon={<SvgIcon>{options[selectedIndex].icon}</SvgIcon>}
                >
                  {options[selectedIndex].name}
                </Button>
                <Button
                  size="small"
                  aria-controls={open ? "split-button-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
                >
                  <SvgIcon>
                    <NavMore />
                  </SvgIcon>
                </Button>
              </ButtonGroup>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin: "0 0 0",
                      transition: "all 130ms ease-in-out 0s"
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList id="split-button-menu" autoFocusItem>
                          {options.map((option, index) => (
                            <MenuItem
                              tabIndex={0}
                              disabled={option.disabled}
                              key={option.name}
                              selected={index === selectedIndex}
                              onClick={(event) => handleMenuItemClick(event, index)}
                            >
                              <SvgIcon>{option.icon}</SvgIcon>
                              <h3 variant="button-label">
                                {option.name}
                              </h3>
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          );
        }
      