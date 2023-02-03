import React, { useState, useEffect } from "react";
import { Container, DivFrase } from "./style";



const url = "https://type.fit/api/quotes";
let data;
const numAleatorio = () => Math.floor(Math.random() * data.length) + 1;

export default function Frase() {
  const [citacoes, setCitacoes] = useState({});

  useEffect(() => {
    getCitacoes();
  }, []);
  
//  console.log(citacoes)
  async function getCitacoes() {
    try {
      const res = await fetch(url);
      data = await res.json();
      setCitacoes(data[numAleatorio()]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <Container>
      <h1 className="titulo">Ramdon Frase</h1>
      </Container>
      <Container>
        <DivFrase>
      <p className="citacoes">{citacoes.text}</p>
      </DivFrase>
      </Container>
      <Container>
      <p>
       - {citacoes.author ? citacoes.author : "Desconhecido"}
      </p>
      </Container>
      <Container>
      <button className="botao" onClick={getCitacoes}>
        Nova Citação
      </button>
      </Container>

      </>
  );
}
