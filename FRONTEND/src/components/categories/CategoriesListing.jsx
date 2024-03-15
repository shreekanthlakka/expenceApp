import { useCategory } from "./ApiServices/useCategory";
import SingleCategory from "./SingleCategory";
import styled from "styled-components";

const Table = styled.table`
    border: 1px solid black;
`;

function CategoriesListing() {
    const { categories } = useCategory();
    return (
        <div>
            <h2>List of Categories - {categories?.length}</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {categories?.length > 0 && (
                    <tbody>
                        {categories.map((category) => (
                            <SingleCategory
                                key={category._id}
                                category={category}
                            />
                        ))}
                    </tbody>
                )}
            </Table>
        </div>
    );
}

export default CategoriesListing;
