import React, { useState, useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import { CloseButton, Header, Input, ModalProps } from "../Modal";
import Select from "react-select";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";

const InputWithSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1.2rem;
  align-items: center;

  input {
    flex-grow: 1;
    height: 2rem;
    color: inherit;
    background: inherit;
  }

  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0 2rem;
  }
`;

const NewCard = ({ closeModal, identifer }: ModalProps) => {
  const { folderId } = identifer;
  const {darkMode} = useContext(ThemeContext)!;

  // access our card from folders state
  const { folders, createNewPlayground } = useContext(PlaygroundContext)!;

  const languageOptions = [
    { value: "c++", label: "C++" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
  ];

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption: any) => {
    setLanguage(selectedOption);
  };

  const customStyles = {
    option: (provided:any, state:any) => ({
      ...provided,
      background:    state.isFocused ? '#91afd9' : '',
      color:   darkMode ? (state.isSelected ? 'black' : 'white') : (state.isSelected ? 'white' : 'black'),
    }),
    control : (provided:any, state:any) => ({
      ...provided,
      background:   'transparent',
    })
    ,
    menu : (provided:any, state:any) => ({
      ...provided,
      background:   'transparent',
    })
    ,
    menuList : (provided:any, state:any) => ({
      ...provided,
      background:   darkMode ? '#313131' : 'white',
      borderRadius: '1.5px',
    })
    ,
    singleValue: (provided:any, state:any) => {
      
      const color = darkMode ? 'white' : 'black';
      return { ...provided, color };
    }
  }

  return (
    <div>
      <Header>
        <h2>Create New Playground</h2>
        <CloseButton
          onClick={() => {
            closeModal();
          }}
        >
          <RiCloseFill />
        </CloseButton>
      </Header>
      <InputWithSelect>
        <input
          type='text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Select
        styles={customStyles}
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />
        <button
          onClick={() => {
            createNewPlayground(folderId, title, language.value);
            closeModal();
          }}
        >
          Create Playground
        </button>
      </InputWithSelect>
    </div>
  );
};

export default NewCard;