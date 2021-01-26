import React from "react";
import {
  StyledLink,
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledButtonLink,
} from "../styled/Navbar";
import { StyledButton } from "../styled/Buttons";
import { Accent } from "../styled/Random";
import { useAuth0 } from "@auth0/auth0-react";
import useTheme from "../hooks/UseTheme";

export default function Navbar({ toggleTheme }) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
        {!isAuthenticated && (
          <li>
            <StyledButtonLink onClick={() => loginWithRedirect()}>
              Login
            </StyledButtonLink>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <StyledButtonLink
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </StyledButtonLink>
          </li>
        )}
        <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
      </StyledNavItems>
    </StyledNavbar>
  );
}
