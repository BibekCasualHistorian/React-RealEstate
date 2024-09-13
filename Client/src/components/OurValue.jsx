import React, { useState } from 'react'
import './OurValue.css'

const OurValue = () => {
  const Accordion = () => {
    const [expand, setExpand] = useState(1)

    const handleClick = (id) => {
      console.log("clicked", id)
      setExpand(id)
    }

    return (
      <div className='accordion'>

        <div className="accordion-one">
          <div className="accordion-header">
            <i className="fa-solid fa-shield"></i>
            <h3>Best interest rates on the market</h3>
            <i className="fa-solid fa-caret-down" onClick={() => handleClick(1)}></i>
          </div>
          {
            expand == 1 ? (
              <div className="accordion-one-body" >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel perspiciatis ducimus ad beatae, totam voluptates quae eius repellat iste saepe.
              </div>
            ) : ""
          }
          
        </div>

        <div className="accordion-two">
            <div className="accordion-header">
              <i className="fa-solid fa-xmark"></i>
              <h3>Prevent unstabe prices</h3>
              <i className="fa-solid fa-caret-down" onClick={() => handleClick(2)}></i>
            </div>
            {
              expand == 2 ? (
                <div className="accordion-two-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel perspiciatis ducimus ad beatae, totam voluptates quae eius repellat iste saepe.
                </div>
              ) : ""
            }
        </div>

        <div className="accordion-three">
          <div className="accordion-header">
            <i className="fa-solid fa-chart-bar"></i>
            <h3>Best price on the market</h3>
            <i className="fa-solid fa-caret-down" onClick={() => handleClick(3)}></i>

          </div>
          {
            expand == 3 ? (
              <div className="accordion-three-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel perspiciatis ducimus ad beatae, totam voluptates quae eius repellat iste saepe.
              </div>
            ) : ""
          }
        </div>

      </div>
    )
  }

  return (
    <div className='our-value'>
        <div className="our-value-left">
          <img src="./images/value.png" alt="just a building" />
        </div>
        <div className="our-value-right">
          <h2 className='gold'>Our Value</h2>
          <h1>Value We Give to You</h1>
          <p>We always ready to help by providing the best services for you.We believe a good place to live can make your life better.</p>
          <Accordion />
        </div>
    </div>
  )
}

export default OurValue