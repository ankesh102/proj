import React from "react";
import Heading from "../../Components/Heading/Heading";
import './Contact.css';


const Contact = () => {
    return (
        <section id="contact" className="contact_section">
            <div className="contact_heading_1">
            <Heading index='04' heading="What's Next" />
            </div>

            <h1 className="contact_heading_2">Get in touch</h1>
            <p className="contact_desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur illo voluptates quibusdam totam inventore assumenda 
            beatae blanditiis, voluptas dicta, ipsum voluptate quo. Illum 
            consequuntur laudantium quidem quia laboriosam! Dolorum consequatur
             culpa possimus? Id,
             hic repellendus modi similique quos voluptates pariatur.</p>
             <a href="mailto:ankesh.pandey1005@gmail.com">
                <button className="contact_btn">Say Hello</button>
             </a>
        </section>
    )
}

export default Contact;