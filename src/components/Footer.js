import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div data-v-f785e284="" data-v-1f289850="" class="footer__wrapper">
      <div
        data-v-f785e284=""
        class="footer__content py-md-16 py-8 px-md-8 px-4 ma-auto"
      >
        <div
          data-v-59322d10=""
          data-v-f785e284=""
          class="d-flex justify-space-between flex-md-row flex-column"
        >
          <h2 data-v-59322d10="" class="footer__description mb-md-0 mb-8">
            Your Digital Identity & Finance Hub – Secure, Trusted, and
            Regulated.
          </h2>
          <div data-v-59322d10="" class="d-flex flex-column">
            <div data-v-59322d10="" class="d-flex">
              <i
                data-v-59322d10=""
                class="mdi-crosshairs-gps mdi v-icon notranslate v-theme--uaepassDefaultTheme text-white"
                aria-hidden="true"
                style={{ fontSize: "18px", height: "18px", width: "18px" }}
              ></i>
              <p data-v-59322d10="" class="footer__uae ps-2">
                United States
              </p>
            </div>
            <div data-v-59322d10="" class="d-flex mt-3">
              <i
                data-v-59322d10=""
                class="mdi-phone mdi v-icon notranslate v-theme--uaepassDefaultTheme text-white"
                aria-hidden="true"
                style={{ fontSize: "18px", height: "18px", width: "18px" }}
              ></i>
              <a
                data-v-59322d10=""
                class="footer__phone ps-2"
                href="tel:600561111"
                style={{ direction: "ltr" }}
                aria-label="call 600561111"
                data-uw-rm-vglnk=""
                uw-rm-vague-link-id="tel:600561111$call 600561111"
              >
                6000 54 1111
              </a>
            </div>
            <div data-v-59322d10="" class="d-flex mt-3">
              <i
                data-v-59322d10=""
                class="mdi-email-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme text-white"
                aria-hidden="true"
                style={{ fontSize: "18px", height: "18px", width: "18px" }}
              ></i>
              <a
                data-v-59322d10=""
                class="footer__mail ps-2"
                href="mailto:support@uaepass.ae"
              >
                support@onepass.com
              </a>
            </div>
          </div>
        </div>
        <hr
          data-v-f785e284=""
          class="v-divider v-theme--uaepassDefaultTheme text-white"
          aria-orientation="horizontal"
          role="separator"
        />
        <div
          data-v-d076b49a=""
          data-v-f785e284=""
          class="d-flex justify-md-space-between flex-md-row flex-column"
        >
          <div data-v-d076b49a="" class="mb-md-0 mb-4 d-flex flex-wrap">
            <Link to="/about"
              data-v-d076b49a=""
              aria-label="About Us"
              class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer"
              tabindex="0"
            >
              About
            </Link>
            <Link to="/faqs"
              data-v-d076b49a=""
              aria-label="Frequently Asked Questions"
              class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer"
              tabindex="0"
            >
              FAQs
            </Link>
            <Link to="/support"
              data-v-d076b49a=""
              aria-label="Ask for support"
              class="footer__link me-lg-12 me-md-8 me-6 cursor-pointer"
              tabindex="0"
            >
              Support
            </Link>
          
            
           
          </div>
          <p data-v-d076b49a="" class="footer__copyright">
            Copyright © 2025 OnePass All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer
