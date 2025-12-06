import {HomeSlider, HomeSectionOne, HomeMostSeller} from "../components";
import {useCart} from "../context/CartContext.jsx";

export const HomePage = () => {
    const {addToCart} = useCart();
    return (
        <>
           <HomeSlider />
           <HomeSectionOne />
           <HomeMostSeller category= "vegan" addCart={addToCart} />
        </>
    );
}