import Button from "./Button";
import React, {useState} from "react";
import { Modal } from "../src/components/Modal";

const App = () => {

  const [open, setOpen] = useState(false);


  return (
    <div className="container">
     <button onClick={() => {setOpen(!open)}}>Open Information</button>
      <Modal open={open} onClick={() => {
          setOpen(false)
        }}>
          Example information
      </Modal>
    </div>
  );
};

export default App;
