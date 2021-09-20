import React from "react";
import Form from "./components/Form/";
import InfoDisplay from "./components/InfoDisplay";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      data: null,
    };
  }

  toggleOpen = () => {
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  };

  infoSubmit = (data) => {
    this.setState({ isOpen: false, data });
  };

  render() {
    return (
      <div className="container">
        <div className="form-section">
          <p onClick={this.toggleOpen}>
            {this.state.isOpen ? "▲" : "▼"} Mostrar/esconder
          </p>

          {this.state.isOpen && <Form submitAction={this.infoSubmit} />}
        </div>

        {this.state.data && (
          <>
            <div className="divider"></div>
            <InfoDisplay info={this.state.data} />
          </>
        )}
      </div>
    );
  }
}
