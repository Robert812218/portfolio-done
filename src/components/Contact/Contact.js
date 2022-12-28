import React from "react";
import "./Contact.css";

// https://formspree.io/f/mpzeaqjb

export default function Contact() {
    return (
        <div className="contact-component">
            {/* .section-header */}
            <h1 className="contact-header">GET IN TOUCH</h1>

            {/* .contact-wrapper */}
            <div className="form-wrapper">
                <div>

                    <label for="name">Name: </label>
                    <input name="Name" id="name" palceholder="NAME" type="name" required />
                    <label for="email">Email: </label>
                    <input name="Email" id="email" type="email" required />
                    <label for="message">Message: </label>
                    <input name="Message" id="message" type="text" required />

                    <button type="submit">Submit</button>
                </div>
            </div>

            <ul className="contact-list">
                <li className="list-item">
                    <i className="fa fa-map-marker fa-2x">
                        <span className="city-location">Edmonton, AB</span>    
                    </i>
                </li>
            </ul>

            <form action="https://formspree.io/f/mpzeaqjb" method="post">
 
        </form>

        </div>
      
    )
}


