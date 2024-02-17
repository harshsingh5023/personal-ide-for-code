import React, { useContext } from "react";
import styled from "styled-components";
import { ModeProps, ThemeContext } from "../context/ThemeContext";

const DarkLightContainer = styled.div<ModeProps>`
  top: 1%;
  left: 1%;
  cursor: pointer;
  z-index:1;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  background: ${(props) =>
    props.mode === "Light"
      ? "White"
      : "linear-gradient(145deg, #23282c, #1e2125)"};
  box-shadow: ${(props) =>
    props.mode === "Light"
      ? `
  inset 7px 7px 3px rgba(209, 217, 230, 0.35),
  inset -11px -11px 3px rgba(255, 255, 255, 0.3)`
      : ` inset 5px 5px 4px #1e2226,
  inset -5px -5px 4px #24282c`};

  &:hover {
    opacity: 0.8;
  }
`;

const DarkLightMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)!;
  const handleDarkMode = () => {
    toggleDarkMode();
  };

  return (
    <DarkLightContainer
      onClick={handleDarkMode}
      mode={darkMode ? "Dark" : "Light"}
    >
      <img
        src={
          darkMode
            ? "../images/icons8-sun.gif"
            : "../images/icons8-moon.gif"
        }
        alt=""
      />
    </DarkLightContainer>
  );
};

export default DarkLightMode;
