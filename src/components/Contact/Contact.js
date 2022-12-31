import React from "react";
import "./Contact.css";

// https://formspree.io/f/mpzeaqjb

export default function Contact() {
    return (
        <div className="contact-component">
            <h1>Get in Touch</h1>
            <form action="https://formspree.io/f/mpzeaqjb" method="post" className="contact-form">
                    <input type="text" id="name-input" placeholder="Name" />
                    <input type="email" id="email-input" placeholder="Email" />
                    <input type="text" id="subject-input" placeholder="Subject" />
                    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                    <input type="submit" value="submit" id="input-submit" />
            </form>
        </div>
      
    )
}


