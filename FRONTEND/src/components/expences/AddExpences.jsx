import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCreateExpence } from "./ApiServices/useCreateExpence";
import { useCategory } from "../categories/ApiServices/useCategory";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

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
        createExpence(expenceObj);
        setAmount("");
        setDescription("");
        setDate(new Date());
    }

    return (
        <div>
            <StyledForm>
                <span>
                    <h3>Add Expences here...</h3>
                    <DatePicker
                        dateFormat={"dd/MM/yyyy"}
                        selected={date}
                        onChange={(e) => setDate(e)}
                        id="datepicker"
                        placeholderText="select date ..."
                    />
                    <label htmlFor="datepicker">🗓️</label>
                </span>
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="text"
                    placeholder="Enter Amount..."
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
                />
                <button onClick={handleSubmit} type="button">
                    Submit
                </button>
            </StyledForm>
        </div>
    );
}

export default AddExpence;
