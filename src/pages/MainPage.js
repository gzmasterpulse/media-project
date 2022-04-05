/*
 *@description: Main Page
 *@author: Tony
 *@date: 2022-04-04 23:00:16
 *@version: V1.0.0
*/
import { Nav } from "components/Nav"
import FooterImg from "assets/background.png";

function MainPage() {
    return (
        <div className="container-fluid media-body">
            <Nav />
            <div className="container-fluid media-body-container">
                <div className="media-content">
                    <div className="media-content-item">
                        <p className="media-content-title">
                            Welcome back to<br/>
                            <span className="media-content-subtitle">Media Manager</span>
                        </p>
                    </div>
                    <div className="media-content-item media-content-desc">
                        <div className="media-content-desc-block pc">
                        <p>A place where you can <i>prototype</i>,<i>build</i>,<i>manage</i>,and<br /><i>deploy</i> interactive digital media across a large connected<br />network of display hardware</p>
                        </div>
                        <div className="media-content-desc-block mb">
                        <p>A place where you can <i>prototype</i>,<i>build</i>,<br /><i>manage</i>,and<i>deploy</i> interactive digital<br />media across a large connected network<br />of display hardware</p>
                        </div>
                    </div>
                    <div className="media-content-item media-content-footer">
                        <img src={FooterImg} alt="" className="img-fluid center-block"></img>
                    </div>
                </div>

            </div>
        </div>
    );
};
export { MainPage };
