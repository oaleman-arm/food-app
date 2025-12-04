import {HorizontalCarousel} from "./HorizontalCarousel";
import {useFetchFoodCategory} from "../hooks/useFetchFoodCategory.js";
import {FoodItem} from "./FoodItem";

export const HomeMostSeller = ({category}) => {
    const { foodCategory, isLoading } = useFetchFoodCategory(category);
    return (
        <>
            <h4 className="text-center">Lo mas vendido</h4>
            {isLoading && <h2>Loading...</h2>}
            <div className="container">
                <HorizontalCarousel
                    items={foodCategory}
                    renderItem={food => <FoodItem key={food.code} {...food} />}
                />
            </div>
        </>
    );
}