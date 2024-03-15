import { useState } from "react";
import { useLogin } from "../Auth/ApiServices/useLogin";
import { useAuth } from "../context/authContext";

function Login() {
    const [email, setEmail] = useState("one@gmail.com");
    const [password, setPassword] = useState("123456");
    const { login, isLoading } = useLogin();
    const { setAuthenticatedUser } = useAuth();

    function handleClick() {
        console.log("clicked", email, password);
        login(
            { email, password },
            {
                onSuccess: (data) => {
                    // console.log("data------>", data);
                    const { user } = data;
                    setAuthenticatedUser(user);
                },
            }
        );
    }
    return (
        <div>
            <h2>Login page</h2>
            <input
                placeholder="login"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
            />
            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
            />
            <button type="submit" onClick={handleClick} disabled={isLoading}>
                Login
            </button>
        </div>
    );
}

export default Login;
