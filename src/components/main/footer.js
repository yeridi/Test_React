import React from 'react'
//componente icono
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { faCoffee } from '@fortawesome/free-solid-svg-icons' extension fas */
import { faFacebookF, faTwitter, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons'
//styles
import '../styles/footer.css'
//IMaHES
import IMG from '../../images/icon.png'
const Footer=()=>{
    return(
        <>
            <div className="footer">
                <div className="footer__container">
                    <h1>Your Model</h1>
                    <div className="footer__elements">
                        <div className="footer__information">
                            <h3>Social Media: </h3>
                            <div className="social">
                                <img src={IMG}></img>   
                                <div className="footer__social">
                                    <a href="*"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="*"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href="*"><FontAwesomeIcon icon={faGithubAlt} /></a>
                                    <a href="*"><FontAwesomeIcon icon={faInstagram} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer__information">
                            <h3>Our Contributors: </h3>
                            <p>Everyone need to know our contributer, so you can fing these information here. You can find more information in the linkers!!</p>
                            <button>Click For More Information</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Page Web makes for Holiday &copy; Copyright Thanks for read all the page</p>
            </div>
        </>
    )
}
export default Footer