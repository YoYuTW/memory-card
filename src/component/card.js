import React from 'react';

const Card = (props) => {
  const style = {
    height: '80%',
    backgroundColor: 'black'
  }
  return (
    <div className='card' onClick={props.randomFunction}>
      <div className='pic' style={style} />
      <div className='characterName'>{props.characterName}</div>
    </div>
  )
};

export default Card;