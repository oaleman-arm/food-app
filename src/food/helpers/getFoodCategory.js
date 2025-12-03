export const getFoodCategory = async (category) => {
    try {
        const url = `https://world.openfoodfacts.org/api/v2/search?categories_tags_en=${encodeURIComponent(category)}&json=true`;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const json = await resp.json();

        const products = json.products || [];
        console.log(products);

        const foodsCategory = products.map(food => ({
            id: food.id ?? food._id ?? null,
            name: food.product_name ?? '',
            image: food.image_url ?? '',
            category: food.categories ?? '',
            labels: food.labels ?? '',
            ingredients: food.ingredients_text ?? '',
            code: food.code ?? '',
        }));

        return foodsCategory;
    } catch (err) {
        console.error('getFoodCategory error:', err);
        return [];
    }
};