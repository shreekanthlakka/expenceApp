/*eslint-disable react/prop-types*/
//amount, description, expanceDate

import { useState } from "react";
import DatePicker from "react-datepicker";
import { useEditExpence } from "../expance/ApiServices/useEditExpence";

function EditForm({ setEdit, selected, expence }) {
    const { editExpence } = useEditExpence();

    const [date, setDate] = useState(new Date());

    function handleSubmit(e) {
        e.preventDefault();
        console.log(selected);
        const amount = e.target["amount"].value;
        const description = e.target["description"].value;
        const expanceDate = date;

        editExpence({ selected, amount, description, expanceDate });
        setEdit((prev) => !prev);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <DatePicker
                    dateFormat={"dd/MM/yyyy"}
                    selected={date}
                    onChange={(e) => setDate(e)}
                    id="datepicker"
                    className=" border-black border-solid border-2 m-2 w-50"
                    placeholderText="select date ..."
                />
                <input
                    defaultValue={expence?.amount}
                    name="amount"
                    type="text"
                    placeholder="Enter Amount..."
                    className=" border-black border-solid border-2 m-2 w-50"
                />
                <textarea
                    defaultValue={expence?.description}
                    name="description"
                    placeholder="Description..."
                    className=" border-black border-solid border-2 m-2 w-50"
                />
                <button type="submit">Save</button>
            </form>
            <button onClick={() => setEdit((prev) => !prev)}>Close</button>
        </>
    );
}

export default EditForm;
