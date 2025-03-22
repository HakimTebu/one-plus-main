import React, { useState } from "react";
import { GrWheelchair } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    console.log("Toggle menu clicked"); // Check if this logs when you click
    e.stopPropagation(); // Prevent event bubbling
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div
        data-v-523525b0=""
        className="header bg-color-transparent header--transparent"
      >
        <div
          data-v-0cb5a6fb=""
          data-v-523525b0=""
          className="d-none d-sm-flex justify-space-between transparent"
        >
          <div data-v-0cb5a6fb="" className="d-flex" gap="36">
            <a
              data-v-0cb5a6fb=""
              aria-label="Home"
              tabindex="0"
              className="link link--active cursor-pointer"
              style={{ display: "none" }}
            >
              Home
            </a>
            <a
              data-v-0cb5a6fb=""
              aria-label="See Kiosk Locations"
              tabindex="0"
              className="link ms-md-8 ms-4 cursor-pointer"
              style={{ display: "none" }}
            >
              Kiosk Locations
            </a>
            <a
              data-v-0cb5a6fb=""
              aria-label="See our partners"
              tabindex="0"
              className="link ms-md-8 ms-4 cursor-pointer"
              style={{ display: "none" }}
            >
              Partners
            </a>
            <a
              data-v-0cb5a6fb=""
              aria-label="Developers"
              tabindex="0"
              className="link ms-md-8 ms-4 cursor-pointer"
              style={{ display: "none" }}
            >
              Developers
            </a>
            <a
              data-v-0cb5a6fb=""
              aria-label="About Us"
              tabindex="0"
              className="link cursor-pointer"
            >
              About
            </a>
            <a
              data-v-0cb5a6fb=""
              aria-label="pages.ariafaq."
              tabindex="0"
              className="link ms-9 cursor-pointer"
            >
              FAQs
            </a>
            <a
              data-v-0cb5a6fb=""
              aria-label="Ask for support"
              tabindex="0"
              className="link ms-9 cursor-pointer"
            >
              Support
            </a>
          </div>
          <div
            data-v-0cb5a6fb=""
            className="d-flex justify-space-between align-center"
          >
            <button
              data-v-0cb5a6fb=""
              type="button"
              className="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme bg-white v-btn--density-compact v-btn--variant-elevated mx-1 uaepass-accessibility mx-1 uaepass-accessibility"
              id="uaepass-accessibility-trigger"
              data-testid="accessibility-btn"
              style={{ width: "30px", height: "30px" }}
              aria-label="button"
              data-uw-rm-empty-ctrl=""
            >
              <span className="v-btn__overlay"></span>
              <span className="v-btn__underlay"></span>

              <span className="v-btn__content" data-no-activator="">
                <i
                  data-v-0cb5a6fb=""
                  className="mdi mdi-wheelchair-accessibility v-icon notranslate v-theme--uaepassDefaultTheme"
                  aria-hidden="true"
                  alt="weelchair"
                  style={{ fontSize: "30px", height: "30px", width: "30px" }}
                ></i>
              </span>
            </button>
            <button
              data-v-0cb5a6fb=""
              type="button"
              className="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme bg-white v-btn--density-compact v-btn--variant-elevated"
              data-testid="lang-btn"
              text-content="earth"
              name="earth"
              aria-label="change language"
            >
              <span className="v-btn__overlay"></span>
              <span className="v-btn__underlay"></span>

              <span className="v-btn__content" data-no-activator="">
                <i
                  data-v-0cb5a6fb=""
                  className="mdi-web mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default"
                  aria-hidden="true"
                ></i>
              </span>
            </button>
          </div>
        </div>
        <hr
          data-v-523525b0=""
          className="v-divider v-theme--uaepassDefaultTheme d-sm-block d-none transparent"
          aria-orientation="horizontal"
          role="separator"
        />
        <div
          data-v-34310377=""
          data-v-523525b0=""
          className="d-flex justify-space-between align-center"
        >
          <a
            data-v-34310377=""
            href="/"
            aria-label="Home"
            data-uw-rm-brl="PR"
            data-uw-original-href="https://uaepass.ae/"
          >
            <div
              data-v-34310377=""
              className="v-responsive v-img white-logo"
              aria-label="UAE Pass logo"
              role="img"
              style={{ height: "36px", width: "126px" }}
            >
              <div
                className="v-responsive__sizer"
                style={{ paddingBottom: "29.4118%" }}
              ></div>
              {/* LOGO HERE */}
              <img
                className="v-img__img v-img__img--contain"
                src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1742561077/logo-white_ta2dee.svg"
                alt="UAE Pass logo"
                style={{}}
                data-uw-rm-alt-original="UAE Pass logo"
                role="img"
                data-uw-rm-alt="ALT"
              />
            </div>
          </a>
          <div data-v-34310377="" className="d-sm-flex d-none transparent">
            <a
              data-v-34310377=""
              className="link link--active cursor-pointer"
              aria-label="Home"
              custom-title="Home"
              tabindex="0"
            >
              Home
              <div data-v-34310377="" className="link__border mt-2"></div>
            </a>
            <a
              data-v-34310377=""
              className="link ms-md-8 ms-4 cursor-pointer"
              aria-label="See Kiosk Locations"
              custom-title="Kiosk Locations"
              tabindex="0"
            >
              Kiosk Locations
              <div data-v-34310377="" className="link__border mt-2"></div>
            </a>
            <a
              data-v-34310377=""
              className="link ms-md-8 ms-4 cursor-pointer"
              aria-label="See our partners"
              custom-title="Partners"
              tabindex="0"
            >
              Partners
              <div data-v-34310377="" className="link__border mt-2"></div>
            </a>
            <a
              data-v-34310377=""
              className="link ms-md-8 ms-4 cursor-pointer"
              aria-label="Developers"
              custom-title="Developers"
              tabindex="0"
            >
              Developers
              <div data-v-34310377="" className="link__border mt-2"></div>
            </a>
            <a
              data-v-34310377=""
              className="link cursor-pointer"
              aria-label="About Us"
              custom-title="About"
              tabindex="0"
              style={{ display: "none" }}
            >
              About
              <div data-v-34310377="" className="link__border mt-2"></div>
            </a>
            <a
              data-v-34310377=""
              className="link ms-9 cursor-pointer"
              aria-label="pages.ariafaq."
              custom-title="FAQs"
              tabindex="0"
              style={{ display: "none" }}
            >
              FAQs
              <div data-v-34310377="" className="link__border mt-2"></div>
            </a>
            <a
              data-v-34310377=""
              className="link ms-9 cursor-pointer"
              aria-label="Ask for support"
              custom-title="Support"
              tabindex="0"
              style={{ display: "none" }}
            >
              Support
              <div data-v-34310377="" className="link__border mt-2"></div>
            </a>
          </div>

          <div data-v-34310377="" className="d-flex align-center">
            <button
              data-v-34310377=""
              type="button"
              className="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme v-btn--density-compact v-btn--variant-elevated mx-1 uaepass-accessibility"
              id="uaepass-accessibility-trigger"
              data-test="accessibility-btn"
              style={{
                backgroundColor: "rgb(64, 73, 67)",
                color: "rgb(255, 255, 255)",
                caretColor: "rgb(255, 255, 255)",
                width: "30px",
                height: "30px",
                display: "none",
              }}
              aria-label="button"
              data-uw-rm-empty-ctrl=""
            >
              <span className="v-btn__overlay"></span>
              <span className="v-btn__underlay"></span>

              <span className="v-btn__content" data-no-activator="">
                <i
                  data-v-34310377=""
                  className="uaepass-accessiblity mdi v-icon notranslate v-theme--uaepassDefaultTheme"
                  aria-hidden="true"
                  alt="weelchair"
                  style={{ fontSize: "30px", height: "30px", width: "30px" }}
                ></i>
              </span>
            </button>

            <i
              data-v-34310377=""
              className="mdi-menu mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white v-icon--clickable d-sm-none mx-2"
              role="button"
              aria-hidden="false"
              tabindex="0"
              aria-label="Open menu"
              data-uw-rm-empty-ctrl=""
              onClick={toggleMenu}
            ></i>
            {/* <span classNameName="hamburger-menu" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </span> */}
            <button
              data-v-34310377=""
              type="button"
              className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal d-none d-sm-flex"
            >
              <span className="v-btn__overlay"></span>
              <span className="v-btn__underlay"></span>

              <span className="v-btn__content" data-no-activator="">
                Login
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE-SECTION */}

      {isMenuOpen && (
        <div
          data-v-6ca6b6e6=""
          data-v-523525b0=""
          // className="mobile-header d-sm-none mobile-header--transparent mobile-header--expanded"
          className={`mobile-header d-sm-none mobile-header--transparent mobile-header--expanded mobile__menu ${
            isMenuOpen ? "active" : ""
          }`}
        >
          <div
            data-v-34310377=""
            data-v-6ca6b6e6=""
            className="d-flex justify-space-between align-center"
          >
            <a
              data-v-34310377=""
              href="/"
              aria-label="Home"
              data-uw-rm-brl="PR"
              data-uw-original-href="https://uaepass.ae/"
            >
              <div
                data-v-34310377=""
                className="v-responsive v-img white-logo"
                aria-label="UAE Pass logo"
                role="img"
                style={{ height: "36px", width: "126px" }}
              >
                <div
                  className="v-responsive__sizer"
                  style={{ paddingBottom: "29.4118%" }}
                ></div>
                <img
                  className="v-img__img v-img__img--contain"
                  src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1742561077/logo-white_ta2dee.svg"
                  alt="UAE Pass logo"
                  style={{}}
                  data-uw-rm-alt-original="UAE Pass logo"
                  role="img"
                  data-uw-rm-alt="ALT"
                />
              </div>
            </a>
            <div data-v-34310377="" className="d-sm-flex d-none transparent">
              <a
                data-v-34310377=""
                className="link link--active cursor-pointer"
                aria-label="Home"
                custom-title="Home"
                tabindex="0"
              >
                Home
                <div data-v-34310377="" className="link__border mt-2"></div>
              </a>
              <a
                data-v-34310377=""
                className="link ms-md-8 ms-4 cursor-pointer"
                aria-label="See Kiosk Locations"
                custom-title="Kiosk Locations"
                tabindex="0"
              >
                Kiosk Locations
                <div data-v-34310377="" className="link__border mt-2"></div>
              </a>
              <a
                data-v-34310377=""
                className="link ms-md-8 ms-4 cursor-pointer"
                aria-label="See our partners"
                custom-title="Partners"
                tabindex="0"
              >
                Partners
                <div data-v-34310377="" className="link__border mt-2"></div>
              </a>
              <a
                data-v-34310377=""
                className="link ms-md-8 ms-4 cursor-pointer"
                aria-label="Developers"
                custom-title="Developers"
                tabindex="0"
              >
                Developers
                <div data-v-34310377="" className="link__border mt-2"></div>
              </a>
              <a
                data-v-34310377=""
                className="link cursor-pointer"
                aria-label="About Us"
                custom-title="About"
                tabindex="0"
                style={{ display: "none" }}
              >
                About
                <div data-v-34310377="" className="link__border mt-2"></div>
              </a>
              <a
                data-v-34310377=""
                className="link ms-9 cursor-pointer"
                aria-label="pages.ariafaq."
                custom-title="FAQs"
                tabindex="0"
                style={{ display: "none" }}
              >
                FAQs
                <div data-v-34310377="" className="link__border mt-2"></div>
              </a>
              <a
                data-v-34310377=""
                className="link ms-9 cursor-pointer"
                aria-label="Ask for support"
                custom-title="Support"
                tabindex="0"
                style={{ display: "none" }}
              >
                Support
                <div data-v-34310377="" className="link__border mt-2"></div>
              </a>
            </div>
            <div data-v-34310377="" className="d-flex align-center">
              <button
                data-v-34310377=""
                type="button"
                className="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme v-btn--density-compact v-btn--variant-elevated mx-1 uaepass-accessibility not-visible"
                id="uaepass-accessibility-trigger"
                data-test="accessibility-btn"
                aria-label="button"
                data-uw-rm-empty-ctrl=""
                style={{
                  backgroundColor: "rgb(64, 73, 67)",
                  color: "rgb(255, 255, 255)",
                  caretColor: "rgb(255, 255, 255)",
                  width: "30px",
                  height: "30px",
                  display: "none",
                }}
              >
                <span className="v-btn__overlay"></span>
                <span className="v-btn__underlay"></span>

                <span className="v-btn__content" data-no-activator="">
                  <i
                    data-v-34310377=""
                    className="uaepass-accessiblity mdi v-icon notranslate v-theme--uaepassDefaultTheme"
                    aria-hidden="true"
                    alt="weelchair"
                    style={{ fontSize: "30px", height: "30px", width: "30px" }}
                  ></i>
                </span>
              </button>
              <i
                data-v-34310377=""
                className="mdi-close mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white v-icon--clickable d-sm-none mx-2"
                role="button"
                aria-hidden="false"
                tabindex="0"
                aria-label="Close this option"
                data-uw-rm-empty-ctrl=""
                onClick={closeMenu}
              ></i>
              <button
                data-v-34310377=""
                type="button"
                className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal d-none d-sm-flex"
                onClick={closeMenu}
              >
                <span className="v-btn__overlay"></span>
                <span className="v-btn__underlay"></span>

                <span className="v-btn__content" data-no-activator="">
                  Login
                </span>
              </button>
            </div>
          </div>
          <div
            data-v-6ca6b6e6=""
            className="position-relative d-flex flex-column justify-space-between h-100"
          >
            <div data-v-6ca6b6e6="" className="d-flex flex-column">
              <a
                data-v-6ca6b6e6=""
                aria-label="Home"
                className="mobile-header__nav cursor-pointer"
                tabindex="0"
              >
                Home
              </a>
              <a
                data-v-6ca6b6e6=""
                aria-label="See Kiosk Locations"
                className="mobile-header__nav cursor-pointer"
                tabindex="0"
              >
                Kiosk Locations
              </a>
              <a
                data-v-6ca6b6e6=""
                aria-label="See our partners"
                className="mobile-header__nav cursor-pointer"
                tabindex="0"
              >
                Partners
              </a>
              <a
                data-v-6ca6b6e6=""
                aria-label="Developers"
                className="mobile-header__nav cursor-pointer"
                tabindex="0"
              >
                Developers
              </a>
              <a
                data-v-6ca6b6e6=""
                aria-label="About Us"
                className="mobile-header__nav cursor-pointer"
                tabindex="0"
              >
                About
              </a>
              <a
                data-v-6ca6b6e6=""
                aria-label="pages.ariafaq."
                className="mobile-header__nav cursor-pointer"
                tabindex="0"
              >
                FAQs
              </a>
              <a
                data-v-6ca6b6e6=""
                aria-label="Ask for support"
                className="mobile-header__nav cursor-pointer"
                tabindex="0"
              >
                Support
              </a>
              <a
                data-v-6ca6b6e6=""
                href="#"
                className="mobile-header__nav"
                aria-label="change language"
                tabindex="0"
                data-uw-rm-brl="PR"
                data-uw-original-href="https://uaepass.ae/#"
              >
                <i
                  data-v-6ca6b6e6=""
                  className="mdi-web mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2"
                  aria-hidden="true"
                ></i>{" "}
                Language
              </a>
            </div>
            <button
              data-v-6ca6b6e6=""
              type="button"
              className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-flat mobile-header__login"
            >
              <span className="v-btn__overlay"></span>
              <span className="v-btn__underlay"></span>

              <span className="v-btn__content" data-no-activator="">
                Login
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
