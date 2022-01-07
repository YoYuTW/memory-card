import React from 'react';
import Card from './card';

const Field = (props) => {
  return (          
    <div className='field'>
      {props.names.map(
        name => <Card characterName={name} randomFunction={(e) => props.randomFunction(e)}/>)}
    </div>
  )
};

export default Field;