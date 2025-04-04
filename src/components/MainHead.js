// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const MainHead = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       const response = await fetch("https://formspree.io/f/xvgkqnrn", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           subject: "New Join Request from OnePass Website",
//         }),
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         setFormData({
//           name: "",
//           email: "",
//         });
//       } else {
//         throw new Error("Form submission failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setErrors({ submit: "Failed to submit form. Please try again." });
//     }
//   };

//   return (
//     <div
//       data-v-f1abacc5=""
//       data-v-1f289850=""
//       className="banner full__width-container d-flex flex-md-row flex-column-reverse position-relative text-color-on-primary"
//     >
//       <div data-v-f1abacc5="" className="banner__content d-flex flex-column">
//         <h1 data-v-f1abacc5="" className="text-sm-h3 text-h4 font-weight-bold">
//           OnePass
//         </h1>
//         <h5
//           data-v-f1abacc5=""
//           className="text-sm-h5 text-subtitle-1 font-weight-600 mt-1"
//           data-uw-rm-heading="level"
//           role="heading"
//           aria-level="2"
//         >
//           Your Digital Identity & Finance Hub – Secure, Trusted, and Regulated.
//         </h5>
//         <p
//           data-v-f1abacc5=""
//           className="text-sm-body-1 text-body-2 mt-lg-6 mt-2 mb-lg-8 mb-sm-6 mb-4"
//         >
//           OnePass is your all-in-one platform for secure digital identity
//           verification, encrypted document storage, AI-driven credit scoring,
//           and financial management.
//         </p>

//         {/* JOIN US FORM */}
//         <form className="create-space" onSubmit={handleSubmit}>
//           {errors.submit && (
//             <div className="v-alert v-alert--density-default v-alert--variant-outlined v-theme--uaepassDefaultTheme bg-error v-locale--is-ltr mb-4">
//               <div className="v-alert__content">{errors.submit}</div>
//             </div>
//           )}

//           <div className="v-row">
//             <div className="v-col">
//               <label className="v-label">Join our waitlist</label>
//             </div>
//           </div>

//           <div className="v-row mt-0">
//             <div className="v-col">
//               <div
//                 className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-text-field ${
//                   errors.name ? "v-input--error" : ""
//                 }`}
//               >
//                 <div className="v-input__control">
//                   <div className="v-field v-field--center-affix v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr">
//                     <div className="v-field__field" data-no-activator="">
//                       <input
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Enter your name here"
//                         type="text"
//                         aria-label="Name"
//                         className="v-field__input"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {errors.name && (
//                 <div className="v-messages v-messages--error text-error mt-1">
//                   {errors.name}
//                 </div>
//               )}
//             </div>

//             <div className="v-col">
//               <div
//                 className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-text-field ${
//                   errors.email ? "v-input--error" : ""
//                 }`}
//               >
//                 <div className="v-input__control">
//                   <div className="v-field v-field--center-affix v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr">
//                     <div className="v-field__field" data-no-activator="">
//                       <input
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email address here"
//                         type="email"
//                         aria-label="Email Address"
//                         className="v-field__input"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {errors.email && (
//                 <div className="v-messages v-messages--error text-error mt-1">
//                   {errors.email}
//                 </div>
//               )}
//             </div>
//             <div className="v-col">
//               <div
//                 className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-text-field ${
//                   errors.email ? "v-input--error" : ""
//                 }`}
//               >
//                 <div className="v-input__control">
//                   <div className="v-field v-field--center-affix v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr">
//                     <div className="v-field__field" data-no-activator="">
//                       <input
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email address here"
//                         type="email"
//                         aria-label="Email Address"
//                         className="v-field__input"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {errors.email && (
//                 <div className="v-messages v-messages--error text-error mt-1">
//                   {errors.email}
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="v-row mt-4">
//             <div className="v-col">
//               <button
//                 type="submit"
//                 className="v-btn v-theme--uaepassDefaultTheme bg-black v-btn--density-default v-btn--size-default v-btn--variant-elevated"
//                 disabled={submitted}
//               >
//                 <span className="v-btn__content">
//                   {submitted ? "Thank You!" : "Join Waitlist"}
//                 </span>
//               </button>
//             </div>
//           </div>
//         </form>
//         {/* END JOIN US FORM */}
//       </div>

//       {/* THE-IMAGE */}
//       <div data-v-f1abacc5="" class="banner__images d-flex justify-center">
//         <div
//           data-v-f1abacc5=""
//           class="v-responsive v-img banner__mobile"
//           aria-label="mobile uaepass image"
//           role="img"
//         >
//           <div
//             class="v-responsive__sizer"
//             style={{ paddingBottom: "169.355%" }}
//           ></div>
//           <img
//             class="v-img__img v-img__img--contain"
//             src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1743256119/u-pass-mobile-5_zljjdq.png"
//             alt="mobile uaepass image"
//             style={{}}
//             data-uw-rm-alt-original="mobile uaepass image"
//             data-uw-rm-alt="ALT"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainHead;


import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainHead = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+256", // Default phone prefix
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

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    // Ensure the input starts with +256
    if (!value.startsWith("+256")) {
      value = "+256" + value.replace(/^\+256/, "");
    }
    setFormData((prev) => ({
      ...prev,
      phone: value,
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
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+256\d{9}$/.test(formData.phone)) {
      newErrors.phone =
        "Please enter a valid Ugandan phone number (e.g., +256712345678)";
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
          phone: formData.phone,
          subject: "New Join Request from OnePass Website",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "+256",
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

            <div className="v-col">
              <div
                className={`v-input v-input--horizontal v-input--center-affix v-input--density-default v-theme--uaepassDefaultTheme v-locale--is-ltr v-text-field ${
                  errors.phone ? "v-input--error" : ""
                }`}
              >
                <div className="v-input__control">
                  <div className="v-field v-field--center-affix v-field--variant-solo v-theme--uaepassDefaultTheme rounded-lg v-locale--is-ltr">
                    <div className="v-field__field" data-no-activator="">
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="+256XXXXXXXXX "
                        type="tel"
                        aria-label="Phone Number"
                        className="v-field__input"
                        pattern="^\+256\d{9}$"
                        title="Ugandan phone number (e.g., +256712345678)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {errors.phone && (
                <div className="v-messages v-messages--error text-error mt-1">
                  {errors.phone}
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
      </div>

      {/* THE-IMAGE */}
      <div data-v-f1abacc5="" className="banner__images d-flex justify-center">
        <div
          data-v-f1abacc5=""
          className="v-responsive v-img banner__mobile"
          aria-label="mobile uaepass image"
          role="img"
        >
          <div
            className="v-responsive__sizer"
            style={{ paddingBottom: "169.355%" }}
          ></div>
          <img
            className="v-img__img v-img__img--contain"
            src="https://res.cloudinary.com/dtxqmyvv2/image/upload/v1743256119/u-pass-mobile-5_zljjdq.png"
            alt="mobile uaepass image"
            data-uw-rm-alt-original="mobile uaepass image"
            data-uw-rm-alt="ALT"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHead;