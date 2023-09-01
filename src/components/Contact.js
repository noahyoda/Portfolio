import './Contact.css'

export default function Contact() {

    return (
        <div className="ContactView">
            <form 
            method="post"
            name="contact"
            className="ContactForm">
            <h2 className="Header">
                Reach Out!
            </h2>
            <p className="SubText">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <div className="NameInput">
                <label htmlFor="name" className="InputHead">
                Name:
                </label>
                <input
                type="text"
                id="name"
                name="name"
                className="Input"
                placeholder='John Doe'
                />
            </div>
            <div className="EmailInput">
                <label htmlFor="email" className="InputHead">
                Email:
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="Input"
                placeholder="example@gmail.com"
                />
            </div>
            <div className="PhoneInput">
                <label htmlFor="phone" className="InputHead">
                Phone:
                </label>
                <input
                type="tel"
                id="phone"
                name="phone"
                className="Input"
                placeholder='xxx-xxx-xxxx'
                />
            </div>
            <div className="MessageInput">
                <label
                htmlFor="message"
                className="InputHead">
                Message:
                </label>
                <textarea
                id="message"
                name="message"
                className="MsgInput"
                />
            </div>
            <button
                type="submit"
                className="Submit">
                Submit
            </button>
            </form>
        </div>
    )
}