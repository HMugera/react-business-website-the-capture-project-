import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    @media (max-width:1700px){
        font-size:70%
    }
  
}
body{
    background:#000;
    font-family: 'Inter', sans-serif;
    overflow-x:hidden;
}

button{
    font-weight:bold;
    font-size:1.0rem;
    padding:1rem 2rem;
    cursor:pointer;
    font-family: 'Inter', sans-serif;
    border:3px solid #23d997;
    background:transparent;
    color:white;
    transition:all 0.5s ease;
    &:focus{
        outline:none;
    }
    &:hover{
        background-color:#23d997;
        color:white;
    }

    
}
h2{
        font-weight:lighter;
     font-size:3rem;
    }
    h3{
color:white;
    }
    h4{
        font-weight:bold;
        font-size:2rem;
      
    }
    h5{
        font-size:1.3rem;
    }
    a{
        font-size:1.0rem;
    }
    span{
        font-weight:bold;
        color:#23d997;
    }
    p{
padding:3rem 0rem;
color:#ccc;
font-size:1.4rem;
line-height:150%;
    }
`;

export default GlobalStyle;

// font-family: 'Inter', sans-serif;
// font-family: 'Lobster', cursive;
