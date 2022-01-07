import React from 'react';

const Card = (props) => {
  return (
    <div className='card' onClick={props.randomFunction}>
      <div className='pic' />
      <div className='characterName'>{props.characterName}</div>
    </div>
  )
};

export default Card;