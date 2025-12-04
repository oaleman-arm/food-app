import {FoodCategoryList} from "../components";

export const VegetalPage = () => {
    return (
        <>
            <h1 className="text-center">Vegetales</h1>
            <hr />
            <FoodCategoryList category='Fresh legumes' />
        </>
    );
}