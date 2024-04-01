import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, FormGroup } from "@mui/material";
// Digital HIG React components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card, { CardDivider } from "@iccc/mui/dist/card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@iccc/mui/dist/circular-progress";
import CompleteIcon from "@iccc/icon/lib/build/display-icons/complete";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import IconButton from "@iccc/mui/dist/icon-button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import LinearProgress, {
  LinearProgressLabel
} from "@iccc/mui/dist/linear-progress";
import Link from "@mui/material/Link";
import Modal from "@iccc/mui/dist/modal";
import Pagination from "@mui/material/Pagination";
import Radio from "@iccc/mui/dist/radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@iccc/mui/dist/select";
import Skeleton from "@mui/material/Skeleton";
import SvgAlert from "@iccc/icon/lib/build/display-icons/alert";
import {
  Building,
  Calendar,
  CaretRight,
  CtaArrowRight,
  CtaArrowRightSolid,
  PlaySolid,
  Sync
} from "@iccc/icon";
import SvgIcon from "@mui/material/SvgIcon";
import Table from "@iccc/mui/dist/table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@iccc/mui/dist/table-head";
import TableRow from "@iccc/mui/dist/table-row";
import Tabs from "@iccc/mui/dist/tabs";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@iccc/mui/dist/typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { PageContainer } from "../common";

export const ReactComponents = ({ theme }) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("modal");
  const closeModal = () => setOpen(false);
  const openModal = (type) => {
    setModalType(type);
    setOpen(true);
  };

  const [value, setValue] = React.useState(20);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const ModalContent = () => {
    switch (modalType) {
      case "modal":
        return (
          <Typography component="span">
            Feugiat elementum ut amet in. Commodo, placerat sagittis, laoreet
            sagittis arcu id. Fringilla sit amet a fermentum lacus mi mauris
            lectus. Ipsum posuere eu velit id malesuada volutpat sapien montes,
            nisl. Quisque tortor diam ut eu tempor tincidunt mi. Etiam lacinia
            massa molestie ornare cursus enim. Aliquet dignissim mauris, diam
            aliquam. Odio at eros, parturient felis dui feugiat at.
          </Typography>
        );
      case "lightbox":
        return (
          <img
            src="https://swc.autodesk.com/pharmacopeia/img/placeholders/960x640.png"
            alt="placeholder"
          />
        );
      case "alert":
        return "Mollis blandit etiam faucibus porta lectus. Ultricies venenatis ullamcorper tristique dignissim faucibus viverra semper elementum est.";
      default:
        return null;
    }
  };

  const [selectedButton, setSelectedButton] = useState(0);
  const handleChangeSegmentedControl = (event, newValue) => {
    if (newValue !== null) {
      setSelectedButton(newValue);
    }
  };

  const ModalActions = (
    <div>
      <span className="dhig-mr-5">
        <Button variant="text" onClick={closeModal}>
          Secondary
        </Button>
      </span>
      <Button onClick={closeModal}>Primary action</Button>
    </div>
  );

  return (
    <PageContainer
      additionalClassnames={theme.name === "dark" ? "dark-wrapper" : ""}
    >
      <ThemeProvider theme={createTheme(theme.themeBase)}>
        <Typography variant="headline-medium">
          React components set over a {theme.name} background
        </Typography>
        <Typography className="dhig-my-4">Button</Typography>
        <Button>Contained</Button>{" "}
        <Button
          startIcon={
            <SvgIcon fontSize="medium">
              <Sync />
            </SvgIcon>
          }
        >
          Leading icon
        </Button>{" "}
        <Button
          endIcon={
            <SvgIcon fontSize="medium">
              <Sync />
            </SvgIcon>
          }
        >
          Trailing icon
        </Button>
        <p />
        <Button variant="outlined">Outlined</Button>{" "}
        <Button
          variant="outlined"
          startIcon={
            <SvgIcon fontSize="medium">
              <Sync />
            </SvgIcon>
          }
        >
          Leading icon
        </Button>{" "}
        <Button
          variant="outlined"
          endIcon={
            <SvgIcon fontSize="medium">
              <Sync />
            </SvgIcon>
          }
        >
          Trailing icon
        </Button>
        <p />
        <Button variant="text">Text</Button>
        <Button
          variant="text"
          startIcon={
            <SvgIcon fontSize="medium">
              <Sync />
            </SvgIcon>
          }
        >
          Leading icon
        </Button>
        <Button
          variant="text"
          endIcon={
            <SvgIcon fontSize="medium">
              <Sync />
            </SvgIcon>
          }
        >
          Trailing icon
        </Button>
        <Typography className="dhig-my-4">Icon button</Typography>
        <IconButton>
          <SvgIcon>
            <Sync />
          </SvgIcon>
        </IconButton>{" "}
        <IconButton variant="outlined">
          <SvgIcon>
            <Sync />
          </SvgIcon>
        </IconButton>{" "}
        <IconButton variant="text">
          <SvgIcon>
            <Sync />
          </SvgIcon>
        </IconButton>
        <Typography className="dhig-my-4">Text link</Typography>
        <Link>Text link</Link>
        <Typography className="dhig-my-4">Divider</Typography>
        <Divider />
        <Typography className="dhig-my-4">Strong divider</Typography>
        <Divider light={false} />
        <Typography className="dhig-my-4">Tabs</Typography>
        <Tabs
          ariaLabel="DHIG tabs"
          tabProperties={[
            {
              label: "Tab 1"
            },
            {
              label: "Tab 2"
            },
            {
              label: "Tab 3"
            },
            {
              disabled: true,
              label: "Tab 4 (disabled)"
            }
          ]}
        />
        <Typography className="dhig-my-4">Card</Typography>
        <div className="dhig-grid dhig-grid-cols-1 md:dhig-grid-cols-2 lg:dhig-grid-cols-3 dhig-gap-4 dhig-py-2">
          <CardActionArea href="#">
            <Card>
              <CardContent>
                <Typography sx={{ mb: 3 }} variant="eyebrow">
                  Eyebrow
                </Typography>
                <Typography sx={{ mb: 3 }} variant="headline-medium">
                  Headline ut risus sed risus pellentesque at.
                </Typography>
                <Typography className="dhig-my-4">
                  Sit nulla leo eu vestibulum fermentum aliquam suspendisse
                  tortor. Egestas amet aliquam euismod lobortis ac eget
                  placerat.
                </Typography>
              </CardContent>
              <CardDivider />
              <CardActions>
                <Button
                  variant="link-button"
                  href="#"
                  sx={{
                    '& [class*="MuiSvgIcon-root"]:nth-of-type(2), &:hover [class*="MuiSvgIcon-root"]:nth-of-type(1), &:focus-visible [class*="MuiSvgIcon-root"]:nth-of-type(1), &:active [class*="MuiSvgIcon-root"]:nth-of-type(1)':
                      {
                        display: "none"
                      },
                    '&:hover [class*="MuiSvgIcon-root"]:nth-of-type(2), &:focus-visible [class*="MuiSvgIcon-root"]:nth-of-type(2), &:active [class*="MuiSvgIcon-root"]:nth-of-type(2)':
                      {
                        display: "block"
                      }
                  }}
                  startIcon={
                    <>
                      <SvgIcon fontSize="medium">
                        <CtaArrowRight />
                      </SvgIcon>
                      <SvgIcon fontSize="medium">
                        <CtaArrowRightSolid />
                      </SvgIcon>
                    </>
                  }
                >
                  Single action
                </Button>
              </CardActions>
            </Card>
          </CardActionArea>
          <Card>
            <CardMedia
              image="https://swc.autodesk.com/pharmacopeia/img/placeholders/960x640.png"
              alt="Alt text"
            />
            <CardContent>
              <Typography sx={{ mb: 3 }} variant="eyebrow">
                Eyebrow
              </Typography>
              <Typography sx={{ mb: 3 }} variant="headline-medium">
                Headline ut risus sed risus pellentesque at.
              </Typography>
              <Typography className="dhig-my-4">
                Sit nulla leo eu vestibulum fermentum aliquam suspendisse
                tortor. Egestas amet aliquam euismod lobortis ac eget placerat.
              </Typography>
            </CardContent>
            <CardDivider />
            <CardActions>
              <Button
                variant="link-button"
                href="#"
                sx={{
                  '& [class*="MuiSvgIcon-root"]:nth-of-type(2), &:hover [class*="MuiSvgIcon-root"]:nth-of-type(1), &:focus-visible [class*="MuiSvgIcon-root"]:nth-of-type(1), &:active [class*="MuiSvgIcon-root"]:nth-of-type(1)':
                    {
                      display: "none"
                    },
                  '&:hover [class*="MuiSvgIcon-root"]:nth-of-type(2), &:focus-visible [class*="MuiSvgIcon-root"]:nth-of-type(2), &:active [class*="MuiSvgIcon-root"]:nth-of-type(2)':
                    {
                      display: "block"
                    }
                }}
                startIcon={
                  <>
                    <SvgIcon fontSize="medium">
                      <CtaArrowRight />
                    </SvgIcon>
                    <SvgIcon fontSize="medium">
                      <CtaArrowRightSolid />
                    </SvgIcon>
                  </>
                }
              >
                Multiple actions
              </Button>
              <Button
                variant="link-button"
                href="#"
                sx={{
                  '& [class*="MuiSvgIcon-root"]:nth-of-type(2), &:hover [class*="MuiSvgIcon-root"]:nth-of-type(1), &:focus-visible [class*="MuiSvgIcon-root"]:nth-of-type(1), &:active [class*="MuiSvgIcon-root"]:nth-of-type(1)':
                    {
                      display: "none"
                    },
                  '&:hover [class*="MuiSvgIcon-root"]:nth-of-type(2), &:focus-visible [class*="MuiSvgIcon-root"]:nth-of-type(2), &:active [class*="MuiSvgIcon-root"]:nth-of-type(2)':
                    {
                      display: "block"
                    }
                }}
                startIcon={
                  <>
                    <SvgIcon fontSize="medium">
                      <CtaArrowRight />
                    </SvgIcon>
                    <SvgIcon fontSize="medium">
                      <CtaArrowRightSolid />
                    </SvgIcon>
                  </>
                }
              >
                Multiple actions
              </Button>
            </CardActions>
          </Card>
        </div>
        <Typography className="dhig-my-4">Modal</Typography>
        <Button onClick={() => openModal("modal")}>
          Click to open {theme.name} modal
        </Button>{" "}
        <Button onClick={() => openModal("alert")}>
          Click to open alert modal
        </Button>{" "}
        <Button onClick={() => openModal("lightbox")}>
          Click to open lightbox modal
        </Button>
        <Modal
          actions={ModalActions}
          aria-describedby="dhig-modal-description"
          aria-labelledby="dhig-modal-title"
          content={ModalContent()}
          handleClose={closeModal}
          open={open}
          title={modalType === "alert" ? "Alert" : "Default modal"}
          type={modalType}
          AlertIcon={modalType === "alert" ? CompleteIcon : null}
        />
        <Typography className="dhig-my-4">Text-input</Typography>
        <FormControl fullWidth id="undefined-label">
          <InputLabel shrink> Text input label </InputLabel>
          <Input />
        </FormControl>
        <Typography className="dhig-my-4">Checkbox</Typography>
        <FormControl
          component="fieldset"
          label="Checkbox"
          InputLabelProps={{
            component: "legend"
          }}
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Default" />
            <FormControlLabel
              control={<Checkbox />}
              label="Disabled"
              disabled
            />
            <FormControlLabel
              control={<Checkbox indeterminate />}
              label="Indeterminate"
            />
            <FormControlLabel control={<Checkbox />} label="Error" error />
          </FormGroup>
        </FormControl>
        <Typography className="dhig-my-4">Radio</Typography>
        <FormControl component="fieldset">
          <InputLabel component="legend">Radio group</InputLabel>
          <RadioGroup>
            <FormControlLabel control={<Radio />} value="one" label="One" />
            <FormControlLabel control={<Radio />} value="two" label="Two" />
            <FormControlLabel control={<Radio />} value="three" label="Three" />
          </RadioGroup>
        </FormControl>
        <Typography className="dhig-my-4">Select</Typography>
        <FormControl fullWidth id="select-id-default" variant="outlined">
          <InputLabel htmlFor="select-quiet">
            Select label
            <Typography variant="smallprint" component="span">
              (optional)
            </Typography>
          </InputLabel>
          <Select
            id="select-id-default"
            onChange={handleChange}
            options={[
              {
                children: "Beton brut",
                value: 1
              },
              {
                children: "Carbon-negative rubber",
                value: 2
              },
              {
                children: "Dark marble",
                value: 3
              },
              {
                children: "Durable bamboo",
                value: 4
              },
              {
                children: "Frosted glass",
                value: 5
              },
              {
                children: "Ten",
                value: 10
              },
              {
                children: "Eleven",
                value: 11
              },
              {
                children: "Twelve",
                value: 12
              },
              {
                children: "Thirteen",
                value: 13
              },
              {
                children: "Fourteen",
                value: 14
              },
              {
                children: "Fifteen",
                value: 15
              },
              {
                children: "Sixteen",
                value: 16
              },
              {
                children: "Seventeen",
                value: 17
              },
              {
                children: "Eighteen",
                value: 18
              },
              {
                children: "Nineteen",
                value: 19
              },
              {
                children: "Twenty",
                value: 20
              }
            ]}
            defaultValue={value}
            value={value}
          />
        </FormControl>
        <Typography className="dhig-my-4">Skeleton</Typography>
        <Skeleton width="200px" height="200px" />
        <Typography className="dhig-my-4">Circular progress</Typography>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "40px" }}>
            <CircularProgress variant="determinate" value={25} />
          </div>
          <div style={{ marginRight: "40px" }}>
            <CircularProgress
              size="medium"
              label="medium"
              variant="determinate"
              value={25}
            />
          </div>
          <div>
            <CircularProgress
              size="large"
              label="large"
              variant="determinate"
              value={25}
            />
          </div>
        </div>
        <Typography className="dhig-my-4">Linear progress</Typography>
        <LinearProgress size="medium">
          <LinearProgressLabel size="medium" label="medium" />
        </LinearProgress>
        <Typography className="dhig-my-4">Typography</Typography>
        <Typography variant="display">Variant: display</Typography>
        <Typography variant="headline-medium">
          Variant: headline-medium
        </Typography>
        <Typography variant="pull-quote-medium">
          Variant: pull-quote-medium
        </Typography>
        <Typography variant="short-copy-small">
          Variant: short-copy-small
        </Typography>
        <Typography variant="eyebrow">Variant: eyebrow</Typography>
        <Typography color="ink-on-background">
          Color: ink-on-background
        </Typography>
        <Typography color="ink-error">Color: ink-error</Typography>
        <Typography color="ink-on-background-60">
          Color: ink-on-background-60
        </Typography>
        <Typography color="text-link-loud">Color: text-link-loud</Typography>
        <Typography color="text-link-loud-hover">
          Color: text-link-loud-hover
        </Typography>
        <Typography color="text-link-loud-pressed">
          Color: text-link-loud-pressed
        </Typography>
        <Typography className="dhig-my-4">
          Icons (<Link href="dpe/iccc#/ref-app/icons">how to use</Link>)
        </Typography>
        <SvgIcon>
          <PlaySolid />
        </SvgIcon>{" "}
        <SvgIcon fontSize="medium">
          <PlaySolid />
        </SvgIcon>{" "}
        <SvgIcon fontSize="large">
          <PlaySolid />
        </SvgIcon>{" "}
        <SvgIcon>
          <Calendar />
        </SvgIcon>{" "}
        <SvgIcon fontSize="medium">
          <Calendar />
        </SvgIcon>{" "}
        <SvgIcon fontSize="large">
          <Calendar />
        </SvgIcon>{" "}
        <SvgIcon>
          <Building />
        </SvgIcon>{" "}
        <SvgIcon fontSize="medium">
          <Building />
        </SvgIcon>{" "}
        <SvgIcon fontSize="large">
          <Building />
        </SvgIcon>{" "}
        <SvgIcon>
          <SvgAlert />
        </SvgIcon>{" "}
        <SvgIcon>
          <SvgAlert />
        </SvgIcon>{" "}
        <SvgIcon fontSize="large">
          <SvgAlert />
        </SvgIcon>{" "}
        <Typography className="dhig-my-4">Segmented control</Typography>
        <ToggleButtonGroup
          exclusive
          onChange={handleChangeSegmentedControl}
          value={selectedButton}
        >
          <ToggleButton value={0}>Cursus quis</ToggleButton>
          <ToggleButton value={1}>Condimentum porttitor</ToggleButton>
          <ToggleButton value={2}>Integer nisl</ToggleButton>
          <ToggleButton disabled value={3}>
            Disabled
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography className="dhig-my-4">Panel list</Typography>
        <Table loud bordered verticalAlignment="center">
          <TableHead
            headCells={[
              {
                id: "new",
                label: "",
                disableInteractions: true
              },
              {
                id: "avatar",
                label: "",
                disableInteractions: true
              },
              {
                id: "name",
                label: "Name"
              },
              {
                id: "calories",
                label: "Calories"
              },
              {
                id: "fat",
                label: "Fat (g)"
              },
              {
                id: "carbs",
                label: "Carbs (g)"
              },
              {
                id: "protein",
                label: "Protein (g)"
              },
              {
                id: "icon",
                label: "",
                disableInteractions: true
              }
            ]}
          />
          <TableBody>
            <TableRow>
              <TableCell
                sx={{
                  width: 6,
                  padding: `0 4px`
                }}
              >
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    borderRadius: "50%",
                    background: "#5F60FF"
                  }}
                />
              </TableCell>
              <TableCell>
                <Avatar src="" />
              </TableCell>
              <TableCell>
                <Typography variant="headline-smaller">Cupcake</Typography>
                <Typography
                  color="ink-on-background-60"
                  variant="body-copy-small"
                >
                  Lorem ipsum
                </Typography>
              </TableCell>
              <TableCell>305</TableCell>
              <TableCell>3.7</TableCell>
              <TableCell>67</TableCell>
              <TableCell>4.3</TableCell>
              <TableCell>
                <SvgIcon fontSize="medium">
                  <CaretRight />
                </SvgIcon>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  width: 6,
                  padding: `0 4px`
                }}
              />
              <TableCell>
                <Avatar src="" />
              </TableCell>
              <TableCell>
                <Typography variant="headline-smaller">Donut</Typography>
                <Typography
                  color="ink-on-background-60"
                  variant="body-copy-small"
                >
                  Dolor sit amet
                </Typography>
              </TableCell>
              <TableCell>452</TableCell>
              <TableCell>25</TableCell>
              <TableCell>51</TableCell>
              <TableCell>4.9</TableCell>
              <TableCell>
                <SvgIcon fontSize="medium">
                  <CaretRight />
                </SvgIcon>
              </TableCell>
            </TableRow>
            <TableRow activated>
              <TableCell
                sx={{
                  width: 6,
                  padding: `0 4px`
                }}
              />
              <TableCell>
                <Avatar src="" />
              </TableCell>
              <TableCell>
                <Typography variant="headline-smaller">Activated</Typography>
                <Typography
                  color="ink-on-background-60"
                  variant="body-copy-small"
                >
                  I&apos;m activated
                </Typography>
              </TableCell>
              <TableCell>213</TableCell>
              <TableCell>17.4</TableCell>
              <TableCell>9</TableCell>
              <TableCell>20</TableCell>
              <TableCell>
                <SvgIcon fontSize="medium">
                  <CaretRight />
                </SvgIcon>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  width: 6,
                  padding: `0 4px`
                }}
              />
              <TableCell>
                <Avatar src="" />
              </TableCell>
              <TableCell>
                <Typography variant="headline-smaller">Honeycomb</Typography>
              </TableCell>
              <TableCell>408</TableCell>
              <TableCell>3.2</TableCell>
              <TableCell>87</TableCell>
              <TableCell>6.5</TableCell>
              <TableCell>
                <SvgIcon fontSize="medium">
                  <CaretRight />
                </SvgIcon>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  width: 6,
                  padding: `0 4px`
                }}
              />
              <TableCell>
                <Avatar src="" />
              </TableCell>
              <TableCell>
                <Typography variant="headline-smaller">
                  Ice cream sandwich
                </Typography>
                <Typography
                  color="ink-on-background-60"
                  variant="body-copy-small"
                >
                  Fugiat nisi pariatur
                </Typography>
              </TableCell>
              <TableCell>237</TableCell>
              <TableCell>9</TableCell>
              <TableCell>37</TableCell>
              <TableCell>4.3</TableCell>
              <TableCell>
                <SvgIcon fontSize="medium">
                  <CaretRight />
                </SvgIcon>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{
                  width: 6,
                  padding: `0 4px`
                }}
              />
              <TableCell>
                <Avatar src="" />
              </TableCell>
              <TableCell>
                <Typography variant="headline-smaller">Jelly Bean</Typography>
              </TableCell>
              <TableCell>375</TableCell>
              <TableCell>0</TableCell>
              <TableCell>94</TableCell>
              <TableCell>0</TableCell>
              <TableCell>
                <SvgIcon fontSize="medium">
                  <CaretRight />
                </SvgIcon>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Pagination count="10" sx={{ mt: 3 }} />
      </ThemeProvider>
    </PageContainer>
  );
};

ReactComponents.propTypes = {
  theme: PropTypes.any
};
