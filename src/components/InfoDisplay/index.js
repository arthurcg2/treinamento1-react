import "./styles.css";

const InfoDisplay = ({ info }) => {
  return (
    <div className="show">
      <h3>Nome: {info.name}</h3>
      <h3>Idade: {info.age}</h3>
      <h3>Número: {info.number}</h3>
    </div>
  );
};

export default InfoDisplay;
