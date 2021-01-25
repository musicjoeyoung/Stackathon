import React, { Component } from "react";
import Metronome from "./Metronome";
import PDF from "./PDF";

export class PracticeRoom extends Component {
  render() {
    return (
      <div id="musicStandDiv">
        <h1>Virtual Practice Room</h1>
        <img
          id="musicStand"
          alt=""
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.1stdibscdn.com%2FarchivesE%2Fupload%2F1121189%2Ff_58962631478609847977%2F5896263_z.jpg&f=1&nofb=1"
          }
        />

        <PDF />
        <Metronome />
      </div>
    );
  }
}

export default PracticeRoom;
