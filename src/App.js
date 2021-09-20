import { useState } from "react";
import Form from "./components/Form/";
import InfoDisplay from "./components/InfoDisplay";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const infoSubmit = (data) => {
    setData(data);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <div className="form-section">
        <p onClick={toggleOpen}>{isOpen ? "▲" : "▼"} Mostrar/esconder</p>

        {isOpen && <Form submitAction={infoSubmit} />}
      </div>

      {data && (
        <>
          <div className="divider"></div>
          <InfoDisplay info={data} />
        </>
      )}
    </div>
  );
}

export default App;
