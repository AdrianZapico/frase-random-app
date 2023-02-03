import styled from "styled-components";




export const Container = styled.div`

    display: flex;
    justify-content: center;
    text-align: center;

`
export const Title = styled.div`
    color: #e3dddd;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
`

export const DivFrase = styled.div`

    background-color: #0d0d25;
    color: #e1dede;
    width: 600px;
    text-align: center;
    border-radius: 10px;
    font-family: cursive,italic;

`
export const DivAuthor = styled.div`

    background-color: #0d0d25;
    color: white;
    width: 100px;
    text-align: center;
    height: 50px;
    border-radius: 0px 0px 10px 10px;
    font-family: cursive,italic;
    font-size: 10px;
`
export const Button = styled.button`

    margin-top: 10px;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: #c0a754;
    transition: ease-in-out 0.8s; 
    &:hover
    {
    background-color: #dacf56;
    border-color: rgba(19, 0, 0 );
    color:rgba(19, 0, 0 ) ;
    
   
    }
    &:active
    {
    transition: ease-in-out 0.1s; 
    background-color: #f0c023;
    border-color: rgba(19, 0, 0 );
    color:rgba(19, 0, 0 ) ;
    transform: scale(0.8);
   
    }

  

`

export const Button2 = styled.button`

    margin-top: 10px;
    width: 50px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: #4051d2;
    transition: ease-in-out 0.8s; 
    &:hover
    {
    background-color: #7e56da;
    border-color: rgba(19, 0, 0 );
    color:rgba(19, 0, 0 ) ;
    
   
    }
    &:active
    {
    transition: ease-in-out 0.1s; 
    background-color: #6423f0;
    border-color: rgba(19, 0, 0 );
    color:rgba(19, 0, 0 ) ;
    transform: scale(0.8);
   
    }

  

`

