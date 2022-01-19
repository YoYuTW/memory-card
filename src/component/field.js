import React from 'react';
import Card from './card';

const Field = (props) => {
  const style = {
    height: '20%',
  }
  return (            
    <div className='field' style={style}>
      {props.names.map(
        name => <Card characterName={name} randomFunction={(e) => props.randomFunction(e)}/>)}
    </div>
  )
};

export default Field;