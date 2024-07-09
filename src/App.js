
import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Home from './pages/Home';
import Sobre from './pages/Sobre';


//usando react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  // const location = window.location.pathname

  // console.log(location);

  //problematica 
  //seria muy tedioso hacer esto si tenemos mas paginas

  // const Router = () => {
  //   if(location === '/'){
  //     return <Home/>; 
  //   }else{
  //     return <Sobre/>;
  //   }
  // }




  return (
    <>
      <Router>
        <Routes>
          //MANDAMOS LA INFO POR PROPS
          //LE INDICAMOS EL PATH
          //LO SEGUNDO EL ELEMENT, EL ELEMENTO QUE QUIRO QUE SE MUESTRE EN EL PATH '/' 
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
