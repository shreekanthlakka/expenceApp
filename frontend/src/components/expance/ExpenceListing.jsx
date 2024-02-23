import { useState } from "react";
import { useDeleteExpance } from "./ApiServices/useDeleteExpence";
import { useExpences } from "./ApiServices/useExpences";
import EditForm from "../categories/EditForm";

function ExpenceListing() {
    const [edit, setEdit] = useState(true);
    const [selected, setSelected] = useState("");
    const { deleteExpence } = useDeleteExpance();
    const { expences } = useExpences();
    console.log(expences);
    function handleDeleteClick(id) {
        deleteExpence(id);
    }
    return (
        <div>
            <h2>Expence Listing - {expences?.length}</h2>
            {edit ? (
                <table className="border-2 text-center border-black m-1 p-1">
                    <tr className="border-2 text-center border-black ">
                        <th className="border-2 border-black text-center">
                            Date
                        </th>
                        <th className="border-2 border-black text-end">
                            Amount
                        </th>
                        <th className="border-2 border-black text-end">
                            Category
                        </th>
                        <th className="border-2 border-black text-center">
                            Actions
                        </th>
                    </tr>
                    {expences &&
                        expences.map((expence) => (
                            <tr
                                key={expence?._id}
                                className="border-2 text-center border-black"
                            >
                                <th className="border-2 border-black text-center">
                                    {expence.expanceDate
                                        .split("T")[0]
                                        .split("-")
                                        .reverse()
                                        .join("/")}
                                </th>
                                <th className="border-2 border-black text-center">
                                    {expence?.amount}
                                </th>
                                <th className="border-2 border-black text-center">
                                    {expence?.category?.categoryname}
                                </th>
                                <th className="flex flex-row text-right">
                                    <button
                                        className=" border-2 px-4"
                                        onClick={() => {
                                            setSelected(expence._id);
                                            setEdit((e) => !e);
                                        }}
                                    >
                                        edit
                                    </button>
                                    <button
                                        className="border-2 px-4"
                                        onClick={() =>
                                            handleDeleteClick(expence._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                </table>
            ) : (
                <div>
                    <EditForm setEdit={setEdit} selected={selected} />
                </div>
            )}
        </div>
    );
}

export default ExpenceListing;
