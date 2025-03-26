import React from "react";
import AboutNav from "../components/about/AboutNav";
import AboutHeader from "../components/about/AboutHeader";
import Footer from "../components/Footer";
import SupportHeaderMain from "../components/support/SupportHeaderMain";

const Support = () => {
  return (
    <div data-new-gr-c-s-check-loaded="14.1226.0" data-gr-ext-installed>
      
      <div id="__nuxt" data-v-app>
        <div data-v-de238826 class>
          <div
            data-v-de238826
            class="v-application v-theme--uaepassDefaultTheme v-layout v-layout--full-height v-locale--is-ltr bg-white overflow-x-auto"
          >
            <div class="v-application__wrap">
              <AboutNav />
              <AboutHeader />
              <SupportHeaderMain />

              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
