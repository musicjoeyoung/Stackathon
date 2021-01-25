import React from "react";
import "./App.css";
import * as Tone from "tone";

let playing = false;

function play(pitch, pic, note) {
  if (playing) {
    console.log("Something else is playing; please wait");
    return;
  } else {
    playing = true;
  }

  const duration = 3;
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(pitch, duration);
  console.log(`Playing concert pitch ${pitch}`);

  changePicture(pic, duration);
  changeNote(note, duration);
}

function changePicture(pic, duration) {
  const imgElem = document.querySelector("#defaultTrumpetImg");

  let src = `/images/${pic}valvesDown.png`;
  let originalSrc = imgElem.getAttribute("src");

  imgElem.setAttribute("src", src);

  setTimeout(() => {
    imgElem.setAttribute("src", originalSrc);
    playing = false;
  }, duration * 1000);
}

function changeNote(note, duration) {
  const imgElem = document.querySelector("#chromaticNotes");

  let noteSrc = `/images/chromaticPitchesNotated/Trumpet-Chromatic-${note}.png`;
  let originalNote = imgElem.getAttribute("src");

  imgElem.setAttribute("src", noteSrc);

  setTimeout(() => {
    imgElem.setAttribute("src", originalNote);
    playing = false;
  }, duration * 1000);
}

function Home() {
  return (
    <div className="trumpet">
      <div>
        <p>The Bb trumpet is a transposing instrument.</p>
        <p>That means the written note and rendered note are different.</p>
        <p>
          For example, on the chromatic scale below, the note the player reads
          and plays (Trumpet in Bb) ACTUALLY sounds a whole note lower (Trumpet
          in C).
        </p>
      </div>
      <div id="imageDiv" className="sticky">
        <img id="defaultTrumpetImg" src="images/0valvesDown.png" alt="" />
        <img
          id="chromaticNotes"
          src="images/chromaticPitchesNotated/Trumpet-Chromatic-0.png"
          alt=""
        />
      </div>
      <p></p>
      <div className="flex-container">
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/gb3.jpg" />
          <button onClick={() => play("E3", "all", "1")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/g3.jpg" />
          <button onClick={() => play("F3", "1and3", "2")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/ab3.jpg" />
          <button onClick={() => play("F#3", "2and3", "3")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/a3.png" />
          <button onClick={() => play("G3", "1and2", "4")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/bb3.png" />
          <button onClick={() => play("G#3", "1", "5")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/b3.png" />
          <button onClick={() => play("A3", "2", "6")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/c4.jpg" />
          <button onClick={() => play("A#3", "0", "7")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/db4.jpg" />
          <button onClick={() => play("B3", "all", "8")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/d4.jpg" />
          <button onClick={() => play("C4", "1and3", "9")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/eb4.jpg" />
          <button onClick={() => play("C#4", "2and3", "10")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/e4.jpg" />
          <button onClick={() => play("D4", "1and2", "11")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/f4.jpg" />
          <button onClick={() => play("D#4", "1", "12")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/gb4.jpg" />
          <button onClick={() => play("E4", "2", "13")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/g4.jpg" />
          <button onClick={() => play("F4", "0", "14")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/ab4.jpg" />
          <button onClick={() => play("F#4", "2and3", "15")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/a4.png" />
          <button onClick={() => play("G4", "1and2", "16")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/bb4.jpg" />
          <button onClick={() => play("G#4", "1", "17")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/b4.png" />
          <button onClick={() => play("A4", "2", "18")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/c5.jpg" />
          <button onClick={() => play("A#4", "0", "19")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/db5.jpg" />
          <button onClick={() => play("B4", "1and2", "20")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/d5.jpg" />
          <button onClick={() => play("C5", "1", "21")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/eb5.jpg" />
          <button onClick={() => play("C#5", "2", "22")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/e5.jpg" />
          <button onClick={() => play("D5", "0", "23")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/f5.jpg" />
          <button onClick={() => play("D#5", "1", "24")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/gb5.jpg" />
          <button onClick={() => play("E5", "2", "25")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/g5.png" />
          <button onClick={() => play("F5", "0", "26")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/ab5.png" />
          <button onClick={() => play("F#5", "2and3", "27")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/a5.png" />
          <button onClick={() => play("G5", "1and2", "28")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/bb5.png" />
          <button onClick={() => play("G#5", "1", "29")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/b5.png" />
          <button onClick={() => play("A5", "2", "30")}>Play</button>
        </div>
        <div className="item">
          <img id="noteImg" alt="" src="images/notatedPitches/c6.png" />
          <button onClick={() => play("A#5", "0", "31")}>Play</button>
        </div>
      </div>
      <h3 id="pageGoals">Page Goals</h3>
      <div id="container">
        <ul>
          <li>
            Notated trumpet pitches w/fingerings and corresponding audio pitch
          </li>
          <li>Can "play" trumpet with keyboard.</li>
          <ul>
            <li>"J","K","L" for 1,2,3 valves</li>
            <li>"E" for up in range</li>
            <li>"D" for down in range</li>
            <li>Holding down "valve" keys sustains notes</li>
          </ul>
          <li>
            Loftier goal: create a flash trumpet whose valves move with
            corresponding keyboard input and not clicking.
          </li>
          <li>Add Flash?</li>
          <li>
            Include secondary image of staff with notes (chromatic scale) where
            the note selected changes from black to red on both the
            trumpet-pitch scale AND a concert-pitch scale.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
