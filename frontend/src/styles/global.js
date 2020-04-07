import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}

*:focus{
  outline: 0;
}

html, body, #root{
  height:100%;
}

body{
  -webkit-font-smoothing: antialiased !important;
}

body, input, button{
  font-family: 'Roboto', sans-serif;
}

a{
  text-decoration:none;
}

ul,ol{
  list-style:none
}
button{
  cursor:pointer;
}
`;
