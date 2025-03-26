import React, { useState } from "react";

const SupportHeaderMain = () => {
  const [formData, setFormData] = useState({
    feature: "",
    title: "",
    email: "",
    description: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.feature) newErrors.feature = "Please select a feature";
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.agree)
      newErrors.agree = "You must agree to the privacy policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://formspree.io/f/xvgkqnrn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          feature: formData.feature,
          title: formData.title,
          email: formData.email,
          description: formData.description,
          agree: formData.agree,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          feature: "",
          title: "",
          email: "",
          description: "",
          agree: false,
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    }
  };

  if (submitted) {
    return (
      <div
        className="v-sheet v-theme--uaepassDefaultTheme"
        style={{ maxWidth: "1280px", width: "100%" }}
      >
        <main className="v-main">
          <div className="public__page-container">
            <div className="pt-sm-16 pt-6 pb-sm-13 pb-6">
              <div className="support__header">
                <h1 className="text-color-gray-70 font-weight-bold mt-sm-4 mt-1">
                  Thank You!
                </h1>
                <p className="text-color-gray-50 mt-sm-6 mt-4 header__page-desc">
                  Your support request has been submitted. We'll get back to you
                  soon.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div
      data-v-de238826
      className="v-sheet v-theme--uaepassDefaultTheme"
      style={{ maxWidth: "1280px", width: "100%" }}
    >
      <main className="v-main">
        <div className="public__page-container">
          <div className="pt-sm-16 pt-6 pb-sm-13 pb-6">
            <div className="support__header">
              <p className="text-color-secondary-secondary font-weight-600 text-body-2 text-uppercase">
                Get support
              </p>
              <h1 className="text-color-gray-70 font-weight-bold mt-sm-4 mt-1">
                Get Support
              </h1>
              <p className="text-color-gray-50 mt-sm-6 mt-4 header__page-desc">
                For any comments, inquiries, complaints or feedback
              </p>
            </div>
          </div>
          <div className="v-row">
            <div className="v-col-md-7 v-col-12 pt-0">
              <div className="v-sheet v-theme--uaepassDefaultTheme">
                <form
                  className="v-form"
                  onSubmit={handleSubmit}
                  aria-label="support form"
                >
                  {errors.submit && (
                    <div className="v-alert v-alert--density-default v-alert--variant-outlined v-theme--uaepassDefaultTheme bg-error v-locale--is-ltr mb-4">
                      <div className="v-alert__content">{errors.submit}</div>
                    </div>
                  )}

                  <div className="v-row mt-0">
                    <div className="v-col">
                      <label className="v-label mb-2">How can we help?</label>
                      <div
                        className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-text-field v-select v-select--single ${
                          errors.feature ? "v-input--error" : ""
                        }`}
                      >
                        <div className="v-input__control">
                          <div
                            className="v-field v-field--appended v-field--center-affix v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr"
                            role="combobox"
                            aria-haspopup="listbox"
                          >
                            <div
                              className="v-field__field"
                              data-no-activator=""
                            >
                              <select
                                name="feature"
                                value={formData.feature}
                                onChange={handleChange}
                                className="v-field__input"
                                aria-label="Feature"
                              >
                                <option value="">Select a feature</option>
                                <option value="Account Issues">
                                  Account Issues
                                </option>
                                <option value="Login Problems">
                                  Login Problems
                                </option>
                                <option value="Feature Request">
                                  Feature Request
                                </option>
                                <option value="Bug Report">Bug Report</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                            <div className="v-field__append-inner">
                              <i
                                className="mdi-menu-down mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default v-select__menu-icon"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {errors.feature && (
                        <div className="v-messages v-messages--error text-error mt-1">
                          {errors.feature}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="v-row">
                    <div className="v-col">
                      <label className="v-label">Support details</label>
                    </div>
                  </div>

                  <div className="v-row mt-0">
                    <div className="v-col">
                      <div
                        className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-text-field ${
                          errors.title ? "v-input--error" : ""
                        }`}
                      >
                        <div className="v-input__control">
                          <div className="v-field v-field--center-affix v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr">
                            <div
                              className="v-field__field"
                              data-no-activator=""
                            >
                              <input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter your title here"
                                type="text"
                                aria-label="Title"
                                className="v-field__input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {errors.title && (
                        <div className="v-messages v-messages--error text-error mt-1">
                          {errors.title}
                        </div>
                      )}
                    </div>

                    <div className="v-col">
                      <div
                        className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-text-field ${
                          errors.email ? "v-input--error" : ""
                        }`}
                      >
                        <div className="v-input__control">
                          <div className="v-field v-field--center-affix v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr">
                            <div
                              className="v-field__field"
                              data-no-activator=""
                            >
                              <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address here"
                                type="email"
                                aria-label="Email Address"
                                className="v-field__input"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {errors.email && (
                        <div className="v-messages v-messages--error text-error mt-1">
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="v-row">
                    <div className="v-col v-col-12">
                      <div
                        className={`v-input v-input--horizontal v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-textarea v-text-field ${
                          errors.description ? "v-input--error" : ""
                        }`}
                      >
                        <div className="v-input__control">
                          <div className="v-field v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr">
                            <div
                              className="v-field__field"
                              data-no-activator=""
                            >
                              <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="v-field__input"
                                placeholder="Please describe your concern here"
                                rows="5"
                                aria-label="Description"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      {errors.description && (
                        <div className="v-messages v-messages--error text-error mt-1">
                          {errors.description}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="v-row">
                    <div className="v-col">
                      <div aria-label="support consent agree">
                        <div
                          className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-checkbox ${
                            errors.agree ? "v-input--error" : ""
                          }`}
                        >
                          <div className="v-input__control">
                            <div className="v-selection-control v-selection-control--density-default v-checkbox-btn">
                              <div className="v-selection-control__wrapper">
                                <div className="v-selection-control__input">
                                  <input
                                    id="checkbox-55"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    type="checkbox"
                                    aria-label="I agree with OnePass Privacy Policy"
                                  />
                                </div>
                              </div>
                              <label
                                className="v-label v-label--clickable"
                                htmlFor="checkbox-55"
                              >
                                I agree with OnePass Privacy Policy
                              </label>
                            </div>
                          </div>
                        </div>
                        {errors.agree && (
                          <div className="v-messages v-messages--error text-error mt-1">
                            {errors.agree}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="v-row">
                    <div className="v-col d-flex justify-start">
                      <button
                        type="submit"
                        className="v-btn v-theme--uaepassDefaultTheme bg-black v-btn--density-default v-btn--size-large v-btn--variant-elevated"
                      >
                        <span className="v-btn__content" data-no-activator="">
                          Request
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="v-col-md-1 v-col-12"></div>

            <div className="v-col-md-4 v-col-12">
              <div className="contact">
                <p className="contact__head text-color-gray-70 font-weight-bold">
                  Get in touch
                </p>
                <p className="contact__desc text-color-gray-50 mt-4">
                  If you prefer to talk directly to one of our support team
                  members, call us on
                </p>
                <div className="mt-4 d-flex align-center">
                  <i
                    className="mdi-phone mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-color-primary-60"
                    aria-hidden="true"
                  ></i>
                  <a
                    size="x-large"
                    href="tel:600561111"
                    className="contact__phone text-color-primary-60 text-decoration-none font-weight-600 ms-2"
                    aria-label="call 600561111"
                  >
                    600 56 1111
                  </a>
                </div>
                <p className="contact__head text-color-gray-70 font-weight-bold mt-8">
                  Address
                </p>
                <p className="contact__desc text-color-gray-50 mt-4">OnePass</p>
                <p className="contact__desc text-color-gray-50 mt-4">
                  United States
                </p>
                <div className="mt-2 d-flex align-center">
                  <i
                    className="mdi-email mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-x-small text-color-primary-60 me-2"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="mailto:support@onepass.ae"
                    className="contact__email text-color-primary-60 font-weight-600 text-decoration-none"
                    aria-label="send an email to support@onepass.ae"
                  >
                    Send an email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportHeaderMain;