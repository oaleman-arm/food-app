import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { HomePage} from '../pages';

export const FoodRoutes = () => {
    return(
        <>
            <Navbar />
            <div className="container mt-2">
                <Routes>
                    <Route path="/" element={<HomePage />} />

                </Routes>
            </div>
        </>
    );
}