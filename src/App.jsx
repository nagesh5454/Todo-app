import React from "react";
import InputSection from "./Components/InputSection";
import Modal from "./Components/Modal";
import OutputSection from "./Components/OutputSection";
import { useSelector } from "react-redux";

const App = () => {
  const isModalShow = useSelector((state) => state.modalHandler.value);
  return (
    <>
      {isModalShow && <Modal />}
      <InputSection />
      <OutputSection />
    </>
  );
};

export default App;
