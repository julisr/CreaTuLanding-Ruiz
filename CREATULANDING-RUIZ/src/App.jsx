import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer.jsx';
import Error from './components/Error.jsx';
import Nosotros from './components/Nosotros.jsx';
import Detalle from './components/Detalle.jsx';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';



function App() {

  return (
    <>
    <BrowserRouter>

    <Routes>

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
       <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/productos/:id' element={<Detalle/>}/>
        <Route path='/*' element={<Error/>}/>
      </Route>

    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
