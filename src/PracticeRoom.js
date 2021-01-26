import React, { Component } from "react";
import Metronome from "./Metronome";
import PDF from "./PDF";
import "./App.css";

export class PracticeRoom extends Component {
  render() {
    return (
      <div id="musicStandDiv">
        <h1>Virtual Practice Room</h1>
        <div className="container">
          <PDF />
        </div>
        <div id="practiceRoomMetronome">
          <Metronome />
        </div>
      </div>
    );
  }
}

export default PracticeRoom;
