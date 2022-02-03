import React from 'react';
import Card from './card';
import mythLogo from './mythLogo.png';
import '../styles/field.css';

const Field = (props) => {
  const style = {
    height: '20%',
  }
  return (            
    <React.Fragment>
      <div className='field' style={style}>
        {props.names.map(
          name => <Card characterName={name} randomFunction={props.randomFunction}/>)}
      </div>
      <img src={mythLogo} alt='' height='500px'/>
    </React.Fragment>
  )
};

export default Field;