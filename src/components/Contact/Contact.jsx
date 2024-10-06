import React from 'react'



import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ba95a499-5d6f-4607-a7da-16d7800b4cd9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            alert("Form Submitted Successfully");
        }
        else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet eos quod sint fugit earum tempore maiores voluptas atque, maxime placeat enim! Assumenda ipsum recusandae delectus maxime qui quisquam reiciendis pariatur.</p> */}
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>khaledmaster999@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>0-120-648-87-64</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>CAIRO, EGYPT</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Writer Your Message Here</label>
                    <textarea name="message" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
