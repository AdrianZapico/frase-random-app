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
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

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
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
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
    box-shadow: rgba(240, 211, 46, 0.4) -5px 5px, rgba(240, 227, 46, 0.3) -10px 10px, rgba(240, 240, 46, 0.2) -15px 15px, rgba(240, 208, 46, 0.1) -20px 20px, rgba(240, 211, 46, 0.05) -25px 25px;
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
    box-shadow: rgba(69, 46, 240, 0.4) -5px 5px, rgba(78, 46, 240, 0.3) -10px 10px, rgba(78, 46, 240, 0.2) -15px 15px, rgba(59, 46, 240, 0.1) -20px 20px, rgba(75, 46, 240, 0.05) -25px 25px;
    transition: ease-in-out 0.1s; 
    background-color: #6423f0;
    border-color: rgba(19, 0, 0 );
    color:rgba(19, 0, 0 ) ;
    transform: scale(0.8);
   
    }

  

`

