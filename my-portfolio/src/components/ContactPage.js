import React, {useState, useEffect } from 'react';
import emailjs from "emailjs-com"
import '../css/ContactPage.css'


const ContactPage = ()=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] =useState('')
    const [message, setMessage] = useState('');


    // const submitContact = (e) => {
    //     setEmail(email);
    //     setMessge(message);
    // }

    // const handleSubmit = (e) =>{
    //     debugger
    //     e.preventDefault()
    //     submitContact(email, message)
    // }

    const sendEmail = (e) =>{
        debugger
        e.preventDefault();

        emailjs.sendForm('service_gfzpejt', 'template_feg7619', e.target, 'user_YfGI7XmMRC0EuWkYVGGgw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }


    return(
        <div className="cont">
        <h1>Contact Me</h1>
        <div className="contactme">
        <div>
            <form onSubmit={sendEmail}>
            <div className="contactInp">
            <input value={name} type="text" name="name" placeholder="name" onChange={(e)=>setName(e.currentTarget.value)} />
            <input value={email} type="text" name="email" placeholder="email" onChange={(e)=>setEmail(e.currentTarget.value)} />
            <input className="subject" value={subject} type="text" name="subject" placeholder="subject" onChange={(e)=>setSubject(e.currentTarget.value)} />
            </div>
            <div className="messageInp">
            <textarea className="message" value={message} rows="7" cols="200" type="text" name="message" placeholder="message" onChange={(e)=>setMessage(e.currentTarget.value)}/>
            </div>
            <button> Send </button>
            </form>
        </div>
        </div>
        </div>
    )
}

export default ContactPage;