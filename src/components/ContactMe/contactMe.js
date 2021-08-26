import React from "react";

export default function Contact() {
  return (
    <div class="container">
      <form id="contact" action="" method="post">
        <h3> Contact Form</h3>

        <input
          placeholder="Your name"
          type="text"
          tabindex="1"
          required
          autofocus
        />

        <input
          placeholder="Your Email Address"
          type="email"
          tabindex="2"
          required
        />

       

        <textarea
          placeholder="Type your message here...."
          tabindex="5"
          required
        ></textarea>

        <button
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
        >
          Submit
        </button>

      </form>
    </div>
  );
}
