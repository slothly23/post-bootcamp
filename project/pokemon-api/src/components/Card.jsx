import React from 'react'

const Card = (props) => {
  return (
    <div>
        <p>Card Pokemon</p>
        <p>name: {props.item.name} </p>
        <img src={props.item.imageUrl} alt="pokemon image" />
        <p>description: {props.item.description} </p>
        <p>types: {props.item.types[0]} {props.item.types[1]}</p>
    </div>
  )
}

export default Card