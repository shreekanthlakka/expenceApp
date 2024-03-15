import AddCategories from "./AddCategories";
import CategoriesListing from "./CategoriesListing";
import styled from "styled-components";

const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin: 40px;
`;
function Category() {
    return (
        <CategoryContainer>
            <AddCategories />
            <CategoriesListing />
        </CategoryContainer>
    );
}

export default Category;
