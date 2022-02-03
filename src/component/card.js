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
import '../styles/card.css';

const Card = (props) => {

  return (
    <div className='card' onClick={props.randomFunction}>
      {props.characterName === 'Amelia Watson' ? <img src={ame} alt='ame' /> :
      props.characterName === 'Mori Calliope' ? <img src={calli} alt='calli' /> :
      props.characterName === 'Takanashi Kiara' ? <img src={kiara} alt='kiara' /> :
      props.characterName === "Ninomae Ina'nis" ? <img src={ina} alt='ina' /> :
      props.characterName === "Gawr Gura" ? <img src={gura} alt='gura' /> :
      props.characterName === "IRyS" ? <img src={irys} alt='irys' /> :
      props.characterName === "Ceres Fauna" ? <img src={fauna} alt='fauna' /> :
      props.characterName === "Tsukumo Sana" ? <img src={sana} alt='sana' /> :
      props.characterName === "Ouro Kronii" ? <img src={kronii} alt='kronii' /> :
      props.characterName === "Hakos Baelz" ? <img src={bae} alt='bae' /> :
      props.characterName === "Nanashi Mumei" ? <img src={mumei} alt='mumei' /> : <div/>}
      <div className='characterName'>{props.characterName}</div>
    </div>
  )
};

export default Card;