/*
 *@description:User Action
 *@author: Tony
 *@date: 2022-04-04 21:43:26
 *@version: V1.0.0
*/
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { authAtom } from "state/Auth";
import {useFetchAction} from "./FetchAction";

function useUserActions() {
    const baseUrl = `${process.env.REACT_APP_API_URI}`;//Read .env variable
    const fetchProvier = useFetchAction();
    const navigate=useNavigate();
    const setAuth = useSetRecoilState(authAtom);
    return {
        login,
        logout
    }
    /*
     *@description: User Login Method
     *@author: Tony
     *@date: 2022-04-05 21:39:25
     *@variable1: username
     *@variable2: password
    */
    function login(username, password) {
        return fetchProvier.post(`${baseUrl}/login-user`,{username,password})
        .then(data=>{
            if(data.success){
                console.log("%s---Hello %s,Welcome to Media Manager!", new Date(), username);
                const user={username:username,token:data.content.accessToken};
                localStorage.setItem("user",JSON.stringify(user));//Store User Data (container accessToken and username)
                setAuth(user);
                navigate("/",{replace:true}); //navigate default url
                return true;
            } else{
                return Promise.reject(data.error);
            }
            
        })
    }
    /*
     *@description:User Logout Metho
     *@author: Tony
     *@date: 2022-04-05 21:40:11
    */
    function logout() {
        localStorage.removeItem("user");
        setAuth(null);
        navigate("/login",{replace:true});
    }
}
export {useUserActions};