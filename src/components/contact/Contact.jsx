import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
        const formRef = useRef()
        const [done, setDone] = useState(false)
        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;


        const handleSubmit = (e)=>{
            e.preventDefault()
            emailjs.sendForm('service_i7hpl0c', 'template_shhejnl', formRef.current, 'kJXmlKqoqGI6QbLd0')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });

        }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                            src={Phone}
                             alt=""
                             className="c-icon" 
                             />
                             +1 813 613 2406
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            varis9393@gmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"  />
                        <input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Subject" name="user_subject"  />
                        <input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Email" name="user_email"  />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "Thank you message sent"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact