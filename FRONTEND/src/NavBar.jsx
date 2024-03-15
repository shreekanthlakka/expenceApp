import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: lightgray;
    padding: 1.2re 4.8rem;
`;

const StyledNavItems = styled.div`
    margin: 2.5rem;
    display: flex;
    justify-content: right;
    gap: 20px;
`;

function NavBar() {
    return (
        <StyledNav>
            <StyledNavItems>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </StyledNavItems>
        </StyledNav>
    );
}

export default NavBar;
