import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './conteiner';
// import './componentes/NavBar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ItemDetailContainer from './conteiner/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      
  <NavBar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
    <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      
    
  </Routes>


    </BrowserRouter>

  );
}

export default App;
