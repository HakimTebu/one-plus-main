
import React, { useState } from "react";

const FaqsHeaderMain = () => {
  // State to manage the open/close state of each accordion item
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to toggle the state of each accordion item
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // List of FAQ items
  const faqItems = [
    {
      question: "What is UAE PASS?",
      answer:
        "UAE PASS is a national digital identity and signature solution that allows you to access various government services online.",
    },
    {
      question: "What do I need to do to register for UAE PASS?",
      answer:
        "To register for UAE PASS, you need to download the UAE PASS app, provide your Emirates ID, and follow the registration steps.",
    },
    {
      question: "How can I change my mobile number?",
      answer:
        "You can change your mobile number by logging into your UAE PASS account and updating your contact information in the settings.",
    },
    {
      question: "If I forgot my UAE PASS PIN code, what should I do?",
      answer:
        "If you forgot your UAE PASS PIN code, you can reset it by following the 'Forgot PIN' process in the UAE PASS app.",
    },
  ];

  return (
    <>
      {/* <div
        data-v-de238826=""
        className="v-sheet v-theme--uaepassDefaultTheme"
        style={{ maxWidth: "1280px", width: "100%" }}
      >
        <main
          data-v-de238826=""
          className="v-main"
          style={{
            "--v-layout-left": "0px",
            "--v-layout-right": "0px",
            "--v-layout-top": "0px",
            "--v-layout-bottom": "0px",
          }}
        >
          <div data-v-9aedc818="" className="public__page-container">
            <div
              data-v-9aedc818=""
              className="faq__header pt-sm-16 pt-6 pb-sm-13 pb-6"
            >
              <div data-v-9aedc818="">
                <p
                  data-v-831627a3=""
                  className="text-color-secondary-secondary font-weight-600 text-body-2 text-uppercase"
                >
                  FAQs
                </p>
                <h1
                  data-v-a2da30b3=""
                  className="text-color-gray-70 font-weight-bold mt-sm-4 mt-1"
                >
                  Frequently Asked Questions
                </h1>
                <p
                  data-v-ca2ff154=""
                  className="text-color-gray-50 mt-sm-6 mt-4 header__page-desc"
                >
                  Find answers to the most asked questions
                </p>
              </div>
            </div>

            <div data-v-6807ea87="" data-v-9aedc818="">
              <div
                data-v-6807ea87=""
                className="v-window v-theme--uaepassDefaultTheme mt-4"
              >
                <div className="v-window__container">
                  <div
                    data-v-6807ea87=""
                    className="v-infinite-scroll v-infinite-scroll--vertical v-infinite-scroll--end"
                  >
                    <div className="v-infinite-scroll__side"></div>

                    <div
                      data-v-6807ea87=""
                      className="v-expansion-panels v-theme--uaepassDefaultTheme v-expansion-panels--variant-default"
                    >
                      {faqItems.map((item, index) => (
                        <div
                          key={index}
                          data-v-6807ea87=""
                          className="v-expansion-panel tabs__expansion-panel mb-sm-4 mb-1"
                        >
                          <div className="v-expansion-panel__shadow"></div>

                          <button
                            data-v-6807ea87=""
                            className="v-expansion-panel-title"
                            type="button"
                            aria-expanded={openAccordion === index}
                            onClick={() => toggleAccordion(index)}
                          >
                            <span className="v-expansion-panel-title__overlay"></span>
                            <div data-v-6807ea87="">{item.question}</div>
                            <span className="v-expansion-panel-title__icon">
                              <i
                                className={`mdi-chevron-${
                                  openAccordion === index ? "up" : "down"
                                } mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default`}
                                aria-hidden="true"
                              ></i>
                            </span>
                          </button>
                          {openAccordion === index && (
                            <div
                              data-v-6807ea87=""
                              className="v-expansion-panel-text"
                            >
                              {item.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="v-infinite-scroll__side">
                      <button
                        data-v-6807ea87=""
                        type="button"
                        className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-outlined mt-sm-12 mt-4"
                      >
                        <span className="v-btn__overlay"></span>
                        <span className="v-btn__underlay"></span>

                        <span className="v-btn__content" data-no-activator="">
                          Load more
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div> */}

      <div
        data-v-de238826=""
        class="v-sheet v-theme--uaepassDefaultTheme"
        style={{ maxWidth: "1280px", width: "100%" }}
      >
        <main
          data-v-de238826=""
          class="v-main"
          style={{
            "--v-layout-left": "0px",
            "--v-layout-right": "0px",
            "--v-layout-top": "0px",
            "--v-layout-bottom": "0px",
          }}
        >
          <div data-v-9aedc818="" class="public__page-container">
            <div
              data-v-9aedc818=""
              class="faq__header pt-sm-16 pt-6 pb-sm-13 pb-6"
            >
              <div data-v-9aedc818="">
                <p
                  data-v-831627a3=""
                  class="text-color-secondary-secondary font-weight-600 text-body-2 text-uppercase"
                >
                  FAQs
                </p>
                <h1
                  data-v-a2da30b3=""
                  class="text-color-gray-70 font-weight-bold mt-sm-4 mt-1"
                >
                  Frequently Asked Questions
                </h1>
                <p
                  data-v-ca2ff154=""
                  class="text-color-gray-50 mt-sm-6 mt-4 header__page-desc"
                >
                  Find answers to the most asked questions
                </p>
              </div>
            </div>
           
            <div data-v-6807ea87="" data-v-9aedc818="">
              <div
                class="v-slide-group v-slide-group--mobile v-tabs v-tabs--horizontal v-tabs--align-tabs-start v-tabs--density-default"
                tabindex="-1"
                role="tablist"
                data-v-6807ea87=""
              >
                <div class="v-slide-group__container">
                  <div class="v-slide-group__content">
                    <button
                      data-v-6807ea87=""
                      type="button"
                      class="v-btn v-tab-item--selected v-tab--selected v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-text v-tab rounded-pill text-color-surface-on-surface-variant tabs__item"
                      tabindex="0"
                      role="tab"
                      aria-selected="true"
                      value="1"
                    >
                      <span class="v-btn__overlay"></span>
                      <span class="v-btn__underlay"></span>

                      <span class="v-btn__content" data-no-activator="">
                        Most Popular
                        <div class="v-tab__slider"></div>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div
                data-v-6807ea87=""
                class="v-window v-theme--uaepassDefaultTheme mt-4"
              >
                <div class="v-window__container">
                  <div
                    data-v-6807ea87=""
                    class="v-infinite-scroll v-infinite-scroll--vertical v-infinite-scroll--end"
                  >
                    <div class="v-infinite-scroll__side"></div>

                    <div
                      data-v-6807ea87=""
                      class="v-expansion-panels v-theme--uaepassDefaultTheme v-expansion-panels--variant-default"
                    >
                      {/* ACCORDION-1 */}
                      <div
                        data-v-6807ea87=""
                        class="v-expansion-panel v-expansion-panel--active tabs__expansion-panel mb-sm-4 mb-1"
                      >
                        <div class="v-expansion-panel__shadow"></div>

                        <button
                          data-v-6807ea87=""
                          class="v-expansion-panel-title v-expansion-panel-title--active"
                          type="button"
                          aria-expanded="true"
                        >
                          <span class="v-expansion-panel-title__overlay"></span>
                          <div data-v-6807ea87="">
                            What is OnePass, and how does it work?
                          </div>
                          <span class="v-expansion-panel-title__icon">
                            <i
                              class="mdi-chevron-up mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                        <div
                          data-v-6807ea87=""
                          class="v-expansion-panel-text"
                          style={{}}
                        >
                          <div class="v-expansion-panel-text__wrapper">
                            <div data-v-6807ea87="">
                              OnePass is a secure digital identity and financial
                              management platform that allows users to verify
                              their identity, store and share documents
                              securely, access AI-powered credit scores, and
                              manage loans and budgets—all while complying with
                              global security and regulatory standards.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ACCORDION-1 */}
                      {/* ACCORDION-2 */}
                      <div
                        data-v-6807ea87=""
                        class="v-expansion-panel v-expansion-panel--active tabs__expansion-panel mb-sm-4 mb-1"
                      >
                        <div class="v-expansion-panel__shadow"></div>

                        <button
                          data-v-6807ea87=""
                          class="v-expansion-panel-title v-expansion-panel-title--active"
                          type="button"
                          aria-expanded="true"
                        >
                          <span class="v-expansion-panel-title__overlay"></span>
                          <div data-v-6807ea87="">Is OnePass secure?</div>
                          <span class="v-expansion-panel-title__icon">
                            <i
                              class="mdi-chevron-up mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                        <div
                          data-v-6807ea87=""
                          class="v-expansion-panel-text"
                          style={{}}
                        >
                          <div class="v-expansion-panel-text__wrapper">
                            <div data-v-6807ea87="">
                              Yes, OnePass meets the highest financial security
                              standards, including end-to-end encryption,
                              biometric authentication, and compliance with
                              global data protection laws to ensure your
                              information remains safe.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ACCORDION-2 */}
                      {/* ACCORDION-3 */}
                      <div
                        data-v-6807ea87=""
                        class="v-expansion-panel v-expansion-panel--active tabs__expansion-panel mb-sm-4 mb-1"
                      >
                        <div class="v-expansion-panel__shadow"></div>

                        <button
                          data-v-6807ea87=""
                          class="v-expansion-panel-title v-expansion-panel-title--active"
                          type="button"
                          aria-expanded="true"
                        >
                          <span class="v-expansion-panel-title__overlay"></span>
                          <div data-v-6807ea87="">Who can use OnePass?</div>
                          <span class="v-expansion-panel-title__icon">
                            <i
                              class="mdi-chevron-up mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                        <div
                          data-v-6807ea87=""
                          class="v-expansion-panel-text"
                          style={{}}
                        >
                          <div class="v-expansion-panel-text__wrapper">
                            <div data-v-6807ea87="">
                              OnePass is designed for individuals, businesses,
                              and financial institutions looking for secure
                              identity verification, credit scoring, and
                              financial management tools. Whether you're an
                              individual seeking secure authentication or a
                              business needing regulatory-compliant solutions,
                              OnePass has you covered.
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ACCORDION-3 */}
                    </div>

                    <div class="v-infinite-scroll__side">
                      <button
                        data-v-6807ea87=""
                        type="button"
                        class="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-outlined mt-sm-12 mt-4"
                      >
                        <span class="v-btn__overlay"></span>
                        <span class="v-btn__underlay"></span>

                        <span class="v-btn__content" data-no-activator="">
                          Load more
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FaqsHeaderMain;



