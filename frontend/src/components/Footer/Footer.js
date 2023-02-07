import copyrightIcon from '../../icons/copyright-icon.png';
import angelList from '../../icons/angel-list.png';
import './Footer.css';
import dayjs from 'dayjs';


function Footer() {

    return (
        <footer className="footer">
            <div className="footer-left">
                <span><img src={copyrightIcon} className="copyright-icon" /> {dayjs().format("YYYY")} Ayrbnb, Inc.&nbsp; · &nbsp;An</span>
                <a id="airbnb" className="airbnb-link" href="https://www.airbnb.com" target="_blank" rel="noreferrer">
                    &nbsp;<span className="footer-name-text">Airbnb</span>&nbsp;
                </a>
                clone by<span className="footer-name-text">
                    <a id="portfolio" className="portfolio-link" href="https://james-lee.io" target="_blank" rel="noreferrer">
                        &nbsp;<span className="footer-name-text">James Lee</span>&nbsp;
                    </a>
                </span>
            </div>
            <div className="footer-right">
                <div className="footer-links">
                    <a id="github" className="links-github" href="https://github.com/jameswonlee" target="_blank">
                        <i className="fa-brands fa-github fa-xl"></i>
                    </a>
                    <a id="linkedin" className="links-linkedin" href="https://www.linkedin.com/in/jameswonlee/" target="_blank">
                        <i className="fa-brands fa-linkedin fa-xl"></i>
                    </a>
                    <a id="angel-list" className="links-angellist" href="https://angel.co/u/jameswonlee/" target="_blank">
                        <img src={angelList} className="angel-list-icon"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;