import { useQuery } from "@tanstack/react-query";
import { getCurrentLoggedInUser } from "./authApiServices.js";

function useLoggedInUserDetails() {
    const {
        isLoading,
        error,
        data: loggedInUser,
    } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentLoggedInUser,
    });
    return { loggedInUser, isLoading, error };
}

export { useLoggedInUserDetails };
