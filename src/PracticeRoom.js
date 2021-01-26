import React, { Component } from "react";
import PracticeRoomMetronome from "./PracRoomMetro";
import PDF from "./PDF";
import "./App.css";

export class PracticeRoom extends Component {
  render() {
    return (
      <div>
        <div id="musicStandDiv">
          <h1>Virtual Practice Room</h1>
          <div className="container">
            <PDF />
          </div>
        </div>
        <div>
          <PracticeRoomMetronome id="practiceroommetronome" />
        </div>
      </div>
    );
  }
}

export default PracticeRoom;
