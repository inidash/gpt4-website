import React from 'react'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening we are blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Nov 12, 2023" title="GPT-3 and openAI ia the future, let us explore it now?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Nov 12, 2023" title="GPT-3 and openAI ia the future, let us explore it now?"/>
          <Article imgUrl={blog03} date="Nov 12, 2023" title="GPT-3 and openAI ia the future, let us explore it now?"/>
          <Article imgUrl={blog04} date="Nov 12, 2023" title="GPT-3 and openAI ia the future, let us explore it now?"/>
          <Article imgUrl={blog05} date="Nov 12, 2023" title="GPT-3 and openAI ia the future, let us explore it now?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog