import { useState } from "react";
import Form from "./components/Form/";
import InfoDisplay from "./components/InfoDisplay";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState();

  return (
    <div className="container">
      <div className="form-section">
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "▲" : "▼"} Mostrar/esconder
        </p>
        {isOpen && <Form submitAction={setData} />}
      </div>

      {data && <InfoDisplay info={data} />}
    </div>
  );
}

export default App;
