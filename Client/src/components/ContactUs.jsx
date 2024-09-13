import React from 'react'
import './ContactUs.css'

const ContactUs = () => {

    const data = [
        {
            i: <i className="fa-solid fa-phone"></i>,
            to: 'Call'
        },
        {
            i: <i className="fa-brands fa-rocketchat"></i>,
            to: 'Chat'
        },
        {
            i: <i className="fa-solid fa-video"></i>,
            to: 'Video Call'
        },
        {
            i: <i className="fa-solid fa-message"></i>,
            to: "Message"
        }
    ]

    const Card = (props) => {

        return (
            <div className='contact-us-card'>
                <div className="card-upper-part">
                    {
                        props.each.i
                    }
                    <div>
                        <h2>{props.each.to}</h2>
                        <p>9841158113</p>
                    </div>
                </div>
                <div className="card-lower-part">
                    <h4>{props.each.to} now</h4>
                </div>
            </div>
        )
    }

  return (
    <div className='contact-us'>
        <div className="contact-us-left">
            <h2>Our Contact Us</h2>
            <h1>Easy to contact us</h1>
            <p>We always ready to help by providing the best services for you.We believe a good place to live can make your life better.</p>
            <div className='contact-us-left-cards'>
            {
                data.map((each) => {
                    return <Card key={each.to} each={each}/>
                })
            }
            </div>
        </div>

        <div className="contact-us-right">
            <img src="./images/contact.jpg" alt="" />
        </div>
    </div>
  )
}

export default ContactUs