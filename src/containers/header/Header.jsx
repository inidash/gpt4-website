import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build something amazing with GPT4 openAI</h1>
        <p>Yet bed any for traveling assistance indulgement unpleasant. Not thought all exercise blessing. indulgancce way everything joy alteration boisteerious the attachment. Party we years to order allow ask of.</p>
        <div className="gpt3__header-content_input">
          <input type="email" placeholder='Your email address' />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24hrs</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header