import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filtering() {
    // const [params, setParams] = useSearchParams();

    return (
        <>
            <select
            // onChange={(e) => setParams(`/expences?sort=${e.target.value}`)}
            >
                <option value="">sort</option>
                <option value="amount">amount-inc</option>
                <option value="-amount">amount-dec</option>
            </select>
        </>
    );
}

export default Filtering;
