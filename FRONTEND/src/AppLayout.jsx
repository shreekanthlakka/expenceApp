import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
    background-color: whitesmoke;
    padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 22rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`;

function AppLayout() {
    return (
        <Container>
            <NavBar />
            <SideBar />
            <Main>
                <Outlet />
            </Main>
        </Container>
    );
}

export default AppLayout;
