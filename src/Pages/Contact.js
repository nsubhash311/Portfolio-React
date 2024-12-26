import React from "react";
import { PopupButton } from "react-calendly";
import { contactDetails } from "../Details";

function Contact() {
  const { email } = contactDetails;

  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-3xl md:text-3xl text-dark-heading dark:text-light-heading font-semibold">
        Have questions? Drop me an email:
      </h1>
      <h3 className="text-center text-xl md:text-2xl lg:text-3xl text-gradient font-medium pt-5">
        <a href={`mailto:${email}`} className="hover:underline">{email}</a>
      </h3>
      <p className="text-center text-sm md:text-base lg:text-lg text-white font-medium pt-5">or</p>

      <div className="text-center text-xl md:text-2xl lg:text-3xl text-gradient font-medium pt-5">
      <PopupButton 
        url="https://calendly.com/subhashnandhakumar311/30min"
        rootElement={document.getElementById("root")}
        text="Schedule Time with me!"
        // textColor="#ffffff"
        // color="#00a2ff"
      />
      </div>
    </main>
  );
}

export default Contact;
