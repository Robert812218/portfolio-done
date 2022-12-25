import React from "react";
import "./Contact.css";

// https://formspree.io/f/mpzeaqjb

export default function Contact() {
    return (
        <form action="https://formspree.io/f/mpzeaqjb" method="post">
            <div className="input-labels">

            <label for="name">Name: </label>
            <input name="Name" id="name" type="name" />
            <label for="email">Email: </label>
            <input name="Email" id="email" type="email" />
            <label for="message">Message: </label>
            <input name="Message" id="message" type="text" />
            </div>
            <div>

            <button type="submit">Submit</button>
            </div>
        </form>
    )
}
