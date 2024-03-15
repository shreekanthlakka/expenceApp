import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useLoggedInUserDetails } from "./Auth/ApiServices/useLoggedInUserDetails";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FullPage = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function ProtectedRoute({ children }) {
    const queryClient = useQueryClient();
    let isAuth = true;
    const { loggedInUser, isLoading } = useLoggedInUserDetails();
    const navigate = useNavigate();
    const session = sessionStorage.getItem("refreshToken");
    if (!session) {
        isAuth = false;
        queryClient.invalidateQueries({
            queryKey: ["user"],
        });
    }

    console.log(
        " loggedinUser ",
        loggedInUser,
        "loading",
        isLoading,
        "isAuth",
        isAuth
    );
    useEffect(() => {
        if (!isAuth && !isLoading) {
            navigate("/login");
        }
    }, [isAuth, isLoading, navigate, loggedInUser, session]);

    if (isLoading)
        return (
            <FullPage>
                <h1>Loading...</h1>
            </FullPage>
        );

    if (isAuth && session) return children;
}

export default ProtectedRoute;
