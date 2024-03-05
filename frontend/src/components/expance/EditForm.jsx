/*eslint-disable react/prop-types*/
//amount, description, expanceDate

import { useState } from "react";
import DatePicker from "react-datepicker";
import { useEditExpence } from "./ApiServices/useEditExpence";

function EditForm({ setEdit, selected, expence }) {
    const { editExpence } = useEditExpence();

    const [date, setDate] = useState(new Date());

    function handleSubmit(e) {
        e.preventDefault();
        console.log(selected);
        const amount = e.target["amount"].value;
        const description = e.target["description"].value;
        const expanceDate = date;

        console.log("date ->", expanceDate);
        editExpence({ selected, amount, description, expanceDate });
        setEdit((prev) => !prev);
        // e.target["amount"].value = "";
        // e.target["description"].value = "";
        // setDate(new Date());
    }
    return (
        <>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-y-4">
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
                <button type="submit" className=" border-2">
                    Save
                </button>
                <button
                    className=" border-2"
                    onClick={() => setEdit((prev) => !prev)}
                >
                    Close
                </button>
            </form>
        </>
    );
}

export default EditForm;
