import React from "react";
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

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      number: "",
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.submitAction(this.state);
    this.setState({ name: "", age: "", number: "" });
  };

  render() {
    return (
      <form>
        {Object.entries(this.state).map((info, i) => (
          <input
            name={info[0]}
            type={infosModel[info[0]].type}
            placeholder={infosModel[info[0]].placeholder}
            onChange={this.handleChange}
            value={info[1]}
            key={i}
          ></input>
        ))}

        <button type="submit" onClick={this.submit}>
          Enviar
        </button>
      </form>
    );
  }
}
