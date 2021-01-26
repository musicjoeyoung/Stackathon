import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import {
  playMetro,
  isStarted,
  stopMetro,
  options,
} from "./helpers/metro.fn.js";
import "./App.css";

function PracticeRoomMetronome() {
  const [bpm, setBPM] = useState(Tone.Transport.bpm.value);
  const [subDivision, setSubDivision] = useState(4);

  useEffect(() => {
    if (isStarted()) {
      playMetro(bpm, subDivision);
    }
  }, [bpm, subDivision]);

  return (
    <div className="practiceroommetronome">
      <form>
        <label>
          Beats Per Minute
          <input
            id="bpmInput"
            type="number"
            name="number"
            min="20"
            max="240"
            value={bpm}
            onChange={(event) => setBPM(event.target.value)}
          />
        </label>
        <label id="subDiv">
          subDivision
          <select
            id="subDivisionSelect"
            value={subDivision}
            onChange={(event) => setSubDivision(event.target.value)}
          >
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </form>
      <button
        id="bpmButton"
        type="button"
        onClick={() => playMetro(bpm, subDivision)}
      >
        Start
      </button>
      <button onClick={stopMetro}>Stop</button>
      <img src={"/images/subDivisionImg.png"} alt="" />
    </div>
  );
}

export default PracticeRoomMetronome;
