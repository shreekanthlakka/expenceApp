import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
    background-color: lightgray;
    padding: 3.2rem 2.4rem;
    border-right: 1px solid gray;
    grid-row: 1/-1;
`;

const StyledLinks = styled.div`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

const LinkStyles = {
    fontSize: 20,
    textDecorationLine: "none",
};

function SideBar() {
    return (
        <StyledSidebar>
            <Logo />
            <StyledLinks>
                <NavLink style={LinkStyles} to="categories">
                    Categories
                </NavLink>
                <NavLink style={LinkStyles} to="expences">
                    Expences
                </NavLink>
                <NavLink style={LinkStyles} to="charts">
                    charts
                </NavLink>
            </StyledLinks>
        </StyledSidebar>
    );
}

export default SideBar;
