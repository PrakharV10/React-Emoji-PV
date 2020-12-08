import React, {useState} from 'react';
import './App.css';
import {emojiList , topEmoji} from './emojis.js';

export default function App() {
  

  var [meaning , setMeaning] = useState("");

  function onChangeHandler(event){
    var inputEmoji = event.target.value;
    var meaning = emojiList[inputEmoji];

    if (meaning === undefined)
      meaning = "Im too lazy to define this one! Try the other one!";
      setMeaning(meaning);
  }

  function topEmojiList(item){
    var inputEmoji = item;
    var meaning = emojiList[inputEmoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> 👉 EMOJI MEANING 👈</h1>
      <h3 className = "subhead">Ever wondered, what these expressive emojis, actually mean?<br /> Well check it out here! Just type an Emoji in the search bar and see my version of EMOJI Meaning!</h3>
      <input onChange = {onChangeHandler} placeholder = "Type in your Emojis here"></input>
      <div className ="outputTxt">{meaning}</div>
      <h4>Here are the top 5 Emojis I use!</h4>
      <div className ="topEmojiBox">
        {
          topEmoji.map(function(item,index){
            return <span className = "topEmojis"
             style = {{}}
             key = {item}
             onClick={()=> topEmojiList(item)} >
                {item}
            </span>
          })
        }
      </div>
    </div>
  );
}


