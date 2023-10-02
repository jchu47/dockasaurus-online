import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Gallery from './components/Gallery.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <Navbar> </Navbar>
        <Intro> </Intro>
        <Gallery> </Gallery>

      </div>
    </ChakraProvider>
  );
}

export default App;
