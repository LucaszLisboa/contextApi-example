import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Carrosel } from '../pages/Carrosel';

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>   
            <Route path='/carrosel' element={<Carrosel/>}/>       
        </Routes>
    )
}