import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar,Footer } from '../../ui';
import { HomePage,VegetalPage} from '../pages';
import {CartProvider} from "../context/CartContext.jsx";

export const FoodRoutes = () => {
    return(
        <>
            <CartProvider>
                <Navbar cartCount={0} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/vegetales" element={<VegetalPage />} />
                </Routes>
                <Footer />
            </CartProvider>
        </>
    );
}