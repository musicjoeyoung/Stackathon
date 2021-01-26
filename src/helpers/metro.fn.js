import * as Tone from "tone";

export function playMetro(bpm, subDivision) {
  stopMetro();
  Tone.Transport.bpm.value = bpm;
  const osc = new Tone.Oscillator().toDestination();
  console.log(bpm);

  Tone.Transport.scheduleRepeat((time) => {
    osc.start(time).stop(time + 0.1);
  }, subDivision + "n");

  return Tone.Transport.start();
}

export function stopMetro() {
  return Tone.Transport.stop();
}

export function isStarted() {
  return Tone.Transport.state === "started";
}

export const options = [2, 4, 8, 16];
