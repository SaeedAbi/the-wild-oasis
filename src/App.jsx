import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Heading from "./ui/Heading.jsx";


const H1= styled.h1`
  font-size: 30px;
  font-weight: 600;
`

function App() {
  return(
      <>
    <GlobalStyles/>
  <div>
    <Heading>the Wild Oasis</Heading>
  </div>
  </>
  )
}

export default App
