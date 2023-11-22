import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/home/Home';
import CarDetail from './screens/car-detail/CarDetail';
import Admin from './Admin';

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/admin' element={<Admin/>} />
        <Route path='car-detail/:id' element={<CarDetail/>} />
        <Route path='*' element={<div>Page not found 404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router
