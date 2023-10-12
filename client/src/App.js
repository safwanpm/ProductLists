import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import HomeBg from './components/HomeBg';
import CategoryPg from './pages/CategoryPg';
import SubCatPg from './pages/SubCatPg';
import ProductPg from './pages/ProductPg';
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/add-category' element={<CategoryPg />}></Route>
          <Route path='/add-sub_category' element={<SubCatPg />}></Route>
          <Route path='/add-product' element={<ProductPg />}>  </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
