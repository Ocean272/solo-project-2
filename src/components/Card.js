import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className='card-container'>
        <img src={props.imageUrl} alt='' className='card--image'/>
        <div className='card--details'>
            <img src='locationIcon.png' alt='' className='location--icon' /> <span className='span--tag'>{props.location}</span> <a href={props.googleMapsUrl} className='url'>View on Google Maps</a>
            <h2 className='card--title'>{props.title}</h2>
            <h6>{props.startDate}<span> - </span>{props.endDate}</h6>
            <p className='p'>{props.description}</p>
        </div>
    </div>
  )
}

export default Card