import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const playAudio = () => {
    if (props.phonetic.audio) {
      const audio = new Audio(props.phonetic.audio);
      audio.play();
    }
  };

  return (
    <div className="Phonetic">
      <button onClick={playAudio} className="listen-button">
        ▶ Listen
      </button>

      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}