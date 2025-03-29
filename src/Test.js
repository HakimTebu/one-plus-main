{
  /* MOBILE */
}
{
  isMenuOpen && (
    <div
      data-v-6ca6b6e6=""
      data-v-523525b0=""
      // class="mobile-header d-sm-none mobile-header--transparent"
      class={`mobile-header d-sm-none mobile-header--transparent mobile__menu ${
        isMenuOpen ? "active" : ""
      }`}
    >
      <div
        data-v-34310377=""
        data-v-6ca6b6e6=""
        class="d-flex justify-space-between align-center"
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
            class="v-responsive v-img v-img--booting white-logo"
            aria-label="UAE Pass logo"
            role="img"
            style={{ height: "36px", width: "126px" }}
          >
            <div class="v-responsive__sizer"></div>
          </div>
        </a>
        <div data-v-34310377="" class="d-sm-flex d-none transparent">
          <a
            data-v-34310377=""
            class="link link--active cursor-pointer"
            aria-label="Home"
            custom-title="Home"
            tabindex="0"
          >
            Home
            <div data-v-34310377="" class="link__border mt-2"></div>
          </a>
          <a
            data-v-34310377=""
            class="link ms-md-8 ms-4 cursor-pointer"
            aria-label="See Kiosk Locations"
            custom-title="Kiosk Locations"
            tabindex="0"
          >
            Kiosk Locations
            <div data-v-34310377="" class="link__border mt-2"></div>
          </a>
          <a
            data-v-34310377=""
            class="link ms-md-8 ms-4 cursor-pointer"
            aria-label="See our partners"
            custom-title="Partners"
            tabindex="0"
          >
            Partners
            <div data-v-34310377="" class="link__border mt-2"></div>
          </a>
          <a
            data-v-34310377=""
            class="link ms-md-8 ms-4 cursor-pointer"
            aria-label="Developers"
            custom-title="Developers"
            tabindex="0"
          >
            Developers
            <div data-v-34310377="" class="link__border mt-2"></div>
          </a>
          <a
            data-v-34310377=""
            class="link cursor-pointer"
            aria-label="About Us"
            custom-title="About"
            tabindex="0"
            style={{ display: "none" }}
          >
            About
            <div data-v-34310377="" class="link__border mt-2"></div>
          </a>
          <a
            data-v-34310377=""
            class="link ms-9 cursor-pointer"
            aria-label="pages.ariafaq."
            custom-title="FAQs"
            tabindex="0"
            style={{ display: "none" }}
          >
            FAQs
            <div data-v-34310377="" class="link__border mt-2"></div>
          </a>
          <a
            data-v-34310377=""
            class="link ms-9 cursor-pointer"
            aria-label="Ask for support"
            custom-title="Support"
            tabindex="0"
            style={{ display: "none" }}
          >
            Support
            <div data-v-34310377="" class="link__border mt-2"></div>
          </a>
        </div>
        <div data-v-34310377="" class="d-flex align-center">
          <button
            data-v-34310377=""
            type="button"
            class="v-btn v-btn--elevated v-btn--icon v-theme--uaepassDefaultTheme v-btn--density-compact v-btn--variant-elevated mx-1 uaepass-accessibility"
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
            <span class="v-btn__overlay"></span>
            <span class="v-btn__underlay"></span>

            <span class="v-btn__content" data-no-activator="">
              <i
                data-v-34310377=""
                class="uaepass-accessiblity mdi v-icon notranslate v-theme--uaepassDefaultTheme"
                aria-hidden="true"
                alt="weelchair"
                style={{ fontSize: "30px", height: "30px", width: "30px" }}
              ></i>
            </span>
          </button>
          <i
            data-v-34310377=""
            class="mdi-menu mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white v-icon--clickable d-sm-none mx-2"
            role="button"
            aria-hidden="false"
            tabindex="0"
            aria-label="button"
            data-uw-rm-empty-ctrl=""
            onClick={toggleMenu}
          ></i>
          <button
            data-v-34310377=""
            type="button"
            class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal d-none d-sm-flex"
          >
            <span class="v-btn__overlay"></span>
            <span class="v-btn__underlay"></span>

            <span class="v-btn__content" data-no-activator="">
              Login
            </span>
          </button>
        </div>
      </div>
      <div
        data-v-6ca6b6e6=""
        class="position-relative d-flex flex-column justify-space-between h-100"
      >
        <div data-v-6ca6b6e6="" class="d-flex flex-column">
          <a
            data-v-6ca6b6e6=""
            aria-label="Home"
            class="mobile-header__nav cursor-pointer"
            tabindex="0"
          >
            Home
          </a>
          <a
            data-v-6ca6b6e6=""
            aria-label="See Kiosk Locations"
            class="mobile-header__nav cursor-pointer"
            tabindex="0"
          >
            Kiosk Locations
          </a>
          <a
            data-v-6ca6b6e6=""
            aria-label="See our partners"
            class="mobile-header__nav cursor-pointer"
            tabindex="0"
          >
            Partners
          </a>
          <a
            data-v-6ca6b6e6=""
            aria-label="Developers"
            class="mobile-header__nav cursor-pointer"
            tabindex="0"
          >
            Developers
          </a>
          <a
            data-v-6ca6b6e6=""
            aria-label="About Us"
            class="mobile-header__nav cursor-pointer"
            tabindex="0"
          >
            About
          </a>
          <a
            data-v-6ca6b6e6=""
            aria-label="pages.ariafaq."
            class="mobile-header__nav cursor-pointer"
            tabindex="0"
          >
            FAQs
          </a>
          <a
            data-v-6ca6b6e6=""
            aria-label="Ask for support"
            class="mobile-header__nav cursor-pointer"
            tabindex="0"
          >
            Support
          </a>
          <a
            data-v-6ca6b6e6=""
            href="#"
            class="mobile-header__nav"
            aria-label="change language"
            tabindex="0"
            data-uw-rm-brl="PR"
            data-uw-original-href="https://uaepass.ae/#"
          >
            <i
              data-v-6ca6b6e6=""
              class="mdi-web mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2"
              aria-hidden="true"
            ></i>{" "}
            Language
          </a>
        </div>
        <button
          data-v-6ca6b6e6=""
          type="button"
          class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-flat mobile-header__login"
        >
          <span class="v-btn__overlay"></span>
          <span class="v-btn__underlay"></span>

          <span class="v-btn__content" data-no-activator="">
            Login
          </span>
        </button>
      </div>
    </div>
  );
}



// "build": "react-scripts build"


<div
  data-v-34310377=""
  data-v-523525b0=""
  className="d-flex justify-space-between align-center"
>
  {/* LOGO-STARTS-HERE */}
  <Link
    to="/"
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
        src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1742561077/logo_mwu0uv.svg"
        alt="UAE Pass logo"
        style={{}}
        data-uw-rm-alt-original="UAE Pass logo"
        role="img"
        data-uw-rm-alt="ALT"
      />
    </div>
  </Link>
  {/* LOGO-ENDS-HERE */}

  {/* MAKESHIFT-START */}
  <div className="makeshift">
    <Link
      to="/about"
      data-v-34310377=""
      class="makeshift-text cursor-pointer"
      aria-label="Home"
      custom-title="Home"
      tabindex="0"
    >
      About
    </Link>
    <Link
      to="/support"
      data-v-34310377=""
      class="makeshift-text cursor-pointer makeshift-text"
      aria-label="See our partners"
      custom-title="Partners"
      tabindex="0"
    >
      Support
    </Link>
    <Link
      to="/faqs"
      data-v-34310377=""
      class="makeshift-text cursor-pointer"
      aria-label="See Kiosk Locations"
      custom-title="Kiosk Locations"
      tabindex="0"
    >
      Faqs{" "}
    </Link>
  </div>
  {/* MAKESHIFT-END */}

  {/* NAV-CENTER-START */}
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

    <button
      data-v-34310377=""
      type="button"
      className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal d-none d-sm-flex"
    >
      <span className="v-btn__overlay"></span>
      <span className="v-btn__underlay"></span>

      <span className="v-btn__content" data-no-activator="">
        Explore
      </span>
    </button>
  </div>
  {/* NAV-CENTER-END */}
</div>;