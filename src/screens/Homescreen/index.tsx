import React,{useState, useContext} from "react";
import LeftPane from "./leftPane";
import RightPane from "./rightPane";
import styled from "styled-components";
import Modal from "../../components/Modal";
import { ModalContext } from "../../context/ModalContext";

const HomeScreenContainer = styled.div`
position: relative;
width: 100%;
height : 100vh;
`;
export default function HomeScreen() {
  
  const ModalFeatures = useContext(ModalContext);
  const isOpen = ModalFeatures?.isOpen;

  return (
    <div>
      <HomeScreenContainer>
        <LeftPane />
        <RightPane />
        {isOpen === true ? <Modal /> : <></>}
      </HomeScreenContainer>
    </div>
  );
}
