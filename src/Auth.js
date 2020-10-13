const auth = {
    setToken: (token) => {
        localStorage.setItem("accessToken", token);
    },
    getToken: () => {
        return localStorage.getItem("accessToken");
    },
    removeToken: () => {
        localStorage.removeItem("accessToken");
    },
    isAuthenticated: () => {
        var token = localStorage.getItem("accessToken");
        return token != null;
    }
}

export default auth;