import React from "react";
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
    </main>
  );
}

export default Contact;
