import SectionHeading from "./SectionHeading";
import '../css/Contact.css'

function Contact() {
    return (
        <>
            <div className="contact-container">
                
                <div className="heading"><SectionHeading heading={'Contact'}/></div>
                
                <form>
                
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label for="message">Message:</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>

        </>
    )
}
export default Contact;