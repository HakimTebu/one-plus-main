import React from "react";
import Footer from "../components/Footer";
import AboutNav from "../components/about/AboutNav";
import AboutHeader from "../components/about/AboutHeader";
import FaqsHeaderMain from "../components/Faqs/FaqsHeaderMain";

const Faqs = () => {
  return (
    <body data-new-gr-c-s-check-loaded="14.1226.0" data-gr-ext-installed>
      <div id="__nuxt" data-v-app>
        <div data-v-de238826 class>
          <div
            data-v-de238826
            class="v-application v-theme--uaepassDefaultTheme v-layout v-layout--full-height v-locale--is-ltr bg-white overflow-x-auto"
          >
            <div class="v-application__wrap">
              <AboutNav />
              <AboutHeader />
              <FaqsHeaderMain />
              {/* <AboutHeaderMain /> */}
              {/* <Corp /> */}
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Faqs;
