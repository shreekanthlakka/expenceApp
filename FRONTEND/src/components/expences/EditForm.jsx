/*eslint-disable react/prop-types*/
//amount, description, expanceDate

import { useState } from "react";
import DatePicker from "react-datepicker";
import { useEditExpence } from "./ApiServices/useEditExpence";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

function EditForm({ setEdit, selected, expence }) {
    const { editExpence } = useEditExpence();

    const [date, setDate] = useState(new Date());

    function handleSubmit(e) {
        e.preventDefault();
        const amount = e.target["amount"].value;
        const description = e.target["description"].value;
        const newObj = {
            selected: selected._id,
            amount,
            description,
            expanceDate: date.toISOString(),
        };

        editExpence(newObj);
        setEdit((prev) => !prev);
        // e.target["amount"].value = "";
        // e.target["description"].value = "";
        // setDate(new Date());
    }
    return (
        <>
            <StyledForm onSubmit={handleSubmit}>
                <DatePicker
                    dateFormat={"dd/MM/yyyy"}
                    selected={date}
                    onChange={(e) => setDate(e)}
                    id="datepicker"
                    placeholderText="select date ..."
                />
                <input
                    defaultValue={expence?.amount}
                    name="amount"
                    type="text"
                    placeholder="Enter Amount..."
                />
                <textarea
                    defaultValue={expence?.description}
                    name="description"
                    placeholder="Description..."
                />
                <button type="submit">Save</button>
                <button onClick={() => setEdit((prev) => !prev)}>Close</button>
            </StyledForm>
        </>
    );
}

export default EditForm;
