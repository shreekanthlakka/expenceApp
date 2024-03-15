/*eslint-disable react/prop-types*/
import { useState } from "react";
import { useDeleteCategory } from "./ApiServices/useDeleteCategory";
import { useUpdateCategory } from "./ApiServices/useUpdateCategory";
import { useDeleteExpancesByCategoryId } from "../expences/ApiServices/useDeleteExpencesByCategoryId";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
function SingleCategory({ category }) {
    const { deleteCategory } = useDeleteCategory();
    const { updateCategory } = useUpdateCategory();
    const { deleteAllExpenceByCategoryId } = useDeleteExpancesByCategoryId();
    const [edit, setEdit] = useState(false);
    const [updateCategoryname, setUpdateCategoryname] = useState("");
    const queryClient = useQueryClient();
    function handleDelete(id) {
        deleteCategory(id, {
            onSuccess: () => toast.success("Category Deleted Successfully"),
            onError: (err) =>
                toast.error(`Failed To Delete Category `, err.message),
        });
        deleteAllExpenceByCategoryId(id, {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["categories"],
                });
            },
        });
    }

    function handleUpdate() {
        if (!updateCategoryname) return;
        updateCategory(
            { id: category._id, name: updateCategoryname },
            {
                onSuccess: () => {
                    toast.success("Category updated sucessfully");
                },
                onError: (error) => toast.error(error.message),
            }
        );
    }

    return (
        <tr>
            {!edit ? (
                <td onDoubleClick={() => setEdit((prev) => !prev)}>
                    {category.categoryname}
                </td>
            ) : (
                <input
                    type="text"
                    placeholder="enter the category name"
                    value={updateCategoryname}
                    onChange={(e) => setUpdateCategoryname(e.target.value)}
                    onBlur={handleUpdate}
                />
            )}
            <td>
                <button onClick={() => setEdit((e) => !e)}>Update</button>
            </td>
            <td>
                <button onClick={() => handleDelete(category._id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default SingleCategory;
