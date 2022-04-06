/*
 *@description: Fetch Data Hook
 *@author: Tony
 *@date: 2022-04-04 21:06:37
 *@version: V1.0.0
*/
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "state/Auth";
function useFetchAction() {
    const [auth, setAuth] = useRecoilState(authAtom);
    const navigate = useNavigate();
    //Return all http method
    return {
        get: request("GET"),
        post: request("POST"),
        put: request("PUT"),
        delete: request("DELETE")
    };
    function request(method) {
        return (url, body) => {
            const requestOptions = {
                method,
                headers: authHeader(url)
            };
            if (body) {
                requestOptions.headers["Content-Type"] = "application/json";
                requestOptions.body = JSON.stringify(body);
            }
            return fetch(url, requestOptions).then(handleResponse);
        }
    }
    /*
     *@description: Add token authentication
     *@author: Tony
     *@date: 2022-04-05 21:32:22
     *@variable1: current fetch url
    */
    function authHeader(url) {
        const token = auth?.token;
        const isLoggedIn = !!token;
        //Judging from the api address,read .env variable
        const isApiUrl = url.startsWith(process.env.REACT_APP_API_URI);
        if (isLoggedIn && isApiUrl) {
            return { Authorization: `Bearer ${token}` };
        } else {
            return {};
        }
    }
    /*
     *@description:Deal with response
     *@author: Tony
     *@date: 2022-04-05 21:35:42
     *@variable1: response object
    */
    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                //error
                if ([401, 403].includes(response.status) && !auth?.token) {
                    localStorage.removeItem("user");
                    setAuth(null);
                    navigate("/login", { replace: true });
                }
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            } else {
                if (!data.success) {
                    return Promise.reject(data.error);
                }
            }
            return data;
        });
    }
}

export { useFetchAction };