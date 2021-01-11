import React from "react";
import { StyledLink, StyledNavbar, StyledNavBrand, StyledNavItems } from "../styled/Navbar";
import { Accent } from "../styled/Random";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLink to="/">
          Learn. Build. <Accent>Type.</Accent>
        </StyledLink>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">High Scores</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
