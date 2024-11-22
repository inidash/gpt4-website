import React from 'react'
import './whatgpt3.css'
import { Feature } from '../../components'
// import Features from '../features/Features'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="whatGPT3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis eveniet quisquam provident dicta eaque, obcaecati dolores soluta quis facilis accusamus dolorem, sequi consectetur error id explicabo! Fugit, libero sit!" /> 
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibility are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="ChatBots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis eveniet quisquam provident dicta eaque, obcaecati dolores soluta quis facilis accusamus dolorem, sequi consectetur error id" style={{border:'1px solid #fff'}} />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis eveniet quisquam provident dicta eaque, obcaecati dolores soluta quis facilis accusamus dolorem, sequi consectetur error id" />
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis eveniet quisquam provident dicta eaque, obcaecati dolores soluta quis facilis accusamus dolorem, sequi consectetur error id" />
      </div>
    </div>
  )
}

export default WhatGPT3