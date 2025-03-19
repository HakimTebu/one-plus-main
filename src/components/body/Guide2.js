import React from "react";

const Guide2 = () => {
  return (
    <div
      class="uwy userway_p1"
      data-uw-feature-ignore="true"
      data-uw-rm-ignore="true"
      title="Accessibility Menu"
      style="background-color: transparent !important; overflow: initial !important;"
    >
      <div class="userway_buttons_wrapper">
        <div
          class="ulsti hidden userway_dark"
          id="userwayLstIcon"
          aria-label="Translations Menu"
          role="button"
          tabindex="0"
          aria-haspopup="dialog"
          data-uw-s19-ignore=""
          title="Translations Menu"
          style="background: rgb(17, 165, 111) !important;"
        >
          <span class="uiiw"></span>
          <div class="ups">
            <img
              width="43"
              height="43"
              data-uw-rm-ignore=""
              class="si_w"
              aria-hidden="true"
              alt="Spinner: White decorative"
              src="https://cdn.userway.org/widgetapp/images/spin_wh.svg"
            />
          </div>
          <span class="usr lst-spacer"></span>
        </div>
        <div
          class="uai userway_dark hidden"
          id="userwayAccessibilityIcon"
          aria-label="Accessibility Menu"
          role="button"
          tabindex="0"
          aria-haspopup="dialog"
          title="Accessibility Menu"
          style="background: rgb(17, 165, 111) !important;"
        >
          <span class="uiiw">
            <img
              data-uw-rm-ignore=""
              class="ui_w"
              role="presentation"
              alt=""
              src="https://cdn.userway.org/widgetapp/images/body_wh.svg"
            />
          </span>
          <div class="ups">
            <img
              width="43"
              height="43"
              data-uw-rm-ignore=""
              class="si_w"
              aria-hidden="true"
              alt="Spinner: White decorative"
              src="https://cdn.userway.org/widgetapp/images/spin_wh.svg"
            />
          </div>
          <span class="usr"></span>
        </div>
        <div class="uwaw-dictionary-tooltip"></div>
      </div>
      <iframe
        class="uwif userway_p1"
        data-uw-ignore-translate="true"
        name="userway"
        title="UserWay Accessibility Menu"
        style="max-width: 100vw !important; visibility: visible !important; opacity: 1 !important; color-scheme: light !important;"
      ></iframe>
    </div>
  );
};

export default Guide2;
