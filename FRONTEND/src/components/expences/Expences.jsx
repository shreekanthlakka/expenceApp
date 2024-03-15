import AddExpences from "./AddExpences";
import Filtering from "./Filtering";
import ListingExpences from "./ListingExpences";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    gap: 30px;
`;

function Expences() {
    return (
        <>
            <h2>Expenses</h2>
            <Filtering />
            <Container>
                <AddExpences />
                <ListingExpences />
            </Container>
        </>
    );
}

export default Expences;
