//import logo from './logo.svg';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Nav from './Nav';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route exact path="/home" component={Home}/>
        <Route  path='/about' render={() => (<About/>)}></Route>
        <Route path='/' element={<LoginPage/>}>
          <Route index element = {<HomePage/>}/> */}
        {/* </Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
