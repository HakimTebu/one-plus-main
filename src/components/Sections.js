import React from "react";
import ThePass from "./Sections/ThePass";
import Login from "./Sections/Login";
import SignUp from "./Sections/SignUp";
import Contact from "./Sections/Contact";

const Sections = () => {
  return (
    <div
      data-v-1f289850
      class="v-sheet v-theme--uaepassDefaultTheme patch-bg-color"
      aria-haspopup="dialog"
      aria-expanded="false"
    >
      <ThePass />
      <Login />
      <SignUp />
      <Contact />
    </div>
  );
};

export default Sections;
