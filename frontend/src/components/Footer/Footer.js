import './Footer.css';


function Footer() {

    return (
        <footer className="footer">
            <div className="footer-about">
                An Airbnb clone by James Lee
            </div>
            <div className="footer-links">
                <a id="github" className="links-github" href="https://github.com/jameswonlee" target="_blank">
                    <i className="fa-brands fa-github fa-xl"></i>
                </a>
                <a id="linkedin" className="links-linkedin" href="https://www.linkedin.com/in/jameswonlee/" target="_blank">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                </a>
            </div>
        </footer>
    )
}


export default Footer;