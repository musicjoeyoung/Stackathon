import React, { Component } from "react";

export class PracticeRoom extends Component {
  render() {
    return (
      <div>
        <h1>Virtual Practice Room</h1>
        <img
          id="musicStand"
          alt=""
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fa.1stdibscdn.com%2FarchivesE%2Fupload%2F1121189%2Ff_58962631478609847977%2F5896263_z.jpg&f=1&nofb=1"
          }
        />
        <img
          id="sheetMusic"
          alt=""
          src={"my-app/public/images/etude 2-page-001.jpg"}
        />
      </div>
    );
  }
}

export default PracticeRoom;
