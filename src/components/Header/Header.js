import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  const onChangeId = (event) => {
    props.setBuscaId(event.target.value)
  }

  const onChangeNome = (event) => {
    props.setBuscaNome(event.target.value)
  }

  const onChangeOrdem = (event) => {
    props.setOrdenaNome(event.target.value)
  }

  const onChangeTipo = (event) => {
    props.setOrdenaTipo(event.target.value)
  }

  return (
    <Container>
      <input type="number" placeholder="Buscar por id" value={props.buscaId} onChange={onChangeId} />
      <input type="text" placeholder="Buscar por nome" value={props.buscaNome} onChange={onChangeNome} />
      <select value={props.ordenaNome} onChange={onChangeOrdem} >
        <option value="">Ordenar</option>
        <option value="crescente">Crescente</option>
        <option value="decrescente">Decrescente</option>
      </select>
      <select name="tipo" id="tipo" onChange={onChangeTipo} value={props.ordenaTipo} >
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
