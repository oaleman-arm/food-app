import {FoodCategoryList} from "../components";
import {useCart} from "../context/CartContext";

export const VegetalPage = () => {
    const {addToCart} = useCart();

    return (
        <>

            <h1 className="text-center mt-3">Vegetales</h1>
            <hr />
            <FoodCategoryList category='Fresh legumes' addCart={addToCart} />
        </>
    );
}