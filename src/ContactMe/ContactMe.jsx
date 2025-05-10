import "./ContactMe.css";

const ContactMe = () => {
    return (
        <div className="ContactMeWrapper">
            <h1>Contact Me</h1>
            <div className="name">
                <label>Name</label>
                <input type="text"></input>
            </div>
            <div className="email">
                <label>Email</label>
                <input type="text"></input>
            </div>
            <div className="message">
                <label>Message</label>
                <input className="input-message" type="text"></input>
            </div>
            <div className="contact-me-buttons">
                <button>Send Message</button>
                <button>Other Button</button>
            </div>
        </div>
    )
}

export default ContactMe;