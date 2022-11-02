import React, {useContext,useRef} from "react";
import styled from "styled-components";
import { BiImport } from "react-icons/bi";
import { ModeProps, ThemeContext } from "../../context/ThemeContext";


const Console = styled.div`
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
    color: inherit;
    font-size: 1rem;
    font-weight: 400;
    background: transparent;
    outline: 0;
    border: 0;

    svg {
      font-size: 1.5rem;
    }
  }
`;

const TextArea = styled.textarea<ModeProps>`
  flex-grow: 1;
  resize: none;
  background: ${(props) => props.mode === "Light" ? "#fafafa" : "#525252"} ;
  color: ${(props) => props.mode === "Light" ?  "Black" : "#fafafa"} ;
  border: 0;
  outline: 0;
  font-size: 1.1rem;
  padding: 0.25rem;
  padding-top: 0.5rem;
  `;
  
  interface InputConsoleProps {
    currentInput: string;
    setCurrentInput: (newInput: string) => void;
  }

const InputConsole: React.FC<InputConsoleProps> = ({
  currentInput,
  setCurrentInput,
}) => {
  const {darkMode} = useContext(ThemeContext)!;
  const inputRef = useRef<HTMLInputElement>(null);

  const getFile = (e: any) => {
    const input = e.target;

    // input = {
    //   files: ["file1.txt", "file2.txt", ...]
    // }

    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0]);
    }
  };
  const placeFileContent = (file: any) => {
    readFileContent(file)
      .then((content) => {
        setCurrentInput(content as string);
      })
      .catch((error) => console.log(error));
  };


  function readFileContent(file: any) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event!.target!.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }


  const handleClick = () => {
    
      inputRef?.current?.click();
  }

  return (
    <Console>
      <Header>
        Input:
        <button onClick={handleClick}>
          <BiImport />
          Import Input
        </button>
      <input ref={inputRef} type="file" name="input" style={{'display' : 'none'}} onChange={(e) => getFile(e)} />
      </Header>
      <TextArea mode={darkMode ? "Dark" : "Light"}
        value={currentInput}
        onChange={(e) => {
          setCurrentInput(e.target.value);
        }}
      ></TextArea>
    </Console>
  );
};

export default InputConsole;