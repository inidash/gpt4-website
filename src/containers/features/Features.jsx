import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'improving ends distrust instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non, blanditiis voluptatem asperiores praesentium consectetur. Laborum, nostrum nemo. Quia aperiam necessitatibus excepturi, eius suscipit hic?'
  },
  {
    title: 'become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non, blanditiis voluptatem asperiores praesentium consectetur. Laborum, nostrum nemo. Quia aperiam necessitatibus excepturi, eius suscipit hic?'
  },
  {
    title: 'message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non, blanditiis voluptatem asperiores praesentium consectetur. Laborum, nostrum nemo. Quia aperiam necessitatibus excepturi, eius suscipit hic?'
  },
  {
    title: 'really boy law county',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium non, blanditiis voluptatem asperiores praesentium consectetur. Laborum, nostrum nemo. Quia aperiam necessitatibus excepturi, eius suscipit hic?'
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is now and you just need to realize it. Step into future today and make it happen</h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features