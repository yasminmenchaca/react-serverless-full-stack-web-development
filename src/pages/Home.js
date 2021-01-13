import React from "react";
import CTA from "../styled/CTA";
import { Accent, StyledTitle } from "../styled/Random";
import { useAuth0 } from "../auth";

export default function Home() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <StyledTitle>Ready to type?</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>'s'</Accent> start playing!
      </CTA>
    </div>
  );
}
