import React, { useEffect, useState } from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledCharacter } from "../styled/Game";
import { StyledLink } from "../styled/Navbar";
import { StyledTitle } from "../styled/Random";

export default function GameOver({ history }) {
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState("");

  if (score === -1) {
    history.push("/");
  }

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const options = {
          method: "POST",
          body: JSON.stringify({ name: "Lynn", score }),
        };
        const res = await fetch("/.netlify/functions/saveHighScore", options);
        const data = await res.json();
        if (data.id) {
          setScoreMessage("Congrats! You got a high score!");
        } else {
          setScoreMessage("Sorry, not a high score. Keep trying!");
        }
      } catch (err) {
        console.error(err);
      }
    };
    saveHighScore();
  }, []);

  return (
    <div>
      <StyledTitle>Game Over</StyledTitle>
      <StyledCharacter>{score}</StyledCharacter>
      <h2>{scoreMessage}</h2>
      <div>
        <StyledLink to="/">Go Home</StyledLink>
      </div>
      <div>
        <StyledLink to="/game">Play Again?</StyledLink>
      </div>
    </div>
  );
}
