import { useExpences } from "./ApiServices/useExpences";
import styled from "styled-components";
import { useDeleteExpance } from "./ApiServices/useDeleteExpence";
import { useState } from "react";
import EditForm from "./EditForm";

const Table = styled.table`
    border: 2px solid black;
`;

const Tr = styled.tr`
    border: 1px solid black;
`;

const Td = styled.td`
    border: 1px solid black;
    text-align: center;
    padding: 10px;
`;

const Th = styled.th`
    border: 1px solid black;
    text-align: center;
    padding: 10px;
`;

function ListingExpences() {
    const { expences } = useExpences();
    const { deleteExpence } = useDeleteExpance();
    const [edit, setEdit] = useState(false);
    const [selected, setSelected] = useState({});

    function handleDelete(id) {
        deleteExpence(id);
    }
    return (
        <div>
            <h2>Listing Expenses -{expences?.length}</h2>
            {expences?.length > 0 && !edit && (
                <Table>
                    <thead>
                        <Tr>
                            <Th>Date</Th>
                            <Th>Amount</Th>
                            <Th>Category</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {expences.map((expence) => (
                            <Tr key={expence._id}>
                                <Td>
                                    {/* 2024-02-27T18:19:09.000Z	 */}
                                    {expence.expanceDate
                                        .split("T")[0]
                                        .split("-")
                                        .reverse()
                                        .join("/")}
                                </Td>
                                <Td>{expence.amount}</Td>
                                <Td>{expence.category?.categoryname}</Td>
                                <Td>
                                    <button
                                        onClick={() => {
                                            setEdit((e) => !e);
                                            setSelected(expence);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(expence?._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </Td>
                            </Tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {edit && <EditForm setEdit={setEdit} selected={selected} />}
        </div>
    );
}

export default ListingExpences;
