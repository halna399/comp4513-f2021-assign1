import React from "react";
import "../styles/playbrowser.css";
import "../styles/template.css";
import SinglePlay from "./SinglePlay.js";

const PlayList = (props) => {
  return (
    <section className="playList">
      <h2>List/Matches</h2>
      <table>
        <tr>
          <th>Title</th>
          <th>year</th>
          <th className="viewbtn"> </th>
          <th className="favbtn"> </th>
        </tr>
        <SinglePlay />
      </table>
    </section>
  );
};

export default PlayList;
