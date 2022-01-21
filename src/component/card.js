import React from 'react';
import ame from '../cardpic/ame.png';
import calli from '../cardpic/calli.png';
import kiara from '../cardpic/kiara.png';
import ina from '../cardpic/ina.png';
import gura from '../cardpic/gura.png';
import irys from '../cardpic/irys.png';
import fauna from '../cardpic/fauna.png';
import sana from '../cardpic/sana.png';
import kronii from '../cardpic/kronii.png';
import bae from '../cardpic/bae.png';
import mumei from '../cardpic/mumei.png';

const Card = (props) => {
  const style = {
    pointerEvents: 'none',
  };

  return (
    <div className='card' onClick={props.randomFunction}>
      {props.characterName === 'Amelia Watson' ? <img src={ame} alt='ame' style={style}/> : 
      props.characterName === 'Mori Calliope' ? <img src={calli} alt='calli' style={style}/> : 
      props.characterName === 'Takanashi Kiara' ? <img src={kiara} alt='kiara' style={style}/> :
      props.characterName === "Ninomae Ina'nis" ? <img src={ina} alt='ina' style={style}/> :
      props.characterName === "Gawr Gura" ? <img src={gura} alt='gura' style={style}/> :
      props.characterName === "IRyS" ? <img src={irys} alt='irys' style={style}/> :
      props.characterName === "Ceres Fauna" ? <img src={fauna} alt='fauna' style={style}/> :
      props.characterName === "Tsukumo Sana" ? <img src={sana} alt='sana' style={style}/> :
      props.characterName === "Ouro Kronii" ? <img src={kronii} alt='kronii' style={style}/> :
      props.characterName === "Hakos Baelz" ? <img src={bae} alt='bae' style={style}/> :
      props.characterName === "Nanashi Mumei" ? <img src={mumei} alt='mumei' style={style}/> : <div/>}
      <div className='characterName'>{props.characterName}</div>
    </div>
  )
};

export default Card;