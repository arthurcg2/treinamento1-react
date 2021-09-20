import { useState } from "react";
import "./styles.css";

const Form = ({ submitAction }) => {
  const [info, setInfo] = useState({ name: "", age: "", number: "" });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div id="form">
      <input
        name="name"
        type="text"
        placeholder="Nome"
        onChange={handleChange}
        value={info.name}
      ></input>

      <input
        name="age"
        type="text"
        placeholder="Idade"
        onChange={handleChange}
        value={info.age}
      ></input>

      <input
        name="number"
        type="number"
        placeholder="Número"
        onChange={handleChange}
        value={info.number}
      ></input>

      <button
        onClick={() => {
          submitAction(info);
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default Form;
