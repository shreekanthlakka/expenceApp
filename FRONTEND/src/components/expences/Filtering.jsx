import { useSearchParams } from "react-router-dom";

function Filtering() {
    const [searchParams, setSearchParams] = useSearchParams();
    function handleSortDate(e) {
        searchParams.set("sort", e.target.value || "date");
        setSearchParams(searchParams);
    }
    function handleSortAmount(e) {
        searchParams.set("sort", e.target.value || "amount");
        setSearchParams(searchParams);
    }
    return (
        <div>
            <select onChange={handleSortDate}>
                <option value="">date</option>
                <option value="date">ascending</option>
                <option value="-date">descending</option>
            </select>
            <select>
                <option>amount</option>
                <option value="amount">ascending</option>
                <option value="-amount">descending</option>
            </select>
        </div>
    );
}

export default Filtering;
