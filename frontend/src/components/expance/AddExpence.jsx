import { useState } from "react";
import { useCategory } from "../../ApiServices/useCategory";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCreateExpence } from "./ApiServices/useCreateExpence";

function AddExpence() {
    const { createExpence } = useCreateExpence();
    const { categories } = useCategory();
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState();
    const [categoryId, setCategoryId] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit() {
        const expenceObj = {
            expanceDate: date,
            amount,
            categoryId,
            description,
        };
        console.log(expenceObj, "date =====", date.toLocaleDateString());
        createExpence(expenceObj);
    }

    return (
        <div>
            <form className="flex flex-col">
                <span>
                    <h3>Add Expences here...</h3>
                    <DatePicker
                        dateFormat={"dd/MM/yyyy"}
                        selected={date}
                        onChange={(e) => setDate(e)}
                        id="datepicker"
                        className=" border-black border-solid border-2 m-2 w-50"
                        placeholderText="select date ..."
                    />
                    <label htmlFor="datepicker">🗓️</label>
                </span>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="text"
                    placeholder="Enter Amount..."
                    className=" border-black border-solid border-2 m-2 w-50"
                />
                <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                >
                    <option value="">Select Category</option>
                    {categories?.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.categoryname}
                        </option>
                    ))}
                </select>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description..."
                    className=" border-black border-solid border-2 m-2 w-50"
                />
                <button
                    onClick={handleSubmit}
                    className=" border-black border-solid border-2 m-2"
                    type="button"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddExpence;
