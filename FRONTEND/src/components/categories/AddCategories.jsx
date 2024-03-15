import { useCreateCategory } from "./ApiServices/useCreateCategory";
import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

const ErrorMsg = styled.p`
    font-weight: 600;
    font-size: small;
    color: red;
`;

function AddCategories() {
    const [errors, setErrors] = useState([]);
    const { createNewCategory } = useCreateCategory();
    function handleSubmit(e) {
        e.preventDefault();
        const categoryname = e.target[0].value;
        createNewCategory(
            categoryname,
            {
                onSuccess: (data) => {
                    if (!data.ok) {
                        setErrors(data.responce);
                    }
                    // console.log("data on success ----===>", data);
                    toast.success("Category added successfully");
                },
            },
            {
                onError: (error) => toast.error(error.message),
            }
        );
        e.target[0].value = "";
        setErrors([]);
    }
    return (
        <div>
            <h1>Add Category</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="category"
                    placeholder="Enter a new category..."
                />
                <button type="submit">Submit</button>
                {errors.length > 0 && <ErrorMsg>{errors[0].msg}</ErrorMsg>}
            </form>
        </div>
    );
}

export default AddCategories;
