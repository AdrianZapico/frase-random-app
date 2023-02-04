import React, { useState, useEffect } from "react";
import { Container, DivFrase, DivAuthor, Button, Title ,Button2, Image } from "./style";
import qr from  '../../assets/images/qr.png'


const url = "https://type.fit/api/quotes";
let data;
const numAleatorio = () => Math.floor(Math.random() * data.length) + 1;

export default function Frase() {
  const [citacoes, setCitacoes] = useState({});
  const[toggle,setToggle] = useState(false);

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
      <Title >
      <h1>Get Random Phrase</h1>
      </Title >
      </Container>
      {toggle && (
        <div>
    <Container>
        <DivFrase>
      <p>{citacoes.text}</p>
      </DivFrase>
      </Container>
      <Container>
        <DivAuthor>
      <p style={{margin:'2px'}}>
       - {citacoes.author ? citacoes.author : "Desconhecido"}
      </p>
      </DivAuthor>
      </Container>
      <Container>
      <Button  onClick={getCitacoes}>
        Get Phrase
      </Button>
      </Container>

        <Container>
        <Title >
      <h4>Donate by Pix</h4>
      </Title >
        </Container>
        <Container>
          <Image src={qr} alt="qr" />
        </Container>
        </div>
        
      )}
  
      <Container>
      <Button2 onClick={()=> setToggle(!toggle)}>Click </Button2>
      
      </Container>
     
      </>
  );
}
