const URI = "http://localhost:8000/api/v1";

const login = async ({ email, password }) => {
    const res = await fetch(`${URI}/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log("login data = >", data);
    return data;
};

const getCurrentLoggedInUser = async () => {
    const res = await fetch(`${URI}/users/getLoggedInUserDetails`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    if (data?.isAuthenticated) {
        sessionStorage.setItem("refreshToken", data?.refreshToken);
    }
    return data;
};

getCurrentLoggedInUser();

export { login, getCurrentLoggedInUser };
