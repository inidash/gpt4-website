import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility img" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early access to get started</h4>
        <h1 className="gradient__text">The Possibilities are beyond our imagination</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, voluptates, dolorem sunt inventore fugiat rerum aliquid reprehenderit nisi harum sit fuga explicabo maiores in, odit ea quos magnam rem. Deserunt?</p>
        <h4>Request for early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility