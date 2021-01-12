import React, { useState, useEffect } from "react";
import { ScoresList, ScoreLI } from "../styled/HighScores";

export default function HighScores() {
  //display those scores
  const [highScores, setHighScores] = useState([]);

  //use the fetch API to call the getHighScores function
  useEffect(() => {
    console.log("getting high scores");

    const loadHighScores = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");
        const scores = await res.json();
        setHighScores(scores);
      } catch (err) {
        console.log(err);
      }
    };
    loadHighScores();
  }, []);

  return (
    <div>
      <h1>High Scores</h1>
      <ScoresList>
        {highScores.map((score) => (
          <ScoreLI key={score.id}>
            {score.fields.name} - {score.fields.score}
          </ScoreLI>
        ))}
      </ScoresList>
    </div>
  );
}
