import React from "react";
/* import { Tone } from "tone/build/esm/core/Tone"; */
import * as Tone from "tone";
import "./App.css";


/* const osc = new Tone.Oscillator().toDestination();
Tone.Transport.bpm.value = 70;
// repeated event every 8th note
Tone.Transport.scheduleRepeat((time) => {
  // use the callback time to schedule events
  osc.start(time).stop(time + 0.01);
}, "8n");
 */
const synth = new Tone.MembraneSynth().toDestination();

function playMetro() {
  const osc = new Tone.Oscillator().toDestination();
  Tone.Transport.bpm.value = 120;
  console.log(Tone.Transport.bpm.value);
  Tone.Transport.scheduleRepeat((time) => {
    osc.start(time).stop(time + 0.1);
  }, "8n");
  return Tone.Transport.start();
}
function stopMetro() {
  return Tone.Transport.stop();
}

function playSynth() {
  synth.triggerAttackRelease("C1", "8n");
}

function submitBPM() {
  let bpms = document.getElementById("bpm").value;
  const osc = new Tone.Oscillator().toDestination();
  Tone.Transport.bpm.value = bpms;
  console.log(Tone.Transport.bpm.value);
  Tone.Transport.scheduleRepeat((time) => {
    osc.start(time).stop(time + 0.1);
  }, "8n");
  return Tone.Transport.start();
}

function Metronome() {
  return (
    <div className="metronome">
      <button onClick={playSynth}>press me</button>
      <button onClick={playMetro}>metronome</button>
      <button onClick={stopMetro}>stop</button>
      <form>
        <input id="bpm" type="number" name="number" />
        <button id="bpmButton" type="button" onChange={submitBPM}>
          Enter BPM
        </button>
      </form>
    </div>
  );
}

export default Metronome;
