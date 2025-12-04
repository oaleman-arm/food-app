import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar,Footer } from '../../ui';
import { HomePage,VegetalPage} from '../pages';

export const FoodRoutes = () => {
    return(
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/vegetales" element={<VegetalPage />} />
            </Routes>
            <Footer />
        </>
    );
}