import "./ContactMe.css";

const ContactMe = () => {
    return (
        <form className="ContactMeWrapper">
            <h1>Contact Me</h1>
            <div className="name">
                <label>Name</label>
                <input type="text" required></input>
            </div>
            <div className="email">
                <label>Email</label>
                <input type="email" required></input>
            </div>
            <div className="message">
                <label>Message</label>
                <input className="input-message" type="text" required></input>
            </div>
            <div className="contact-me-buttons">
                <button>Send Message</button>
                <button>Other Button</button>
            </div>
        </form>
    )
}

export default ContactMe;