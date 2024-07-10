
import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import { Page404 } from './pages/Page404';
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



  //MANDAMOS LA INFO POR PROPS
  //LE INDICAMOS EL PATH
  //LO SEGUNDO EL ELEMENT, EL ELEMENTO QUE QUIRO QUE SE MUESTRE EN EL PATH '/' 
  
  //agregando un 404 si la ruta no existe
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
