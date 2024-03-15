import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "./authApiServices.js";
import { useNavigate } from "react-router-dom";

function useLogin() {
    const navigate = useNavigate();
    const { isLoading, mutate: login } = useMutation({
        mutationFn: ({ email, password }) => apiLogin({ email, password }),
        onSuccess: () => {
            navigate("/dashboard");
        },
    });
    return { isLoading, login };
}

export { useLogin };
