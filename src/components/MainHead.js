import React from "react";
import { Link } from "react-router-dom";

const MainHead = () => {
  return (
    <div
      data-v-f1abacc5=""
      data-v-1f289850=""
      class="banner full__width-container d-flex flex-md-row flex-column-reverse position-relative text-color-on-primary"
    >
      <div data-v-f1abacc5="" class="banner__content d-flex flex-column">
        <h1 data-v-f1abacc5="" class="text-sm-h3 text-h4 font-weight-bold">
          OnePass
        </h1>
        <h5
          data-v-f1abacc5=""
          class="text-sm-h5 text-subtitle-1 font-weight-600 mt-1"
          data-uw-rm-heading="level"
          role="heading"
          aria-level="2"
        >
          Your Digital Identity & Finance Hub – Secure, Trusted, and Regulated.
        </h5>
        <p
          data-v-f1abacc5=""
          class="text-sm-body-1 text-body-2 mt-lg-6 mt-2 mb-lg-8 mb-sm-6 mb-4"
        >
          OnePass is your all-in-one platform for secure digital identity
          verification, encrypted document storage, AI-driven credit scoring,
          and financial management.
        </p>
        <div
          data-v-a88e803d=""
          data-v-f1abacc5=""
          class="actions d-flex flex-sm-nowrap flex-wrap justify-sm-start justify-center mb-lg-16 mb-8"
        >
          <button
            data-v-a88e803d=""
            type="button"
            class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-lg-4 me-2 mt-sm-0 mt-2 button-color-change-white"
            data-test="sign-button"
          >
            <span class="v-btn__overlay"></span>
            <span class="v-btn__underlay"></span>

            <span class="v-btn__content" data-no-activator="">
              <span
                class="font-weight-600 letter-spacing-0 black-text-change"
                style={{ color: "black!important" }}
              >
                Get Started
              </span>
            </span>
          </button>
          <input
            data-v-5bdf237f=""
            type="file"
            name="upload"
            hidden=""
            accept="application/pdf"
            aria-label="upload file"
            data-uw-rm-form="nfx"
            style={{ display: "none" }}
          />
          <button
            data-v-5bdf237f=""
            type="button"
            class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-lg-4 me-2 mt-sm-0 mt-2 verify__btn button-color-change-white"
          >
            <span class="v-btn__overlay"></span>
            <span class="v-btn__underlay"></span>

            <span class="v-btn__content" data-no-activator="">
              <span
                data-v-5bdf237f=""
                class="font-weight-600 letter-spacing-0 black-text-change"
              >
                Verify Document
              </span>
            </span>
          </button>

          <button
            data-v-a88e803d=""
            type="button"
            class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-text mt-sm-0 mt-2"
            aria-haspopup="dialog"
            aria-expanded="false"
          >
            <span class="v-btn__overlay"></span>
            <span class="v-btn__underlay"></span>
            <Link to="" class="font-weight-600 letter-spacing-0 links-new">
              <span class="v-btn__content" data-no-activator="">
                <i
                  data-v-a88e803d=""
                  class="mdi-play-circle-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2"
                  aria-hidden="true"
                ></i>

                <span
                  data-v-a88e803d=""
                  class="font-weight-600 letter-spacing-0 "
                >
                  Watch Video
                </span>
              </span>
            </Link>
          </button>
        </div>
        <div
          data-v-bcd69873=""
          data-v-f1abacc5=""
          class="logo mt-md-4 mt-0 d-sm-block d-flex flex-column align-center"
        >
          <p data-v-bcd69873="" class="text-body-2">
            In Collaboration With
          </p>
          <div
            data-v-bcd69873=""
            class="d-flex flex-sm-row flex-column align-center mt-4 collaborators__images ga-8"
          >
            <div
              data-v-bcd69873=""
              class="v-responsive v-img logo__dda"
              aria-label="Digital Dubai logo"
              role="img"
              style={{ width: "81px" }}
            >
              <div
                class="v-responsive__sizer"
                style={{ paddingBottom: "38.2716%" }}
              ></div>
              <img
                class="v-img__img v-img__img--contain"
                src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1742639412/citibank_w7w7lf.svg"
                alt="Digital Dubai logo"
                style={{}}
                data-uw-rm-alt-original="Digital Dubai logo"
                role="img"
                data-uw-rm-alt="ALT"
              />
            </div>
            <div
              data-v-bcd69873=""
              class="v-responsive v-img logo__tdra"
              aria-label="TDRA logo"
              role="img"
              style={{ width: "195px" }}
            >
              <div
                class="v-responsive__sizer"
                style={{ paddingBottom: "10.3734%" }}
              ></div>
              <img
                class="v-img__img v-img__img--contain"
                src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1742639411/chase_hu2zb3.svg"
                alt="TDRA logo"
                data-uw-rm-alt-original="TDRA logo"
                role="img"
                data-uw-rm-alt="ALT"
              />
            </div>
            <div
              data-v-bcd69873=""
              class="v-responsive v-img logo__adda"
              aria-label="Adda logo"
              role="img"
              style={{ width: "241px" }}
            >
              <div
                class="v-responsive__sizer"
                style={{ paddingBottom: "24.1026%" }}
              ></div>
              <img
                class="v-img__img v-img__img--contain"
                src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1742639884/Morgan_qmfvpm.svg"
                alt="Adda logo"
                data-uw-rm-alt-original="Adda logo"
                role="img"
                data-uw-rm-alt="ALT"
              />
            </div>
          </div>
        </div>
      </div>
      <div data-v-f1abacc5="" class="banner__images d-flex justify-center">
        <div
          data-v-f1abacc5=""
          class="v-responsive v-img banner__mobile"
          aria-label="mobile uaepass image"
          role="img"
        >
          <div
            class="v-responsive__sizer"
            style={{ paddingBottom: "169.355%" }}
          ></div>
          <img
            class="v-img__img v-img__img--contain"
            src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1742672893/iphone-4_dypzo3.png"
            data-uw-rm-alt-original="mobile uaepass image"
            data-uw-rm-alt="ALT"
          />
        </div>
        <div data-v-f1abacc5="" class="banner__qr-wrapper">
          <div
            data-v-f1abacc5=""
            class="v-responsive v-img banner__qr"
            aria-label="qr code image"
            role="img"
          >
            <div
              class="v-responsive__sizer"
              style={{ paddingBottom: "100%" }}
            ></div>
            <img
              class="v-img__img v-img__img--contain"
              src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1742905627/qr-code_bg0qlz_fquiz1.png"
              alt="qr code image"
              data-uw-rm-alt-original="qr code image"
              data-uw-rm-alt="ALT"
            />
          </div>
          <p
            data-v-f1abacc5=""
            class="text-sm-h5 text-overline font-weight-thin mt-sm-4 mt-2 banner__line-height"
          >
            Download
          </p>
          <p
            data-v-f1abacc5=""
            class="text-sm-h5 text-overline font-weight-bold banner__line-height"
          >
            OnePass
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHead;
