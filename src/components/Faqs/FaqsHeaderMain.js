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
      question: "What is OnePass and how does it work?",
      answer:
        "OnePass is a secure, all-in-one digital identity and financial management platform designed to empower individuals and businesses with seamless identity verification, encrypted document storage, AI-powered credit scoring, and financial tools. Through OnePass, users can verify their government-issued IDs, passports, or business registration documents, store sensitive information securely, and share their credentials with trusted financial institutions via QR codes. Additionally, OnePass provides AI-driven credit scoring and smart budgeting tools, enabling users to manage loans, expenses, and financial decisions with confidence. The platform is fully compliant with regulatory standards, ensuring maximum security and trust in every transaction.",
    },
    {
      question: "How secure is OnePass, and how does it protect my data?",
      answer:
        "OnePass employs bank-level security measures to safeguard user data, ensuring compliance with international financial regulations. All stored information is protected with AES-256 encryption, the same standard used by global financial institutions and military-grade systems. Our platform also features multi-factor authentication (MFA), incorporating biometric verification and PIN-based access for enhanced security. To further protect user information, OnePass operates on an ISO 27001-certified cloud infrastructure, ensuring that all data is stored in a secure, regulated environment. Additionally, we partner with banks, financial institutions, and regulators to maintain the highest security and compliance standards, offering users a trusted digital identity and financial hub.",
    },
    {
      question:
        "What are the benefits of using OnePass for businesses and SMEs?",
      answer:
        "OnePass offers businesses, including small and medium enterprises (SMEs), a streamlined approach to digital identity verification and financial management. Companies can verify their business identities instantly, store and share important documents securely in an encrypted vault, and access AI-powered business credit scores for financial decision-making. OnePass also integrates with financial institutions and lenders, enabling SMEs to access tailored financial services, including business loans and credit analytics. Furthermore, enterprise users can leverage custom API integrations, regulatory compliance dashboards, and institutional loan insights to optimize their operations while ensuring compliance with industry standards.",
    },
    {
      question:
        "How does OnePass help with credit scoring and financial management?",
      answer:
        "OnePass provides an AI-driven credit scoring model that evaluates both personal and business creditworthiness using real-time financial insights and regulatory-approved methodologies. Users can monitor their credit scores, receive automated updates, and gain actionable insights into improving their financial standing. Additionally, OnePass includes smart budgeting tools that track expenses, provide savings recommendations, and help users manage loans efficiently. By partnering with trusted financial institutions, the platform ensures that users can access reliable lending options while remaining compliant with financial laws and regulations.",
    },
    {
      question:
        "Can I use OnePass to share my digital identity with banks and financial institutions?",
      answer:
        "Yes, OnePass allows users to securely share their verified identity credentials with banks, lenders, and other financial institutions through a QR-based sharing system. This feature enables instant verification, reducing the time and effort required for KYC (Know Your Customer) and AML (Anti-Money Laundering) compliance processes. Businesses can also leverage OnePass to register and verify their company credentials, ensuring seamless interactions with regulatory bodies and financial service providers. With time-limited document sharing, users can control access to their sensitive information while maintaining the highest security standards.",
    },
   
  ];

  return (
    <>
      <div
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
                              <div class="v-expansion-panel-text__wrapper">
                                <div data-v-6807ea87>{item.answer}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="v-infinite-scroll__side">
                      {/* <button
                        data-v-6807ea87=""
                        type="button"
                        className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-outlined mt-sm-12 mt-4"
                      >
                        <span className="v-btn__overlay"></span>
                        <span className="v-btn__underlay"></span>

                        <span className="v-btn__content" data-no-activator="">
                          Load more
                        </span>
                      </button> */}
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
