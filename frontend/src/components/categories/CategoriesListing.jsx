import { useCategory } from "./ApiServices/useCategory.js";
import Category from "./Category";

function CategoriesListing() {
    const { categories } = useCategory();
    return (
        <div className="align-text-top">
            <h3>Listing Categories</h3>
            {categories?.map((category) => (
                <Category category={category} key={category._id} />
            ))}
        </div>
    );
}

export default CategoriesListing;
