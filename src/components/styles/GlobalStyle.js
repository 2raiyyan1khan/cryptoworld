import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {font-size: 100%;} /*16px*/

body {
  background: #121212;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #b3b3b3;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  margin-bottom:1.38rem;
 font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 1.3;
  color: #ffffff;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small{font-size: 0.8rem;}
img{
    display: block;
}
a {
    text-decoration: none;
    color: #b3b3b3;
}
.active{
  color:#6f6bfa;
}
`;
