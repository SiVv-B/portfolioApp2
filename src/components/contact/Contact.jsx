import React, { useRef, useState } from 'react'
import "./contact.scss"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_kfty6cq',
        'template_rarhjxf',
        formRef.current,
        'H4yR-KtTlIhNNud_R',
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Hire me and let's discuss projects</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="img/phone.png" alt="" className="c-icon" />
              +33 06 12 34 56
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="img/email.png" alt="" />
              contact@siwar.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="img/address.png" alt="" />
              12 rue lamda, 8520 France
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && 'Email is sent with success...'}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
