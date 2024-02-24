import Home from './Pages/Home/Home';
import Vacansy from './Pages/Vacansy/Vacansy'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/:id' element={<Vacansy></Vacansy>}></Route>
    </Routes>

    </>
  )
}

export default App
