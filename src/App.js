
import './App.css';
import { Container,Flex } from '@chakra-ui/react';
import YourDetails from './components/YourDetails';
import Cart from './components/Cart';

function App() {
  return (
   <Container maxW={"container.xl"} padding={"10"}>
<Flex h={{base:"auto",md:"100vh"}} py={["0","10","20"]}
direction={{
  base: "column-reverse",
  md:"row"
}}

>
 <YourDetails/>
<Cart/>
 
</Flex>
   </Container>
  );
}

export default App;
