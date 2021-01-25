import React from "react";
import * as Tone from "tone";
import "./App.css";

const synth = new Tone.MembraneSynth().toDestination();

function stopMetro() {
  return Tone.Transport.stop();
}

function playSynth() {
  synth.triggerAttackRelease("C1", "8n");
}

function Metronome() {
  /* const [bpm, setBPM] = useState(Tone.Transport.bpm.value); */

  function submitBPM() {
    const bpm = document.getElementById("bpmInput").value;
    Tone.Transport.bpm.value = bpm;
    console.log(bpm);
    playMetro(bpm);
  }

  function playMetro(bpm) {
    const osc = new Tone.Oscillator().toDestination();
    bpm = Tone.Transport.bpm.value;
    console.log(bpm);
    Tone.Transport.scheduleRepeat((time) => {
      osc.start(time).stop(time + 0.1);
    }, "4n");
    return Tone.Transport.start();
  }

  return (
    <div className="metronome">
      <button onClick={playSynth}>press me</button>
      {/* <button onClick={playMetro}>metronome</button> */}
      Beats Per Minute
      <form>
        <input
          id="bpmInput"
          type="number"
          name="number"
          min="20"
          max="240"

          /* onChange={() => bpm} */
        />
      </form>
      <button id="bpmButton" type="button" onClick={() => submitBPM()}>
        Enter BPM & Play
      </button>
      <button onClick={stopMetro}>stop</button>
    </div>
  );
}

export default Metronome;
