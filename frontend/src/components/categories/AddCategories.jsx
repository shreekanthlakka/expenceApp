import { useState } from "react";
import { useCreateCategory } from "./ApiServices/useCreateCategory";

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
                    console.log("data on success ----===>", data);
                },
            },
            {
                onError: (error) => console.log("error ", error),
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
                    className=" border-black border-solid border-2"
                    placeholder="Enter a new category..."
                />
                <button type="submit" className="border-solid border-2 m-4 p-2">
                    Submit
                </button>
                {errors.length > 0 && (
                    <h3 className=" text-red-500">error:{errors[0].msg}</h3>
                )}
            </form>
        </div>
    );
}

export default AddCategories;
