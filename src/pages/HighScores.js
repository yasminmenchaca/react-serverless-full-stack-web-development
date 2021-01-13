import React, { useState, useEffect } from "react";
import { ScoresList, ScoreLI } from "../styled/HighScores";
import { StyledTitle } from "../styled/Random";

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
        console.err(err);
      }
    };
    loadHighScores();
  }, []);

  return (
    <div>
      <StyledTitle>High Scores</StyledTitle>
      <ScoresList>
        {highScores.map((score, index) => (
          <ScoreLI key={score.id}>
            {index + 1}. {score.fields.name} | {score.fields.score}
          </ScoreLI>
        ))}
      </ScoresList>
    </div>
  );
}
