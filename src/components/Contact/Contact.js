import React from "react";
import "./Contact.css";

// https://formspree.io/f/mpzeaqjb

export default function Contact() {
    return (
        <div className="contact-component">
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <h1 style={{
                    backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5) 25%, rgba(0, 0, 0, 0.5) 75%, rgba(0, 0, 0, 0.1))",
                }}>Get In Touch</h1>
            </div>
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


