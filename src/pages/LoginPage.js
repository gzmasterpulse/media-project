/*
 *@description: Login Page
 *@author: Tony
 *@date: 2022-04-04 10:25:31
 *@version: V1.0.0
*/
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom } from "state/Auth";
import { Login } from "components/login/Index";
import Logo from "assets/logo.png";

function LoginPage() {
    const auth = useRecoilValue(authAtom);
    const navigate=useNavigate();
    /*
     *@description:page load complete
     *@author: Tony
     *@date: 2022-04-05 21:41:50
    */
    useEffect(() => {
        //Judge authenticate state and navigate url
        if (auth) navigate("/",{replace:true});
    });
    return (
        <div className="container-md media-container">
            <div className="row justify-content-md-center media-container-item">
                <div className="col">
                    <div className="media-container-main">
                        <div className="media-container-main-logo">
                            <img src={Logo} alt=""></img>
                        </div>
                        <div className="media-container-main-login">
                            <h3 className="media-container-main-login-title">Welcome to<br />Media Manager</h3>
                            <Login></Login>
                        </div>
                        <div className="media-container-main-copyright">
                            &copy; 2022 Company. All rights reserved.
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5">
                    <div className="media-container-banner"></div>
                </div>
            </div>

        </div>
    );
}
export { LoginPage };
