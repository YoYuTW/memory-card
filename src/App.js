import React, { useState, useEffect } from 'react';
import './App.css';
import Field from './component/field';
import Header from './component/header';

function App() {  
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [temp, setTemp] = useState([]);
  const [names, setNames] = useState([`Ninomae Ina'nis`, `Gawr Gura`, `Amelia Watson`, `Mori Calliope`, `Takanashi Kiara`,
  `IRyS`, `Hakos Baelz`, `Ouro Kronni`, `Nanashi Mumei`, `Ceres Fauna`, `Tsukumo Sana`]);

  const isCardHasBeenClicked = (name) => {
    if (temp.indexOf(name) !== -1){
      return true
    };
    return false
  };

  const randomName = () => {
    const randomNames = names;
    for (let i = 1; i < names.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));
      [randomNames[i], randomNames[random]] = [randomNames[random], randomNames[i]];
    };
    setNames([...randomNames]);    
  };

  const addIntoTemp = (e) => {
    const name = e.target.querySelector('.characterName').innerHTML;    
    if (isCardHasBeenClicked(name)){
      setTemp([]);    
    } else {
      setTemp (prevTemp => prevTemp.concat(name));    
    }
    randomName();  
  };

  useEffect(() => {
    setScore(temp.length);
  }, [temp.length]);

  useEffect(() => {
    if (score > highScore){
      setHighScore(score);
    }
  }, [score, highScore]);

  useEffect(() => {
    if (score >= 11){
      window.alert('YOU REMEMBER ALL!');
      setScore(0);
    }
  }, [score]);
  
  return (
    <div>
      <Header score={score} highScore={highScore}/>
      <Field names={names} randomFunction={addIntoTemp}/>
    </div>
  );
}

export default App;
