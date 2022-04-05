/*
 *@description: nav bar component
 *@author: Tony
 *@date: 2022-04-05 11:16:19
 *@version: V1.0.0
*/
import { useUserActions } from "hooks/UserAction";
import { authAtom } from "state/Auth";
import { useRecoilValue } from "recoil";
import Logo from "assets/logo.png";
import UserIcon from "assets/username-icon.png";

function Nav() {
    const auth = useRecoilValue(authAtom);//Get auth state
    const userActions = useUserActions();//Get use hook
    const handleLogout=(e)=>{
        if(window.confirm('Do you want to logout?')){
            //Call use hook logout
            userActions.logout();
        };
    };
    return (
        <nav className="navbar navbar-expand-sm media-nav">
            <a className="navbar-brand media-nav-logo">
                <img src={Logo}></img>
            </a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button className="btn btn-primary media-nav-right-button-logout" onClick={handleLogout}>Logout</button>
                </li>
                <li>
                    <div className="media-nav-right-user-info">
                        <span>Hello</span><br />{auth.username}
                    </div>
                </li>
                <li>
                    <div className="media-nav-right-user-icon">
                        <img src={UserIcon} alt="" />
                    </div>
                </li>
            </ul>
        </nav>
    );
}
export { Nav }