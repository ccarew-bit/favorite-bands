import React from 'react'

const Band = (props) => {
  return (
    <li>
      <header>{props.name}</header>
      <img src={props.image} alt="" />
      <p>{props.Description}</p>
    </li>
  )
}

export default Band
