import React from "react";
import { PageContainer, Paragraph } from "../common";

export const Dotcom = () => (
  <>
    <PageContainer additionalClassnames="dhig-theme--light">
      <h3 className="dhig-typography-headline-medium dhig-mt-0">
        Dotcom patterns
      </h3>
      <Paragraph>Examples of dotcom site-specific patterns</Paragraph>
      <div className="dhig-grid dhig-grid-cols-1 md:dhig-grid-cols-3 dhig-gap-4">
        <div className="MuiPaper-root MuiCard-root DhigCard--appearance--default MuiPaper-elevation0 MuiPaper-rounded">
          <div className="MuiCardContent-root">
            <div className="dhig-flex dhig-items-center">
              <img
                className="dhig-flex-shrink-0"
                src="https://swc.autodesk.com/pharmacopeia/svg/icons/v0/icons/actions/chat.svg "
                alt=""
                style={{
                  width: "4rem"
                }}
              />
              <div className="dhig-typography-headline-medium dhig-ml-2">
                Here is the title
              </div>
            </div>
            <div className="dhig-typography-body-copy-medium dhig-mt-4">
              Sit nulla leo eu vestibulum fermentum aliquam suspendisse tortor.
              Egestas amet aliquam euismod lobortis ac eget placerat.
            </div>
          </div>
        </div>
        <div className="MuiPaper-root MuiCard-root DhigCard--appearance--default MuiPaper-elevation0 MuiPaper-rounded">
          <div className="MuiCardContent-root">
            <div className="dhig-flex dhig-items-center">
              <img
                className="dhig-flex-shrink-0"
                src="https://swc.autodesk.com/pharmacopeia/svg/icons/v0/icons/actions/export-move.svg"
                alt=""
                style={{
                  width: "4rem"
                }}
              />
              <div className="dhig-typography-headline-medium dhig-ml-2">
                With a slightly longer title
              </div>
            </div>
            <div className="dhig-typography-body-copy-medium dhig-mt-4">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Integer convallis nunc sed eros volutpat, venenatis lacinia sem
              auctor.
            </div>
          </div>
        </div>
      </div>
      <div
        className="MuiDialog-root"
        role="presentation"
        style={{
          zIndex: 1300
        }}
      >
        <div
          className="MuiDialog-container MuiDialog-scrollPaper"
          role="none presentation"
          tabIndex="-1"
        >
          <div
            aria-describedby="dhig-modal-description"
            aria-labelledby="dhig-modal-title"
            className="MuiPaper-root DhigModal--styleVariant--default DhigModal--type--modal MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiDialog-paperFullWidth MuiPaper-elevation24 MuiPaper-rounded"
            role="dialog"
          >
            <button
              aria-label="close"
              className="MuiButtonBase-root MuiIconButton-root DhigModal--closeButton--default"
              tabIndex="0"
              type="button"
            >
              <span className="MuiIconButton-label">
                <img
                  alt="close button"
                  src="https://swc.autodesk.com/pharmacopeia/svg/icons/v0/icons/utility/cross.svg"
                />
              </span>
            </button>
            <div className="MuiDialogTitle-root DhigModal--styleVariant--default DhigModal--type--modal">
              <img
                src="https://damassets.autodesk.net/content/dam/autodesk/www/product-imagery/lockup-610x66/autocad-lockup-610x66.png"
                alt="Autocad logo"
                style={{ height: "32px" }}
              />
            </div>
            <div className="MuiDialogContent-root DhigModal--styleVariant--default DhigModal--type--modal">
              <span className="dhig-typography-body-copy-medium">
                Product logos can be passed into the header of a modal by
                passing a custom `img` element into the `title` prop. The
                `displayLogo` prop should not be enabled for this
                implementation.
              </span>
            </div>
            <div className="MuiDialogActions-root DhigModal--styleVariant--default DhigModal--type--modal MuiDialogActions-spacing">
              <div>
                <span className="dhig-mr-5">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text"
                    tabIndex="0"
                    type="button"
                  >
                    <span className="MuiButton-label">Secondary</span>
                  </button>
                </span>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained"
                  tabIndex="0"
                  type="button"
                >
                  <span className="MuiButton-label">Primary action</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
    <PageContainer additionalClassnames="dhig-theme--dark">
      <div className="dhig-grid dhig-grid-cols-1 md:dhig-grid-cols-3 dhig-gap-4">
        <div className="MuiPaper-root MuiCard-root DhigCard--appearance--default MuiPaper-elevation0 MuiPaper-rounded">
          <div className="MuiCardContent-root">
            <div className="dhig-flex dhig-items-center">
              <img
                className="dhig-flex-shrink-0"
                src="https://swc.autodesk.com/pharmacopeia/svg/icons/v0/icons/actions/chat.svg "
                alt=""
                style={{
                  filter: "invert(100%)",
                  width: "4rem"
                }}
              />
              <div className="dhig-typography-headline-medium dhig-ml-2">
                Here is the title
              </div>
            </div>
            <div className="dhig-typography-body-copy-medium dhig-mt-4">
              Sit nulla leo eu vestibulum fermentum aliquam suspendisse tortor.
              Egestas amet aliquam euismod lobortis ac eget placerat.
            </div>
          </div>
        </div>
        <div className="MuiPaper-root MuiCard-root DhigCard--appearance--default MuiPaper-elevation0 MuiPaper-rounded">
          <div className="MuiCardContent-root">
            <div className="dhig-flex dhig-items-center">
              <img
                className="dhig-flex-shrink-0"
                src="https://swc.autodesk.com/pharmacopeia/svg/icons/v0/icons/actions/export-move.svg"
                alt=""
                style={{
                  filter: "invert(100%)",
                  width: "4rem"
                }}
              />
              <div className="dhig-typography-headline-medium dhig-ml-2">
                With a slightly longer title
              </div>
            </div>
            <div className="dhig-typography-body-copy-medium dhig-mt-4">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Integer convallis nunc sed eros volutpat, venenatis lacinia sem
              auctor.
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  </>
);
