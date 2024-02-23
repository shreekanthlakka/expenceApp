import { useCreateCategory } from "../../ApiServices/useCreateCategory";

function AddCategories() {
    const { createNewCategory } = useCreateCategory();
    function handleSubmit(e) {
        e.preventDefault();
        const categoryname = e.target[0].value;
        createNewCategory(categoryname);
        e.target[0].value = "";
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
            </form>
        </div>
    );
}

export default AddCategories;
