import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from './Components/index';
import {Browse, Details, Home ,Profile, Streams} from './Pages';
import { Header , Footer } from './sections/index';


function App() {
  return (
    <div className="App">
      <Header />      
      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/browse' element={<Browse />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/details' element={<Details />}/>
          <Route path='/streams' element={<Streams />}/>
        </Routes>
      </Container>      
      <Footer />      
    </div>
  );
}

export default App;
