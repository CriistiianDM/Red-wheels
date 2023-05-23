import React from "react";
import './footer.css';
import fb from '../../assets/socialmedia_img/fb_img.png';
import insta from '../../assets/socialmedia_img/insta_img.png';
import twitter from '../../assets/socialmedia_img/twitter_img.png';

function Footer() {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>LINEA DE ATENCIÓN</h4>
                        <p>01 8000 345 678</p>
                        <p>320 269 45 78</p>
                        <a href="/correo">
                            <p>servicioalcliente@redwheels.com.co</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>EMPRESA</h4>
                        <a href="/aboutus">
                            <p>Sobre nosotros</p>
                        </a>
                        <a href="/priv">
                            <p>Política y privacidad</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>SIGUENOS</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={insta} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
