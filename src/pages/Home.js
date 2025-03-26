import React from "react";
import Header from "../components/header/Header";
import Sections from "../components/Sections";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div data-new-gr-c-s-check-loaded="14.1226.0" data-gr-ext-installed>
      {/* OTHERS */}
      <div class="uw-s10-bottom-ruler-guide"></div>
      <div class="uw-s10-right-ruler-guide"></div>
      <div class="uw-s10-left-ruler-guide"></div>
      <div class="uw-s10-reading-guide__arrow"></div>
      <div class="uw-s12-tooltip" aria-hidden="true"></div>
      {/* OTHERS */}
      <div id="__nuxt" data-v-app>
        <div class="v-application v-theme--uaepassDefaultTheme v-layout v-layout--full-height v-locale--is-ltr bg-white">
          <div class="v-application__wrap">
            <main
              class="v-main"
              style={{
                "--v-layout-left": "0px",
                "--v-layout-right": "0px",
                "--v-layout-top": "0px",
                "--v-layout-bottom": "0px",
              }}
            >
              <Header />
              <Sections />
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
