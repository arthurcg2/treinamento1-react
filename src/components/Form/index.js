import { useState } from "react";
import "./styles.css";

const infosModel = {
  name: {
    placeholder: "Nome",
    type: "text",
  },
  age: {
    placeholder: "Idade",
    type: "number",
  },
  number: {
    placeholder: "Número",
    type: "number",
  },
};

const Form = ({ submitAction }) => {
  const [infos, setInfos] = useState({ name: "", age: "", number: "" });

  const handleChange = (e) => {
    setInfos({ ...infos, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(infos);
    submitAction(infos);
    setInfos({ name: "", age: "", number: "" });
  };

  return (
    <form>
      {Object.entries(infos).map((info, i) => (
        <input
          name={info[0]}
          type={infosModel[info[0]].type}
          placeholder={infosModel[info[0]].placeholder}
          onChange={handleChange}
          value={info[1]}
          key={i}
        ></input>
      ))}

      <button type="submit" onClick={submit}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
