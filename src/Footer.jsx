const Footer = () => {
    return (
        <footer className="footer">
            <div className="container pt-3 pb-2 bg-black text-white">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
                <ul className="footer-links list-unstyled">
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;