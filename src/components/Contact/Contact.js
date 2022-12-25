import React from "react";
import "./Contact.css";

// https://formspree.io/f/mpzeaqjb

export default function Contact() {
    return (
        <form action="https://formspree.io/f/mpzeaqjb" method="post">
            <label for="email">Email: </label>
            <input name="Email" id="email" type="email" />
            <label for="message">Message: </label>
            <input name="Message" id="message" type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}
