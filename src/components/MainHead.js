import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainHead = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

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
          name: formData.name,
          email: formData.email,
          subject: "New Join Request from OnePass Website",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    }
  };

  return (
    <div
      data-v-f1abacc5=""
      data-v-1f289850=""
      className="banner full__width-container d-flex flex-md-row flex-column-reverse position-relative text-color-on-primary"
    >
      <div data-v-f1abacc5="" className="banner__content d-flex flex-column">
        <h1 data-v-f1abacc5="" className="text-sm-h3 text-h4 font-weight-bold">
          OnePass
        </h1>
        <h5
          data-v-f1abacc5=""
          className="text-sm-h5 text-subtitle-1 font-weight-600 mt-1"
          data-uw-rm-heading="level"
          role="heading"
          aria-level="2"
        >
          Your Digital Identity & Finance Hub – Secure, Trusted, and Regulated.
        </h5>
        <p
          data-v-f1abacc5=""
          className="text-sm-body-1 text-body-2 mt-lg-6 mt-2 mb-lg-8 mb-sm-6 mb-4"
        >
          OnePass is your all-in-one platform for secure digital identity
          verification, encrypted document storage, AI-driven credit scoring,
          and financial management.
        </p>

        {/* JOIN US FORM */}
        <form className="create-space" onSubmit={handleSubmit}>
          {errors.submit && (
            <div className="v-alert v-alert--density-default v-alert--variant-outlined v-theme--uaepassDefaultTheme bg-error v-locale--is-ltr mb-4">
              <div className="v-alert__content">{errors.submit}</div>
            </div>
          )}

          <div className="v-row">
            <div className="v-col">
              <label className="v-label">Join our waitlist</label>
            </div>
          </div>

          <div className="v-row mt-0">
            <div className="v-col">
              <div
                className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-text-field ${
                  errors.name ? "v-input--error" : ""
                }`}
              >
                <div className="v-input__control">
                  <div className="v-field v-field--center-affix v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr">
                    <div className="v-field__field" data-no-activator="">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name here"
                        type="text"
                        aria-label="Name"
                        className="v-field__input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {errors.name && (
                <div className="v-messages v-messages--error text-error mt-1">
                  {errors.name}
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
                    <div className="v-field__field" data-no-activator="">
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

          <div className="v-row mt-4">
            <div className="v-col">
              <button
                type="submit"
                className="v-btn v-theme--uaepassDefaultTheme bg-black v-btn--density-default v-btn--size-default v-btn--variant-elevated"
                disabled={submitted}
              >
                <span className="v-btn__content">
                  {submitted ? "Thank You!" : "Join Waitlist"}
                </span>
              </button>
            </div>
          </div>
        </form>
        {/* END JOIN US FORM */}

        {/* <div
          data-v-a88e803d=""
          data-v-f1abacc5=""
          className="actions d-flex flex-sm-nowrap flex-wrap justify-sm-start justify-center mb-lg-16 mb-8"
        >
          <button
            data-v-a88e803d=""
            type="button"
            className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-lg-4 me-2 mt-sm-0 mt-2 button-color-change-white"
            data-test="sign-button"
          >
            <span className="v-btn__overlay"></span>
            <span className="v-btn__underlay"></span>
            <span className="v-btn__content" data-no-activator="">
              <span
                className="font-weight-600 letter-spacing-0 black-text-change"
                style={{ color: "black!important" }}
              >
                Get Started
              </span>
            </span>
          </button>

          <button
            data-v-5bdf237f=""
            type="button"
            className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-tonal me-lg-4 me-2 mt-sm-0 mt-2 verify__btn button-color-change-white"
          >
            <span className="v-btn__overlay"></span>
            <span className="v-btn__underlay"></span>
            <span className="v-btn__content" data-no-activator="">
              <span
                data-v-5bdf237f=""
                className="font-weight-600 letter-spacing-0 black-text-change"
              >
                Verify Document
              </span>
            </span>
          </button>

          <button
            data-v-a88e803d=""
            type="button"
            className="v-btn v-theme--uaepassDefaultTheme v-btn--density-default v-btn--size-default v-btn--variant-text mt-sm-0 mt-2"
            aria-haspopup="dialog"
            aria-expanded="false"
          >
            <span className="v-btn__overlay"></span>
            <span className="v-btn__underlay"></span>
            <Link to="" className="font-weight-600 letter-spacing-0 links-new">
              <span className="v-btn__content" data-no-activator="">
                <i
                  data-v-a88e803d=""
                  className="mdi-play-circle-outline mdi v-icon notranslate v-theme--uaepassDefaultTheme v-icon--size-default text-white me-2"
                  aria-hidden="true"
                ></i>
                <span
                  data-v-a88e803d=""
                  className="font-weight-600 letter-spacing-0 "
                >
                  Watch Video
                </span>
              </span>
            </Link>
          </button>
        </div> */}
      </div>

      {/* THE-IMAGE */}
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
            alt="mobile uaepass image"
            style={{}}
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
              style={{}}
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
