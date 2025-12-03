import {useFetchFoodCategory} from "../hooks/useFetchFoodCategory";
import {FoodItem} from "./FoodItem";
export const FoodCategoryList = ({category}) => {
    const {foodCategory, isLoading} = useFetchFoodCategory(category);
    return (
        <>
        <div>
            {
                isLoading && (<h2>Loading...</h2>)
            }
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    foodCategory.map( (food) => (
                        <FoodItem key={food.code} { ...food } />
                    ))
                }
            </div>
        </div>
        </>
    );
}