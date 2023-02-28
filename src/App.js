import Banner from './ShopCart Banner.png'
import './App.css';
import { Image } from '@chakra-ui/react';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <Image src={Banner} alt='Banner'/> */}
    </div>
  );
}

export default App;
