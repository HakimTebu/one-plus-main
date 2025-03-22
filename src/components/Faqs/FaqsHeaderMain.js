
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
                      {faqItems.map((item, index) => (
                        <div
                          key={index}
                          data-v-6807ea87=""
                          class="v-expansion-panel tabs__expansion-panel mb-sm-4 mb-1"
                        >
                          <div class="v-expansion-panel__shadow"></div>

                          <button
                            data-v-6807ea87=""
                            class="v-expansion-panel-title"
                            type="button"
                            aria-expanded={openAccordion === index}
                            onClick={() => toggleAccordion(index)}
                          >
                            <span class="v-expansion-panel-title__overlay"></span>
                            <div data-v-6807ea87="">{item.question}</div>
                            <span class="v-expansion-panel-title__icon">
                              <i
                                class={`mdi-chevron-${
                                  openAccordion === index ? "up" : "down"
                                } mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default`}
                                aria-hidden="true"
                              ></i>
                            </span>
                          </button>
                          {openAccordion === index && (
                            <div
                              data-v-6807ea87=""
                              class="v-expansion-panel-text"
                            >
                              {item.answer}
                            </div>
                          )}
                        </div>
                      ))}
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