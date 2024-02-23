/*eslint-disable react/prop-types*/

import { useState } from "react";
import { useDeleteCategory } from "../../ApiServices/useDeleteCategory";
import { useUpdateCategory } from "../../ApiServices/useUpdateCategory";

function Category({ category }) {
    const id = category._id;
    const [update, setUpdate] = useState(true);
    const [name, setName] = useState("");
    const { updateCategory } = useUpdateCategory();
    const { deleteCategory } = useDeleteCategory();
    function handleBlur() {
        updateCategory({ id, name });
    }
    return (
        <div className="flex flex-row space-x-2 m-4">
            {update ? (
                <h3
                    className="text-center text-blue-700 font-bold "
                    onDoubleClick={() => setUpdate((e) => !e)}
                >
                    {category.categoryname}
                </h3>
            ) : (
                <>
                    <input
                        type="text"
                        className="border-black border-2 w-20"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        onBlur={handleBlur}
                    />
                </>
            )}
            <button
                className="border-2 border-solid"
                onClick={() => setUpdate((prev) => !prev)}
            >
                {update ? "edit" : "save"}
            </button>
            <button
                className="border-2 border-solid"
                onClick={() => deleteCategory(category._id)}
            >
                Delete
            </button>
        </div>
    );
}
export default Category;
