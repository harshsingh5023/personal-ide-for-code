import React,{useContext} from "react";
import styled from "styled-components";
import { BiExport } from "react-icons/bi";
import { ModeProps, ThemeContext } from "../../context/ThemeContext";

const Console = styled.div`
  // background: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  height: 4rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.25rem;
  font-weight: 700;

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1rem;
    font-weight: 400;
    color: inherit;
    background: transparent;
    outline: 0;
    border: 0;

    svg {
      font-size: 1.5rem;
    }
  }
`;

const OutputArea = styled.textarea<ModeProps>`
background: ${(props) => props.mode === "Light" ? "#fafafa" : "#525252"} ;
  color: ${(props) => props.mode === "Light" ?  "Black" : "#fafafa"} ;
flex-grow: 1;
  padding: 0.25rem;
  padding-top: 0.5rem;
  font-size: 1.1rem;
  font-style: italic;
`;

interface OutputConsoleProps {
  currentOutput: string;
}



const OutputConsole: React.FC<OutputConsoleProps> = ({ currentOutput }) => {

  const {darkMode} = useContext(ThemeContext)!;

    // Export Output
    const exportOutput = () => {
      var file = new Blob([currentOutput], { type: "text/plain" });
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = "Code.txt";
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    };

  return (
    <Console>
      <Header>
        Output:
        <button onClick={exportOutput}>
          <BiExport />
          Export Output
        </button>
      </Header>
      <OutputArea
      mode={darkMode ? "Dark" : "Light"}
      value={currentOutput} disabled></OutputArea>
    </Console>
  );
};

export default OutputConsole;