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

        <Container style={{padding:"-2px"}}>
        <Title >
      <h5>Donate by Pix</h5>
      </Title >
        </Container>
        <Container>
          <div style={{  boxShadow:'  rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
          <Image src={qr} alt="qr" />
          </div>
        </Container>
        <Container>
        <Title>
            
        <h6>or: (31) 9 71095552 </h6>
        </Title>
        </Container>
        </div>
        
      )}
  
      <Container>
      <Button2 onClick={()=> setToggle(!toggle)}>Click </Button2>
      
      </Container>
     
      </>
  );
}
